import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMandatoryTrainingComponent } from './admin-mandatory-training.component';

const routes: Routes = [{ path: '', component: AdminMandatoryTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMandatoryTrainingRoutingModule { }
