import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamBasedRoutingModule } from './exam-based-routing.module';
import { ExamBasedComponent } from './exam-based.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExamReportFilterDialogComponent } from './exam-report-filter-dialog/exam-report-filter-dialog.component';


@NgModule({
  declarations: [ExamBasedComponent, ExamReportFilterDialogComponent],
  imports: [
    CommonModule,
    ExamBasedRoutingModule,
    SharedModule,
  ],
  entryComponents: [ExamReportFilterDialogComponent],
})
export class ExamBasedModule { }
