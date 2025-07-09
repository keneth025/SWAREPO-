import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { getAllData } from '../../util/data.util';
import { UserRole } from '../model/role.model';
import { Person } from '../model/_model';
import { SPEmployeeItemService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService extends SPEmployeeItemService<UserRole> {
  protected ObjectColumn = 'RoleId';
  protected ItemRecordColumn = 'RoleId';

  protected get query() {
    return this.sp.web.lists.getByTitle(SPList.USER_ROLE).items
    .expand(
      'User',
      'Role',
    )
    .select(
      '*',
      'Role/Title',
      'User/Id',
      'User/Title',
      'User/EMail',
    );
  }

  protected toObject(data) {
    const {
      Id,
      User,
      Role,
      RoleId,
      Modified,
    } = data;
    const UserObj = new Person({
      Id: User?.Id,
      Title: User?.Title,
      EMail: User?.EMail,
    });

    return new UserRole({
      Id,
      RoleId,
      User: UserObj,
      RoleName: Role?.Title,
      Modified: new Date(Modified),
    });
  }

  async getRolesByUserId(UserId: number) {
    const tempList = await getAllData(
      this.query.filter(`UserId eq ${UserId}`)
    );
    return tempList.map(e => this.toObject(e));
  }
}
