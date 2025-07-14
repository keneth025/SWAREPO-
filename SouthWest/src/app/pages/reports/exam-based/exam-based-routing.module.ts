import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamBasedComponent } from './exam-based.component';

const routes: Routes = [{ path: '', component: ExamBasedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamBasedRoutingModule { }
