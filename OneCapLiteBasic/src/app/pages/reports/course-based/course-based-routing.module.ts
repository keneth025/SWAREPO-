import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseBasedComponent } from './course-based.component';

const routes: Routes = [{ path: '', component: CourseBasedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseBasedRoutingModule { }
