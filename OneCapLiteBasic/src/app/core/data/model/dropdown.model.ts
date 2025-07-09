import { SPModel } from './_model';

// Organization
export class OrgLvl1 extends SPModel {
  constructor(args: Partial<OrgLvl1>) {
    super();
    Object.assign(this, args);
  }
}

export class OrgLvl2 extends SPModel {
  OrgLvl1Id = -1;
  constructor(args: Partial<OrgLvl2>) {
    super();
    Object.assign(this, args);
  }
}



// Country
export class Country extends SPModel {
  CountryCode = '';
  constructor(args: Partial<Country>) {
    super();
    Object.assign(this, args);
  }
}

// Role
export class RoleCategory extends SPModel {
  RoleSubCategoryList: RoleSubCategory[] = [];
  constructor(args: Partial<RoleCategory>) {
    super();
    Object.assign(this, args);
  }
}

export class RoleSubCategory extends SPModel {
  CategoryId = -1;
  constructor(args: Partial<RoleSubCategory>) {
    super();
    Object.assign(this, args);
  }
}

/* Learning */
export class LearningCategory extends SPModel {
  SubCategoryList: LearningSubCategory[] = [];
  constructor(args: Partial<LearningCategory>) {
    super();
    Object.assign(this, args);
  }
}

export class LearningSubCategory extends SPModel {
  CategoryId = -1;
  CategoryName = '';
  get FullName() {
    return [this.CategoryName, this.Title].join(' - ');
  }
  constructor(args: Partial<LearningSubCategory>) {
    super();
    Object.assign(this, args);
  }
}
