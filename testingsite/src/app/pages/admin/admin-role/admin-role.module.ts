import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoleRoutingModule } from './admin-role-routing.module';
import { AdminRoleComponent } from './admin-role.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditRoleDialogComponent } from './dialog/edit-role-dialog/edit-role-dialog.component';


@NgModule({
  declarations: [AdminRoleComponent, EditRoleDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoleRoutingModule
  ]
})
export class AdminRoleModule { }
