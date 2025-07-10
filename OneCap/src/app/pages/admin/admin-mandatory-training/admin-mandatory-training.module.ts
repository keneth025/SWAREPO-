import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMandatoryTrainingRoutingModule } from './admin-mandatory-training-routing.module';
import { AdminMandatoryTrainingComponent } from './admin-mandatory-training.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditMandatoryTrainingDialogComponent } from './dialogs/edit-mandatory-training-dialog/edit-mandatory-training-dialog.component';


@NgModule({
  declarations: [AdminMandatoryTrainingComponent, EditMandatoryTrainingDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminMandatoryTrainingRoutingModule
  ]
})
export class AdminMandatoryTrainingModule { }
