import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { UserCourseRating } from '../model/course.model';
import { Person } from '../model/_model';
import { SPEmployeeItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class UserCourseRatingService extends SPEmployeeItemService<UserCourseRating> {
  protected ObjectColumn = 'CourseId';
  protected ItemRecordColumn = 'CourseId';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.USER_COURSE_RATING).items
    .expand(
      'User',
      'Course',
    )
    .select(
      '*',
      'Course/Title',
      'User/Id',
      'User/Title',
      'User/EMail',
    );
  }

  protected toObject(data) {
    const {
      User,
      CourseId,
      Rating,
      Review,
      Modified,
    } = data;
    const { Id, Title, EMail } = User;
    const UserObj = new Person({
      Id,
      Title,
      EMail
    });

    return new UserCourseRating({
      Id: data.Id,
      User: UserObj,
      Modified: new Date(Modified),
      CourseId,
      Rating,
      Review,
    });
  }
}
