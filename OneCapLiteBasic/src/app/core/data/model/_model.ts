import { getDescriptionCount, getHTMLText } from '../../util/data.util';
import { dateToDateString, dateToExportDateString } from '../../util/date.util';

export class Person {
  constructor(args: Partial<Person>) {
    Object.assign(this, args);
  }
  Id = -1;
  Title = '';
  EMail = '';
  LoginName = '';
}

export class SPModel {
  Id    = -1;
  Title = '';

  private _Modified: Date | null = null;
  private _DateModified = '';
  private _DateModifiedExport = '';
  get Modified() { return this._Modified; }
  set Modified(value) {
    this._Modified = value;
    if (value) {
      this._DateModified = dateToDateString(value);
      this._DateModifiedExport = dateToExportDateString(value);
    }
  }
  get DateModified() { return this._DateModified; }
  get DateModifiedExport() { return this._DateModifiedExport; }

  toSPData(): any {
    throw new Error(`toSPData() is not implemented!`);
  }
}

export class SPItem extends SPModel {
  private _Description = '';
  get Description() { return this._Description; }
  set Description(value) {
    this._Description = value;
    this._RawDescription = getHTMLText(value);
    this._HasDescription = getDescriptionCount(value) > 0;
  }
  private _RawDescription = '';
  get RawDescription() { return this._RawDescription; }
  private _HasDescription = false;
  get HasDescription() { return this._HasDescription; }

  Editor: Person | null = null;
  Owners: Person[] = [];
  IsOwner = false;
}

export class SPEmployeeItem extends SPModel {
  User: Person | null = null;
}
