import { SPEmployeeItem, SPItem, SPModel } from './_model';

export enum ExamStatus {
  NOT_YET_TAKEN = 'Not yet Taken',
  PASSED        = 'Passed',
  FAILED        = 'Failed',
}

export class UserExam extends SPEmployeeItem {
  constructor(args: Partial<UserExam>) {
    super();
    Object.assign(this, args);
  }

  ExamId = -1;
  ExamName = '';
  private _PassingScore = 0;
  get PassingScore() { return this._PassingScore; }
  set PassingScore(value) {
    this._PassingScore = value;
    this.updateStatus();
  }

  private _IsTaken = false;
  get IsTaken() { return this._IsTaken; }
  set IsTaken(value) {
    this._IsTaken = value;
    this.updateStatus();
  }

  private _Score = 0;
  get Score() { return this._Score; }
  set Score(value) {
    this._Score = value;
    this.updateStatus();
  }

  private _Status = ExamStatus.NOT_YET_TAKEN;
  get Status() { return this._Status; }

  private _Attempts = 0;
  get Attempts() { return this._Attempts; }
  set Attempts(value) {
    this._Attempts = value;
  }

  private updateStatus() {
    if (!this._IsTaken) {
      this._Status = ExamStatus.NOT_YET_TAKEN;
    } else {
      this._Status = (this._Score >= this._PassingScore) ? ExamStatus.PASSED : ExamStatus.FAILED;
    }
  }

  toSPData() {
    const { User, ExamId, Score, IsTaken, Attempts } = this;
    return {
      UserId: User.Id,
      ExamId,
      Score,
      IsTaken,
      Attempts,
    };
  }
}

export class Exam extends SPItem {
  constructor(args: Partial<Exam>) {
    super();
    Object.assign(this, args);
  }

  LearningCategoryName = '';
  LearningSubCategoryId: number = null;
  Tags = '';
  PassingRate = 0;
  RelatedCoursesId: number[] = [];

  private _CurriculumNameArr: string[] = [];
  get CurriculumNameArr() { return this._CurriculumNameArr; }
  set CurriculumNameArr(value) {
    this._CurriculumNameArr = value;
    this._CurriculumNames = value.join(', ');
  }
  private _CurriculumNames = '';
  get CurriculumNames() { return this._CurriculumNames; }

  private _HasRecord = false;
  get HasRecord() { return this._HasRecord; }

  private _Status = ExamStatus.NOT_YET_TAKEN;
  get Status() { return this._Status; }

  private _CompletionDate = '';
  get CompletionDate() {
    return this._CompletionDate;
  }

  private _Record: UserExam = null;
  get Record() { return this._Record; }
  set Record(value) {
    this._Record = value;
    if (value) {
      this._Status = value.Status;
      this._HasRecord = true;
      this._CompletionDate = value.DateModified;
    } else {
      this._Status = ExamStatus.NOT_YET_TAKEN;
      this._HasRecord = false;
    }
  }

  toSPData() {
    const {
      Title,
      Description,
      Tags,
      PassingRate,
      RelatedCoursesId,
      LearningSubCategoryId,
      Owners,
      Editor,
      Modified,
    } = this;

    return {
      Title,
      LearningSubCategoryId,
      Description,
      Tags,
      PassingRate,
      RelatedCoursesId: { results: RelatedCoursesId },
      OwnersId: { results: Owners.map(e => e.Id) },
      OwnerModifiedById: Editor ? Editor.Id : undefined,
      OwnerModified: Modified,
    };
  }
}

export enum QuestionType {
  TRUE_OR_FALSE = 'True or False',
  SINGLE_ANSWER = 'Single Answer',
  MULTIPLE_ANSWER = 'Multiple Answers'
}

export class Question extends SPModel {
  constructor(args: Partial<Question>) {
    super();
    Object.assign(this, args);
  }

  ExamId = -1;
  QuestionText = '';
  Type = QuestionType.TRUE_OR_FALSE;
  IsTrue = false;

  Answers: Answer[] = [];

  UserAnswer: Answer = undefined;
  AnswerIsTrue: boolean = undefined;
  IsAnswered() {
    switch (this.Type) {
      case QuestionType.SINGLE_ANSWER:
        return this.UserAnswer !== undefined;
      case QuestionType.MULTIPLE_ANSWER:
        return this.Answers.filter(e => e.IsSelected).length > 0;
      case QuestionType.TRUE_OR_FALSE:
        return this.AnswerIsTrue !== undefined;
      default:
        return false;
    }
  }

  IsCorrect() {
    switch (this.Type) {
      case QuestionType.SINGLE_ANSWER:
        return this.UserAnswer !== undefined && this.UserAnswer.IsAnswer;
      case QuestionType.MULTIPLE_ANSWER:
        const correctAnswers = this.Answers.filter(e => e.IsAnswer);
        const selectedAnswers = this.Answers.filter(e => e.IsSelected);
        const filteredSelectedAnswers = selectedAnswers.filter(e => e.IsAnswer);

        return (filteredSelectedAnswers.length === selectedAnswers.length) &&
          (filteredSelectedAnswers.length === correctAnswers.length);

      case QuestionType.TRUE_OR_FALSE:
        return this.AnswerIsTrue === this.IsTrue;
      default:
        return false;
    }
  }

  toSPData() {
    const {
      ExamId,
      QuestionText,
      Type,
      IsTrue,
    } = this;
    return {
      ExamId,
      QuestionText,
      QuestionType: Type,
      QuestionIsTrue: IsTrue,
    };
  }
}

export class Answer extends SPModel {
  constructor(args: Partial<Answer>) {
    super();
    Object.assign(this, args);
  }

  QuestionId = -1;
  AnswerText = '';
  IsAnswer = false;

  IsSelected = false;


  toSPData() {
    const {
      QuestionId,
      AnswerText,
      IsAnswer,
    } = this;
    return {
      QuestionId,
      AnswerText,
      IsCorrect: IsAnswer,
    };
  }
}
