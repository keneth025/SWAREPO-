import { Person, SPModel } from './_model';

export class UserProfile extends SPModel {
  constructor(args: Partial<UserProfile>) {
    super();
    Object.assign(this, args);
  }

  User: Person = null;
  Manager: Person = null;
  CountryId = -1;
  OrgLvl2Id = -1;

  toSPData() {
    const {
      User,
      Manager,
      CountryId,
      OrgLvl2Id
    } = this;
    return {
      UserId: User?.Id || null,
      ManagerId: Manager?.Id || null,
      CountryId: CountryId > 0 ? CountryId : null,
      OrgLvl2Id: OrgLvl2Id > 0 ? OrgLvl2Id : null,
    };
  }
}
