import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { getAllData } from '../../util/data.util';
import { Curriculum } from '../model/curriculum.model';
import { Person } from '../model/_model';
import { SPItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService extends SPItemService<Curriculum> {
  protected serviceName = 'Curriculum Service';
  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.CURRICULUM).items
    .expand(
      'Owners',
      'OwnerModifiedBy',
    )
    .select(
      '*',
      'Owners/Id',
      'Owners/Title',
      'Owners/EMail',
      'OwnerModifiedBy/Id',
      'OwnerModifiedBy/Title',
      'OwnerModifiedBy/EMail',
    )
    .orderBy('Title');
  }

  protected toObject(data) {
    const {
      Id,
      Title,
      Description,
      LearningSubCategoryId,
      CoursesId,
      ExamsId,
      Owners,
      OwnerModifiedBy,
      OwnerModified,
    } = data;
    const ownerArray = Owners ? Owners.map(p => new Person({
      Id: p.Id,
      Title: p.Title,
      EMail: p.EMail
    })) : [];
    const editorObj: Person = OwnerModifiedBy ? new Person({
      Id: OwnerModifiedBy.Id,
      Title: OwnerModifiedBy.Title,
      EMail: OwnerModifiedBy.EMail
    }) : new Person({});

    return new Curriculum({
      Id,
      Title,
      Description,
      LearningSubCategoryId,
      CoursesId: new Set(CoursesId),
      ExamsId: new Set(ExamsId),
      Owners: ownerArray,
      Editor: editorObj,
      Modified: OwnerModified ? new Date(OwnerModified) : null,
      IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
    });
  }

  private async getItemsByRelatedId(IdArr: number[], RelatedId: string) {
    if (IdArr.length > 0) {
      const { chunk, batchIdSize } = this;
      const batchSize = (chunk * batchIdSize);

      let returnArr: Curriculum[] = [];
      for (let idx = 0; idx < IdArr.length; idx += batchSize) {
        const batchArr = IdArr.slice(idx, (idx + batchSize));
        let queryArr: string[] = [];

        for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
          const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
          const chunkQuery = chunkArr.map(e => `${RelatedId} eq ${e}`)
          .join(' or ');
          const query = `(${chunkQuery})`;
          queryArr = [...queryArr, query];
        }
        const promiseArr = queryArr.map(e => getAllData(this.query.filter(e).top(1000)).then(data => data.map(i => this.toObject(i))));
        const tempData = (await Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
        returnArr = [...returnArr, ...tempData];
      }
      return returnArr;
    }
    return [];
  }

  async getItemsByCourseIdArr(CourseIdArr: number[]) {
    return await this.getItemsByRelatedId(CourseIdArr, 'CoursesId');
  }

  async getItemsByExamIdArr(ExamIdArr: number[]) {
    return await this.getItemsByRelatedId(ExamIdArr, 'ExamsId');
  }
}
