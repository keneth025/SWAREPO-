import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { MandatoryTraining } from '../model/mandatory-training.model';
import { SPModelService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class MandatoryTrainingService extends SPModelService<MandatoryTraining> {
  serviceName = 'Mandatory Training Service';

  protected get query() {
    return  this.sp.web.lists.getByTitle(SPList.MANDATORY_TRAINING).items
    .expand(
      'Courses',
      'Exams',
    )
    .select(
      '*',
      'Courses/Title',
      'Exams/Title',
    )
    .orderBy('DueDate', false);
  }

  protected toObject(data) {
    const {
      Id,
      CoursesId,
      Courses,
      ExamsId,
      Exams,
      DueDate,
      FinalDate,
      NotificationSubject,
      NotificationMessage,
    } = data;
    return new MandatoryTraining({
      Id,
      CoursesId: new Set(CoursesId),
      CourseNames: Courses.map(e => e.Title),
      ExamsId: new Set(ExamsId),
      ExamNames: Exams.map(e => e.Title),
      DueDate: DueDate ? new Date(DueDate) : null,
      FinalDate: FinalDate ? new Date(FinalDate) : null,
      NotificationSubject,
      NotificationMessage,
    });
  }
}
