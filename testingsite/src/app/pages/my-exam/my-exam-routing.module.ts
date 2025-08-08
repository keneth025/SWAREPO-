import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyExamComponent } from './my-exam.component';

const routes: Routes = [{ path: '', component: MyExamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyExamRoutingModule { }
