import { Person, SPModel } from './_model';

export class  UserFeedback extends SPModel {
  constructor(args: Partial<UserFeedback>) {
    super();
    Object.assign(this, args);
  }

  User: Person = null;
  PageReported = '';
  Feedback = '';

  toSPData() {
    const { User, PageReported, Feedback } = this;
    return {
      UserId: User?.Id || null,
      Page_x0020_Reported: PageReported,
      Feedback,
    };
  }
}
