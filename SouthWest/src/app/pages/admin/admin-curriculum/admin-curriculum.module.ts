import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCurriculumRoutingModule } from './admin-curriculum-routing.module';
import { AdminCurriculumComponent } from './admin-curriculum.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCurriculumDialogComponent } from './dialog/edit-curriculum-dialog/edit-curriculum-dialog.component';


@NgModule({
  declarations: [AdminCurriculumComponent, EditCurriculumDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminCurriculumRoutingModule
  ]
})
export class AdminCurriculumModule { }
