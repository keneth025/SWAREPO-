import { dateToDateString } from '../../util/date.util';
import { Person, SPModel } from './_model';

const DateNow = new Date();
DateNow.setHours(0, 0, 0, 0);

export enum MandatoryTrainingStatus {
  ACTIVE = 'Active',
  EXPIRED = 'Expired',
}

export class MandatoryTraining extends SPModel {
  constructor(args: Partial<MandatoryTraining>) {
    super();
    Object.assign(this, args);
  }

  CoursesId: Set<number> = new Set([]);
  CourseNames: string[] = [];
  ExamsId: Set<number> = new Set([]);
  ExamNames: string[] = [];

  NotificationSubject = '';
  NotificationMessage = '';
  Editor: Person = null;

  private _DueDate: Date = null;
  get DueDate() { return this._DueDate; }
  set DueDate(value) {
    this._DueDate = value;
    this._DateDueDate = dateToDateString(value);
    const newDueDate = new Date(value.toDateString());
    newDueDate.setDate(value.getDate() + 1);
    this._Status = (DateNow.getTime() > newDueDate.getTime()) ? MandatoryTrainingStatus.EXPIRED : MandatoryTrainingStatus.ACTIVE;
  }
  private _DateDueDate = '';
  get DateDueDate() { return this._DateDueDate; }

  private _Status: MandatoryTrainingStatus = MandatoryTrainingStatus.EXPIRED;
  get Status() { return this._Status; }

  private _FinalDate: Date = null;
  get FinalDate() { return this._FinalDate; }
  set FinalDate(value) {
    this._FinalDate = value;
    this._DateFinalDate = value ? dateToDateString(value) : '';
  }
  private _DateFinalDate = '';
  get DateFinalDate() { return this._DateFinalDate; }

  toSPData() {
    const {
      CoursesId,
      ExamsId,
      DueDate,
      FinalDate,
      NotificationSubject,
      NotificationMessage,
    } = this;
    return {
      CoursesId: { results: Array.from(CoursesId) },
      ExamsId: { results: Array.from(ExamsId) },
      DueDate: DueDate.toISOString().split('T')[0],
      FinalDate: FinalDate.toISOString().split('T')[0],
      NotificationSubject,
      NotificationMessage,
    };
  }
}
