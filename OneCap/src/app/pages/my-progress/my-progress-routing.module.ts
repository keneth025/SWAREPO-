import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProgressComponent } from './my-progress.component';

const routes: Routes = [{ path: '', component: MyProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProgressRoutingModule { }
