import { totalDurationList } from '../../util/data.util';
import { SPItem } from './_model';

export class Curriculum extends SPItem {
  constructor(args: Partial<Curriculum>) {
    super();
    Object.assign(this, args);
  }

  LearningCategoryName = '';
  LearningSubCategoryId: number = null;
  CoursesId: Set<number> = new Set([]);
  ExamsId: Set<number> = new Set([]);

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

  private _TotalDuration = '';
  get TotalDuration() { return this._TotalDuration; }

  private _TotalDurationString = 'No duration';
  get TotalDurationString() { return this._TotalDurationString; }

  private _CompletionPercentage = 0;
  get CompletionPercentage() { return this._CompletionPercentage; }
  set CompletionPercentage(value) {
    this._CompletionPercentage = value;
  }

  toSPData() {
    const {
      Title,
      Description,
      Owners,
      CoursesId,
      ExamsId,
      LearningSubCategoryId,
      Editor,
      Modified,
    } = this;
    return {
      Title,
      Description,
      LearningSubCategoryId,
      CoursesId: { results: Array.from(CoursesId) },
      ExamsId: { results: Array.from(ExamsId) },
      OwnersId: { results: Owners.map(e => e.Id) },
      OwnerModifiedById: Editor ? Editor.Id : undefined,
      OwnerModified: Modified,
    };
  }
}
