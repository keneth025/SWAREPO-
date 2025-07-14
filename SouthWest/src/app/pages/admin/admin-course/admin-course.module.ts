import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCourseRoutingModule } from './admin-course-routing.module';
import { AdminCourseComponent } from './admin-course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditCourseDialogComponent } from './dialog/edit-course-dialog/edit-course-dialog.component';
import { UploadAttendanceSheetDialogComponent } from './dialog/upload-attendance-sheet-dialog/upload-attendance-sheet-dialog.component';
import { CourseRatingReportDialogComponent } from './dialog/course-rating-report-dialog/course-rating-report-dialog.component';
import { UploadRegistrationDialogComponent } from './dialog/upload-registration-dialog/upload-registration-dialog.component';


@NgModule({
  declarations: [
    AdminCourseComponent,
    EditCourseDialogComponent,
    UploadRegistrationDialogComponent,
    UploadAttendanceSheetDialogComponent,
    CourseRatingReportDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminCourseRoutingModule
  ]
})
export class AdminCourseModule { }
