import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBasedRoutingModule } from './course-based-routing.module';
import { CourseBasedComponent } from './course-based.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseReportFilterDialogComponent } from './course-report-filter-dialog/course-report-filter-dialog.component';

@NgModule({
  declarations: [CourseBasedComponent, CourseReportFilterDialogComponent],
  imports: [
    CommonModule,
    CourseBasedRoutingModule,
    SharedModule,
  ],
  entryComponents: [CourseReportFilterDialogComponent],
})
export class CourseBasedModule { }
