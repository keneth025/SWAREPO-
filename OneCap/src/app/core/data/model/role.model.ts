import { totalDurationList } from '../../util/data.util';
import { SPEmployeeItem, SPItem } from './_model';

export class UserRole extends SPEmployeeItem {
  RoleId = -1;
  RoleName = '';

  constructor(args: Partial<UserRole>) {
    super();
    Object.assign(this, args);
  }

  toSPData() {
    const { User, RoleId } = this;
    return {
      RoleId,
      UserId: User.Id,
    };
  }
}

export class Role extends SPItem {
  constructor(args: Partial<Role>) {
    super();
    Object.assign(this, args);
  }

  // Data Fields
  SubCategoryId = -1;
  CurriculaId = new Set<number>();
  CoursesId = new Set<number>();
  ExamsId = new Set<number>();


  // Utility Fields
  CategoryName = '';
  SubCategoryName = '';


  private _TotalDuration = '';
  get TotalDuration() { return this._TotalDuration; }

  private _TotalDurationString = 'No duration';
  get TotalDurationString() { return this._TotalDurationString; }

  private _DurationList: string[] = [];
  get DurationList() { return this._DurationList; }
  set DurationList(value) {
    this._DurationList = value.filter(e => e);
    this._TotalDuration = totalDurationList(this._DurationList);
    if (this._TotalDuration) {
      try {
        const [ hrs, min ] = this._TotalDuration.split(':').map(e => parseInt(e, 10));
        this._TotalDurationString = `${hrs} hours ${min} mins`;
      } catch {
        console.error(`Invalid Course Duration! [Name: ${this.Title}]`);
        this._TotalDurationString = 'No duration';
      }
    } else {
      this._TotalDurationString = 'No duration';
    }
  }

  private _Record: UserRole = null;
  get Record() { return this._Record; }
  set Record(value) {
    this._Record = value;
    this._IsCurrentRole = value ? true : false;
  }

  private _IsCurrentRole = false;
  get IsCurrentRole() { return this._IsCurrentRole; }
  set IsCurrentRole(value) {
    this._IsCurrentRole = value;
  }

  toSPData() {
    const {
      Title,
      Description,
      SubCategoryId,
      CurriculaId,
      CoursesId,
      ExamsId,
      Owners,
      Editor,
      Modified,
    } = this;
    return {
      Title,
      Description,
      RoleSubCategoryId: SubCategoryId,
      CurriculaId: {
        results: Array.from(CurriculaId)
      },
      CoursesId: {
        results: Array.from(CoursesId)
      },
      ExamsId: {
        results: Array.from(ExamsId)
      },
      OwnersId: {
        results: Owners.map(e => e.Id)
      },
      OwnerModifiedById: Editor ? Editor.Id : undefined,
      OwnerModified: Modified,
    };
  }

}
