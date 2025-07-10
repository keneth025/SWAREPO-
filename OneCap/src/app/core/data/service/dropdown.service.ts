import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { getAllData } from '../../util/data.util';
import { Country, LearningCategory, LearningSubCategory, OrgLvl1, OrgLvl2, RoleCategory, RoleSubCategory } from '../model/dropdown.model';
import { AccountService } from './account.service';

import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor(
    private accountService: AccountService
  ) {}

  private get isSiteOwner() { return this.accountService.account.IsSiteOwner; }

  private get userId() { return this.accountService.account.Id; }

  protected sp = sp;

  private async getSortedData(ListName: string) {
    return await getAllData(
      this.sp.web.lists.getByTitle(ListName).items
      .orderBy('Title')
      .top(5000)
    );
  }

  // Organization Dropdown
  async getOrgLvl1() {
    const tempList = await this.getSortedData(SPList.ORG_LVL_1);
    return tempList.map(e => new OrgLvl1({
      Id: e?.Id,
      Title: e?.Title,
    }));
  }

  async getOrgLvl2() {
    const tempList = await this.getSortedData(SPList.ORG_LVL_2);
    return tempList.map(e => new OrgLvl2({
      Id: e?.Id,
      Title: e?.Title,
      OrgLvl1Id: e?.OrgLvl1Id
    }));
  }

  // Country Dropdown
  async getCountry() {
    const tempList = await this.getSortedData(SPList.COUNTRY);
    return tempList.map(e => new Country({
      Id: e?.Id,
      Title: e?.Title,
      CountryCode: e?.CountryCode,
    }));
  }

  // Role Dropdowns
  async getRoleCategory() {
    const tempList = await this.getSortedData(SPList.ROLE_CATEGORY);
    return tempList.map(e => new RoleCategory({
      Id: e.Id,
      Title: e.Title,
    }));
  }

  async getRoleSubCategory() {
    const tempList = await this.getSortedData(SPList.ROLE_SUB_CATEGORY);
    return tempList.map(e => new RoleSubCategory({
      Id: e.Id,
      Title: e.Title,
      CategoryId: e.CategoryId
    }));
  }

  /* Learning Dropdowns */
  async getLearningCategory() {
    const tempList = await this.getSortedData(SPList.LEARNING_CATEGORY);
    return tempList.map(e => new LearningCategory({
      Id: e.Id,
      Title: e.Title
    }));
  }

  async getLearningSubCategory() {
    const tempList = await getAllData(
      this.sp.web.lists.getByTitle(SPList.LEARNING_SUB_CATEGORY)
      .items
      .expand('Category')
      .select(
        '*',
        'Category/Title'
      )
      .orderBy('Title')
      .top(5000)
    );
    return tempList.map(e => new LearningSubCategory({
      Id: e.Id,
      Title: e.Title,
      CategoryId: e.CategoryId,
      CategoryName: e.Category ? e.Category.Title : ''
    }));
  }
}
