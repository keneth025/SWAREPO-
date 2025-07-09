import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { Course } from '../model/course.model';
import { Person } from '../model/_model';
import { SPItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class CourseService extends SPItemService<Course> {
  protected serviceName = 'CourseService';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.COURSE).items
    .expand(
      'Owners',
      'OwnerModifiedBy'
    )
    .select(
      '*',
      'Owners/Id',
      'Owners/Title',
      'Owners/EMail',
      'OwnerModifiedBy/Id',
      'OwnerModifiedBy/Title',
      'OwnerModifiedBy/EMail'
    )
    .orderBy('Title');
  }

  protected toObject(data) {
    const {
      Id,
      Title,
      Description,
      Duration,
      Tags,
      MaterialLink,
      IsClassroom,
      LearningSubCategoryId,
      Owners,
      OwnerModifiedBy,
      OwnerModified,
    } = data;
    const ownerArray: Person[] = Owners ? Owners.map(p => new Person({
      Id: p.Id,
      Title: p.Title,
      EMail: p.EMail
    })) : [];
    const editorObj: Person = OwnerModifiedBy ? new Person({
      Id: OwnerModifiedBy.Id,
      Title: OwnerModifiedBy.Title,
      EMail: OwnerModifiedBy.EMail
    }) : new Person({});
    return new Course({
      Id,
      Title,
      Description,
      Duration,
      IsClassroom,
      LearningSubCategoryId,
      MaterialLink,
      Tags,
      Owners: ownerArray,
      Editor: editorObj,
      Modified: OwnerModified ? new Date(OwnerModified) : null,
      IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
    });
  }

}
