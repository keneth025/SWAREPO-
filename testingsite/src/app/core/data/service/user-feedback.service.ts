import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { UserFeedback } from '../model/user-feedback.model';
import { Person } from '../model/_model';
import { EmailService } from './email.service';
import { SPModelService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class UserFeedbackService extends SPModelService<UserFeedback> {

  constructor(
    private emailService: EmailService
  ) { super(); }

  get query() {
    return this.sp.web.lists.getByTitle(SPList.USER_FEEDBACK).items
    .expand(
      'User',
    )
    .select(
      '*',
      'User/Id',
      'User/Title',
      'User/EMail',
    );
  }

  toObject(data) {
    console.log('data', data);
    const {
      Id,
      Title,
      User,
      Page_x0020_Reported,
      Feedback,
    } = data;

    const UserObj = new Person({
      Id: User.Id,
      Title: User.Title,
      EMail: User.EMail,
    });

    return new UserFeedback({
      Id,
      Title,
      Feedback,
      PageReported: Page_x0020_Reported,
      User: UserObj,
    });
  }

  async save(data) {
    const returnData = await super.save(data);
    await this.emailService.sendFeedbackNotification(returnData);
    return returnData;
  }
}
