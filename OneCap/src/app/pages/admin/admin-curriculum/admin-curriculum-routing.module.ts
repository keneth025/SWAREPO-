import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCurriculumComponent } from './admin-curriculum.component';

const routes: Routes = [{ path: '', component: AdminCurriculumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCurriculumRoutingModule { }
