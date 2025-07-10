import { GROUP } from 'src/environments/environment';
import { Person } from './_model';

export class Account extends Person {
  constructor(args: Partial<Account>) {
    super(args);
    Object.assign(this, args);
  }

  ProfileImgUrl = '';
  IsSiteAdmin = false;

  private _IsSiteOwner = false;
  get IsSiteOwner() { return this._IsSiteOwner; }

  private _IsAdmin = false;
  get IsAdmin() { return this._IsAdmin; }

  private _Groups: string[] = [];
  get Groups() { return this._Groups; }
  set Groups(value) {
    this._Groups = value;
    this._IsSiteOwner = value.includes(GROUP.Owner);
    this._IsAdmin = value.includes(GROUP.Admin);
  }

  hasGroup(groupName: GROUP) {
    return this.Groups.includes(groupName);
  }
}
