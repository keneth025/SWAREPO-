import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { UserProfile } from '../model/user-profile.model';
import { Person } from '../model/_model';
import { itemStatus, SPModelService } from './_service';
import '@pnp/sp/site-groups';
import { GROUP } from 'src/environments/environment';
import { UserRole } from '../model/role.model';
import { convertToFilterMap, convertToMap } from '../../util/data.util';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends SPModelService<UserProfile> {

  serviceName = 'User Profile Service';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.USER).items
    .expand(
      'User',
      'Manager',
    ).select(
      '*',
      'User/Id',
      'User/Name',
      'User/Title',
      'User/EMail',
      'Manager/Id',
      'Manager/Title',
      'Manager/EMail',
    )
    .orderBy('User/Title');
  }

  async getItemByUserId(UserId: number) {
    const tempList = await this.query.filter(`UserId eq ${UserId}`).get();
    if (tempList.length > 0) {
      return this.toObject(tempList[0]);
    }
    return null;
  }

  protected toObject(data) {
    const {
      Id,
      User,
      Manager,
      CountryId,
      OrgLvl2Id,
    } = data;
    const UserObj = User ? new Person({
      Id: User.Id,
      Title: User.Title,
      EMail: User.EMail,
      LoginName: User.Name,
    }) : new Person({});

    const ManagerObj = Manager ? new Person({
      Id: Manager.Id,
      Title: Manager.Title,
      EMail: Manager.EMail,
    }) : new Person({});

    return new UserProfile({
      Id,
      User: UserObj,
      Manager: ManagerObj,
      CountryId,
      OrgLvl2Id,
    });
  }

  async validateUserExistence(email: string, id = -1) {
    const safeEmail = this.odataEscapeString(email);
    let filter = `User/EMail eq '${safeEmail}'`;
    if (id !== -1) {
      filter += `and ID ne ${id}`;
    }
    const result = await this.query.filter(filter).get();
    return result.length === 0;
  }

  async save(data: UserProfile) {
    if (data.Id === -1) {
      await this.sp.web.siteGroups.getByName(GROUP.Employee).users.add(data.User.LoginName);
    }
    return await super.save(data);
  }

  async batchSave(dataArr: UserProfile[]) {
    let returnArr: {status: itemStatus, data: UserProfile}[] = [];

    const userIdArr = dataArr.map(e => e.User.Id);
    const itemsArr = await this.getItemsByUserIdArr(userIdArr);
    const itemMap = itemsArr.reduce(
      (returnValue, element) => ({
        ...returnValue,
        [element?.User?.Id || -1]: element
      }), {}
    );
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => {
          const { User } = e;
          if (!itemMap[User.Id]) {
            return this.save(e).then(res => ({
              status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
              data: e
            }));
          }
          console.error(`[${this.serviceName}] User '${User.Title}' already exist.`);
          return Promise.resolve({ status: itemStatus.CANCELED, data: e });
        }
      );
      const tempArr = await Promise.all(chunkArr);
      returnArr = [...returnArr, ...tempArr];
    }
    return returnArr;

  }

  async delete(data: UserProfile) {
    await this.sp.web.siteGroups.getByName(GROUP.Employee).users.removeByLoginName(data.User.LoginName);
    return await super.delete(data);
  }

  protected async getItemsByUserIdArr(UserIdArr: number[]) {
    const { chunk, batch } = this;
    const batchSize = (chunk * batch);
    let returnArr: UserProfile[] = [];
    for (let idx = 0; idx < UserIdArr.length; idx += batchSize) {
      const batchArr = UserIdArr.slice(idx, (idx + batchSize));
      let queryArr: string[] = [];

      for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
        const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
        let query = '';
        for (const [itemIdx, UserId] of chunkArr.entries()) {
          query += `UserId eq ${UserId}`;
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

}
