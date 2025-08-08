import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { Role } from '../model/role.model';
import { Person } from '../model/_model';
import { SPItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends SPItemService<Role> {
  protected serviceName = 'Role Service';
  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.ROLE).items
    .expand(
      'Owners',
      'OwnerModifiedBy',
      'RoleSubCategory',
    )
    .select(
      '*',
      'RoleSubCategory/Title',
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
      RoleSubCategory,
      RoleSubCategoryId,
      CurriculaId,
      CoursesId,
      ExamsId,
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

    return new Role({
      Id,
      Title,
      Description,
      SubCategoryId: RoleSubCategoryId,
      SubCategoryName: RoleSubCategory ? RoleSubCategory.Title : '',
      CurriculaId: new Set(CurriculaId),
      CoursesId: new Set(CoursesId),
      ExamsId: new Set(ExamsId),
      Owners: ownerArray,
      Editor: editorObj,
      Modified: OwnerModified ? new Date(OwnerModified) : null,
      IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
    });
  }
}
