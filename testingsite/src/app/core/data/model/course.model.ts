import { SPEmployeeItem, SPItem } from './_model';

export enum CourseStatus {
  Completed     = 'Completed',
  Pending       = 'Pending',
  NotRegistered = 'Not Started',
}

export class UserCourse extends SPEmployeeItem {
  constructor(args: Partial<UserCourse>) {
    super();
    Object.assign(this, args);
  }

  CourseId = -1;
  CourseName = '';
  Status: CourseStatus = CourseStatus.Pending;

  toSPData() {
    const { User, CourseId, Status } = this;
    return {
      CourseId,
      Status,
      UserId: User.Id,
    };
  }
}

export class UserCourseRating extends SPEmployeeItem {
  CourseId = -1;
  Rating = 0;
  Review = '';

  constructor(args: Partial<UserCourseRating>) {
    super();
    Object.assign(this, args);
  }

  toSPData() {
    const { User, CourseId, Rating, Review } = this;
    return {
      UserId: User.Id,
      CourseId,
      Rating,
      Review,
    };
  }
}

export class Course extends SPItem {
  constructor(args: Partial<Course>) {
    super();
    Object.assign(this, args);
  }

  MaterialLink = '';
  Tags = '';
  IsClassroom = false;
  LearningCategoryName = '';
  LearningSubCategoryId: number = null;

  private _CurriculumNames = '';
  get CurriculumNames() { return this._CurriculumNames; }
  private _CurriculumNameArr: string[] = [];
  get CurriculumNameArr() { return this._CurriculumNameArr; }
  set CurriculumNameArr(value) {
    this._CurriculumNameArr = value;
    this._CurriculumNames = value.join(', ');
  }

  private _DurationString = 'No duration';
  get DurationString() { return this._DurationString; }
  private _Duration = '';
  get Duration() { return this._Duration; }
  set Duration(value) {
    this._Duration = value;
    if (value) {
      try {
        const [ hrs, min ] = value.split(':').map(e => parseInt(e, 10));
        this._DurationString = `${hrs} hours ${min} mins`;
      } catch {
        console.error(`Invalid Course Duration! [Name: ${this.Title}]`);
        this._DurationString = 'No duration';
      }
    } else {
      this._DurationString = 'No duration';
    }
  }

  private _HasRecord = false;
  get HasRecord() { return this._HasRecord; }

  private _Status = CourseStatus.NotRegistered;
  get Status() { return this._Status; }

  private _CompletionDate = '';
  get CompletionDate() {
    return this._CompletionDate;
  }

  private _Record: UserCourse = null;
  get Record() { return this._Record; }
  set Record(value) {
    this._Record = value;
    if (value) {
      this._Status = value.Status;
      this._HasRecord = true;
      this._CompletionDate = value.DateModified;
    } else {
      this._Status = CourseStatus.NotRegistered;
      this._HasRecord = false;
    }
  }

  toSPData() {
    const {
      Title,
      LearningSubCategoryId,
      Description,
      Duration,
      MaterialLink,
      Tags,
      IsClassroom,
      Owners,
      Editor,
      Modified,
    } = this;

    return {
      Title,
      LearningSubCategoryId,
      Description,
      Duration,
      MaterialLink,
      Tags,
      IsClassroom,
      OwnersId: { results: Owners.map(e => e.Id) },
      OwnerModifiedById: Editor ? Editor.Id : undefined,
      OwnerModified: Modified,
    };
  }

}

export interface CourseDocument {
  Id: number;
  Title: string;
  
}

// If you meant CourseDocumentReport, export that instead:
export interface CourseDocumentReport {
  Id: number;
  Title: string;
  
}

// Example: Fetch last updated documents from SharePoint
const url = "https://dxcportal.sharepoint.com/sites/southwestKnowledgeCentral/QA";
