import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { UserExam } from '../model/exam.model';
import { Person } from '../model/_model';
import { SPEmployeeItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class UserExamService extends SPEmployeeItemService<UserExam>{
  protected ObjectColumn = 'ExamId';
  protected ItemRecordColumn = 'ExamId';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.USER_EXAM).items
    .expand(
      'User',
      'Exam',
    )
    .select(
      '*',
      'Exam/Title',
      'Exam/PassingRate',
      'User/Id',
      'User/Title',
      'User/EMail',
    );
  }

  protected toObject(data) {
    const {
      Id,
      User,
      ExamId,
      Exam,
      Score,
      IsTaken,
      Attempts,
      Modified,
    } = data;
    const UserObj = new Person({
      Id: User.Id,
      Title: User.Title,
      EMail: User.EMail,
    });

    return new UserExam({
      Id,
      ExamId,
      IsTaken,
      Score,
      Attempts,
      ExamName: Exam.Title,
      PassingScore: Exam.PassingRate,
      User: UserObj,
      Modified: new Date(Modified),
    });
  }
}
