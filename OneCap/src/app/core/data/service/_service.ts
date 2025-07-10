import { Injectable } from '@angular/core';
import { convertToFilterMap, convertToMap, getAllData } from '../../util/data.util';
import { SPEmployeeItem, SPItem, SPModel } from '../model/_model';
import { AccountService } from './account.service';

import { sp } from '@pnp/sp';
import { IItems, PagedItemCollection } from '@pnp/sp/items';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';

export enum itemStatus {
  UPDATED = -1,
  CREATED = 1,
  CANCELED = 0,
}

export interface SPFilter {
  [key: string]: number | number[] | string;
}


@Injectable({
  providedIn: 'root'
})
export class SPModelService<T extends SPModel> {

  protected serviceName = '';

  protected readonly sp = sp;

  protected pageSize  = 16;
  protected batch     = 3;
  protected readonly batchIdSize = 50;
  protected readonly chunk = 5;

  protected get query(): IItems {
    throw new Error('query must be implemented!');
  }

  protected toObject(data: any): T {
    throw new Error('toObject must be implemented!');
  }

  protected odataEscapeString(str: string) {
    return str.replace(`'`, `''`);
  }

  protected convertFiltersToQuery(filters: SPFilter) {
    let queryStr = '';

    for (const field in filters) {
      if (!filters[field]) { continue; }
      if (queryStr) { queryStr += ' and '; }
      switch (typeof filters[field]) {
        case 'string':
          const safeStr = this.odataEscapeString((filters[field] as string));
          const fieldArr = field.split('|');
          const tempSubQuery = fieldArr.map(e => `substringof('${safeStr}', ${e})`).join(' or ');
          queryStr += `(${tempSubQuery})`;
          break;
        case 'number':
          queryStr += `(${field} eq ${filters[field]})`;
          break;
        case 'object':
          if (Array.isArray(filters[field])) {
            let tempQuery = '';
            if ((filters[field] as number[]).length > 0) {
              for (const id of (filters[field] as number[])) {
                if (tempQuery) { tempQuery += ' or '; }
                tempQuery += `${field} eq ${id}`;
              }
            } else {
              tempQuery += `${field} eq -1`;
            }
            if (tempQuery) {
              queryStr += `(${tempQuery})`;
            }
          }
          break;
      }
    }

    return queryStr;
  }

  async save(data: T) {
    if (data.Id === -1) {
      const res = await this.query.add(data.toSPData());
      return await this.getItemById(res.data.ID);
    } else {
      await this.query.getById(data.Id).update(data.toSPData());
      return data;
    }
  }

  async delete(data: T) {
    if (data.Id !== -1) {
      return await this.query.getById(data.Id).delete();
    }
    console.error(`Invalid Id: ${data.Id}`);
  }

  async getItemById(Id: number) {
    const data = await this.query.filter(`ID eq ${Id}`).get();
    if (data.length > 0) {
      return this.toObject(data[0]);
    }
    console.error(`[${this.serviceName}] can't get: Id - ${Id} `);
    return null;
  }

  async getItemsByIdArr(IdArr: number[]) {
    if (IdArr.length > 0) {
      const { chunk, batchIdSize } = this;
      const batchSize = (chunk * batchIdSize);

      let returnArr: T[] = [];
      for (let idx = 0; idx < IdArr.length; idx += batchSize) {
        const batchArr = IdArr.slice(idx, (idx + batchSize));
        let queryArr: string[] = [];

        for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
          const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
          const chunkQuery = chunkArr.map(e => `ID eq ${e}`)
          .join(' or ');
          const query = `(${chunkQuery})`;
          queryArr = [...queryArr, query];
        }
        const promiseArr = queryArr.map(e => getAllData(this.query.filter(e).top(1000)).then(data => data.map(i => this.toObject(i))));
        const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
        returnArr = [...returnArr, ...tempData];
      }
      return returnArr;
    }
    return [];
  }

  async getPagedData(filters?: SPFilter) {
    const queryStr = this.convertFiltersToQuery(filters);
    const pagedData = await this.query.filter(queryStr).top(this.pageSize).getPaged();
    const { results } = pagedData;
    pagedData.results = results.map(e => this.toObject(e));
    return (pagedData as PagedItemCollection<T[]>);
  }

  async getNextPage(pagedData: PagedItemCollection<T[]>) {
    const nextData = await pagedData.getNext();
    const { results } = nextData;
    nextData.results = results.map(e => this.toObject(e));
    return nextData;
  }

  async getAll() {
    const tempList = await getAllData(this.query.top(5000));
    return tempList.map(e => this.toObject(e));
  }
}

@Injectable({
  providedIn: 'root'
})
export class SPItemService<T extends SPItem> extends SPModelService<T>  {

  constructor(
    protected accountService: AccountService,
  ) { super(); }

  protected get UserId() { return this.accountService.account.Id; }
  protected get IsSiteOwner() { return this.accountService.account.IsSiteOwner; }

  protected async getItemsByTitle(Titles: string[]) {
    const { chunk, batch } = this;
    const batchSize = (chunk * batch);
    let returnArr: T[] = [];
    for (let idx = 0; idx < Titles.length; idx += batchSize) {
      const batchArr = Titles.slice(idx, (idx + batchSize));
      let queryArr: string[] = [];

      for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
        const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
        let query = '';
        for (const [itemIdx, title] of chunkArr.entries()) {
          const escapedTitle =  this.odataEscapeString(title);
          query += `Title eq '${escapedTitle}'`;
          if (itemIdx < chunkArr.length - 1) { query += ' or '; }
        }
        queryArr = [...queryArr, query];
      }
      const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
      const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
      returnArr = [...returnArr, ...tempData];
    }
    return returnArr;
  }

  async batchSave(dataArr: T[]) {
    let returnArr: {status: itemStatus, data: T}[] = [];

    const titleArr = dataArr.map(e => e.Title);
    const itemsArr = await this.getItemsByTitle(titleArr);
    const itemMap = convertToMap(titleArr, itemsArr, 'Title');
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => {
          const { Title } = e;
          let IsOwner = true;
          if (itemMap[Title]) {
            e.Id = itemMap[Title].Id;
            IsOwner = itemMap[Title].IsOwner;
          }
          if (IsOwner) {
            return this.save(e).then(res => ({
              status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
              data: e
            }));
          }
          console.error(`[${this.serviceName}] can't update: '${e.Title}' is not owned.`);
          return Promise.resolve({ status: itemStatus.CANCELED, data: e });
        }
      );
      const tempArr = await Promise.all(chunkArr);
      returnArr = [...returnArr, ...tempArr];
    }
    return returnArr;
  }

  async validateTitle(title: string, id: number = -1) {
    const safeTitle = this.odataEscapeString(title);
    let filter = `Title eq '${safeTitle}'`;
    if (id !== -1) {
      filter += `and ID ne ${id}`;
    }
    filter = filter;
    const tempList = await this.query.filter(filter).get();
    return (tempList.length === 0);
  }

  async save(data: T) {
    if (!this.accountService.account.IsSiteOwner) {
      data.Editor = this.accountService.account;
      data.Modified = new Date(Date.now());
    }
    return await super.save(data);
  }


}

@Injectable({
  providedIn: 'root'
})
export class SPEmployeeItemService<T extends SPEmployeeItem> extends SPModelService<T>  {

  constructor(
    protected accountService: AccountService
  ) { super(); }

  protected userData: { [ItemRecordId: number]: T } = {};
  protected userList: T[] = [];
  protected ObjectColumn = '';
  protected ItemRecordColumn = '';

  protected _ActiveUserId = -1;
  protected get ActiveUserId() {
    if (this._ActiveUserId !== -1) {
      return this._ActiveUserId;
    }
    return this.accountService.account.Id;
  }
  protected set ActiveUserId(value) {
    this._ActiveUserId = value;
    this.reset();
  }

  private _DataIsLoaded = false;
  get DataIsLoaded() { return this._DataIsLoaded; }


  unsetActiveUser() {
    this.ActiveUserId = -1;
  }

  setActiveUser(ProfileId: number) {
    this.ActiveUserId = ProfileId;
  }

  reset() {
    this.userData = {};
    this.userList = [];
  }

  getRecord(ItemRecordId: number) {
    return this.userData[ItemRecordId];
  }

  getRecordList() {
    return this.userList;
  }

  async getAll() {
    if (!this.accountService.account) {
      throw new Error(`[${this.serviceName}]: Account Not yet verified.`);
    }
    const tempList = await getAllData(this.query.filter(`UserId eq ${this.ActiveUserId}`).top(5000));
    const transformedList = tempList.map(e => this.toObject(e));
    this.userList = transformedList;
    this.userData = convertToFilterMap<T>(transformedList, this.ObjectColumn);
    this._DataIsLoaded = true;
    return transformedList;
  }

  async save(data: T) {
    if (!data.User) {
      data.User = this.accountService.account;
    }
    const result = await super.save(data);
    this.userData[result[this.ObjectColumn]] = result;
    return result;
  }

  async getItemsByRecordValue(dataArr: T[]) {
    const { chunk, batch } = this;
    const batchSize = (chunk * batch);

    let returnArr: T[] = [];
    for (let idx = 0; idx < dataArr.length; idx += batchSize) {
      const batchArr = dataArr.slice(idx, (idx + batchSize));
      let queryArr: string[] = [];

      for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
        const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
        const userIdSet = new Set<number>();
        const itemRecordIdSet = new Set<number>();
        for (const e of chunkArr) {
          userIdSet.add(e.User.Id);
          itemRecordIdSet.add(e[this.ObjectColumn]);
        }
        const userQuery = Array.from(userIdSet).map(e => `UserId eq ${e}`)
        .join(' or ');
        const itemRecordQuery = Array.from(itemRecordIdSet).map(e => `${this.ItemRecordColumn} eq ${e}`)
        .join(' or ');
        const query = `(${userQuery}) and (${itemRecordQuery})`;
        queryArr = [...queryArr, query];
      }
      const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
      const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
      returnArr = [...returnArr, ...tempData];
    }
    return returnArr;
  }

  async batchSave(dataArr: T[]) {
    let returnArr: {status: itemStatus, data: T}[] = [];
    const itemsArr = await this.getItemsByRecordValue(dataArr);
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => {
          const FoundItem = itemsArr.find(i => i.User.Id === e.User.Id && i[this.ObjectColumn] === e[this.ObjectColumn]);
          if (FoundItem) {
            e.Id = FoundItem.Id;
          }
          return this.save(e).then(res => ({
            status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
            data: e
          }));
        }
      );
      const tempArr = await Promise.all(chunkArr);
      returnArr = [...returnArr, ...tempArr];
    }
    return returnArr;
  }

  async delete(data: T) {
    await super.delete(data);
    delete this.userData[data[this.ObjectColumn]];
  }

  async batchDelete(dataArr: T[]) {
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => this.delete(e)
      );
      const tempArr = await Promise.all(chunkArr);
    }
  }

  async getItemByItemRecordId(ItemRecordId: number) {
    const { ItemRecordColumn } = this;
    const data = await this.query.filter(`(UserId eq ${this.ActiveUserId}) and (${ItemRecordColumn} eq ${ItemRecordId})`).get();
    if (data.length > 0) {
      return this.toObject(data[0]);
    }
    console.error(`[${this.serviceName}] can't get: Id - ${ItemRecordId} `);
    return null;
  }

  async getItemsByItemRecordIdArr(IdArr: number[]) {
    if (IdArr.length > 0) {
      const { chunk, batchIdSize, ItemRecordColumn } = this;
      const batchSize = (chunk * batchIdSize);

      let returnArr: T[] = [];
      for (let idx = 0; idx < IdArr.length; idx += batchSize) {
        const batchArr = IdArr.slice(idx, (idx + batchSize));
        let queryArr: string[] = [];

        for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
          const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
          const chunkQuery = chunkArr.map(e => `${ItemRecordColumn} eq ${e}`)
          .join(' or ');
          const query = `(UserId eq ${this.ActiveUserId}) and (${chunkQuery})`;
          queryArr = [...queryArr, query];
        }
        const promiseArr = queryArr.map(e => getAllData(this.query.filter(e).top(1000)).then(data => data.map(i => this.toObject(i))));
        const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
        returnArr = [...returnArr, ...tempData];
      }
      return returnArr;
    }
    return [];
  }

  async getReport(ItemRecordIdArr: number[] = []) {
    if (!this.ItemRecordColumn) {
      throw new Error(`[${this.serviceName}]: ItemRecordColumn attribute not declared`);
    }
    const IdArr = ItemRecordIdArr;
    if (IdArr.length > 0) {
      const { chunk } = this;
      const batchIdSize = 1;
      const batchSize = (chunk * batchIdSize);

      let returnArr: T[] = [];
      for (let idx = 0; idx < IdArr.length; idx += batchSize) {
        const batchArr = IdArr.slice(idx, (idx + batchSize));
        let queryArr: string[] = [];

        for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
          const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
          const courseQuery = chunkArr.map(e => `${this.ItemRecordColumn} eq ${e}`)
          .join(' or ');
          const query = `(${courseQuery})`;
          queryArr = [...queryArr, query];
        }
        const promiseArr = queryArr.map(e => getAllData(this.query.filter(e).top(5000)).then(data => data.map(i => this.toObject(i))));
        const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
        returnArr = [...returnArr, ...tempData];
      }
      return returnArr;
    }
    return await getAllData(this.query.top(5000)).then(data => data.map(i => this.toObject(i)));
  }

}



