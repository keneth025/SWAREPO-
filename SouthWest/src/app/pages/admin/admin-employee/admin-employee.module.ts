import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmployeeRoutingModule } from './admin-employee-routing.module';
import { AdminEmployeeComponent } from './admin-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditEmployeeDialogComponent } from './dialog/edit-employee-dialog/edit-employee-dialog.component';


@NgModule({
  declarations: [AdminEmployeeComponent, EditEmployeeDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminEmployeeRoutingModule
  ]
})
export class AdminEmployeeModule { }
