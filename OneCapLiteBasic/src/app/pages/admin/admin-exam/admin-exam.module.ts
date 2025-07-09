import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminExamRoutingModule } from './admin-exam-routing.module';
import { AdminExamComponent } from './admin-exam.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditExamDialogComponent } from './dialogs/edit-exam-dialog/edit-exam-dialog.component';


@NgModule({
  declarations: [
    AdminExamComponent,
    EditExamDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminExamRoutingModule
  ]
})
export class AdminExamModule { }
