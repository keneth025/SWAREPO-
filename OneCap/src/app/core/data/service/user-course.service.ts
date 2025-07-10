import { Injectable } from '@angular/core';
import { itemStatus, SPEmployeeItemService } from './_service';
import { UserCourse } from '../model/course.model';
import { SPList } from 'src/constant/list.constant';
import { Person } from '../model/_model';

@Injectable({
  providedIn: 'root'
})
export class UserCourseService extends SPEmployeeItemService<UserCourse> {

  protected ObjectColumn = 'CourseId';
  protected ItemRecordColumn = 'CourseId';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.USER_COURSE).items
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
      Id,
      User,
      CourseId,
      Course,
      Status,
      Modified,
    } = data;
    const UserObj = new Person({
      Id: User.Id,
      Title: User.Title,
      EMail: User.EMail,
    });

    return new UserCourse({
      Id,
      Status,
      CourseId,
      CourseName: Course.Title,
      User: UserObj,
      Modified: new Date(Modified),
    });
  }

  async getItemsByRecordValue(dataArr: UserCourse[]) {
    const { chunk, batch } = this;
    const batchSize = (chunk * batch);

    let returnArr: UserCourse[] = [];
    for (let idx = 0; idx < dataArr.length; idx += batchSize) {
      const batchArr = dataArr.slice(idx, (idx + batchSize));
      let queryArr: string[] = [];

      for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
        const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
        const userIdSet = new Set<number>();
        const courseIdSet = new Set<number>();
        for (const e of chunkArr) {
          userIdSet.add(e.User.Id);
          courseIdSet.add(e.CourseId);
        }
        const userQuery = Array.from(userIdSet).map(e => `UserId eq ${e}`)
        .join(' or ');
        const courseQuery = Array.from(courseIdSet).map(e => `${this.ItemRecordColumn} eq ${e}`)
        .join(' or ');
        const query = `(${userQuery}) and (${courseQuery})`;
        queryArr = [...queryArr, query];
      }
      const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
      const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
      returnArr = [...returnArr, ...tempData];
    }
    return returnArr;
  }

  async batchUploadOfAttendance(dataArr: UserCourse[]) {
    let returnArr: {status: itemStatus, data: UserCourse}[] = [];

    const itemsArr = await this.getItemsByRecordValue(dataArr);
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => {
          const FoundItem = itemsArr.find(i => i.User.Id === e.User.Id && i.CourseId === e.CourseId);
          if (FoundItem) {
            e.Id = FoundItem.Id;
          }
          return this.save(e).then(res => ({
            status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
            data: e
          }));
        }
      );
      const tempArr = await Promise.all(chunkArr);
      returnArr = [...returnArr, ...tempArr];
    }
    return returnArr;
  }

  async batchUploadRegistration(dataArr: UserCourse[]) {
    let returnArr: {status: itemStatus, data: UserCourse}[] = [];

    const itemsArr = await this.getItemsByRecordValue(dataArr);
    const { chunk } = this;
    for (let idx = 0; idx < dataArr.length; idx += chunk) {
      const chunkArr = dataArr.slice(idx, (idx + chunk)).map(
        (e) => {
          const FoundItem = itemsArr.find(i => i.User.Id === e.User.Id && i.CourseId === e.CourseId);
          if (FoundItem) {
            return Promise.resolve({
              status: itemStatus.CANCELED,
              data: FoundItem,
            });
          }
          return this.save(e).then(res => ({
            status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
            data: e
          }));
        }
      );
      const tempArr = await Promise.all(chunkArr);
      returnArr = [...returnArr, ...tempArr];
    }
    return returnArr;
  }
}
