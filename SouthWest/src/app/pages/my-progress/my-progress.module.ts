import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { MyProgressRoutingModule } from './my-progress-routing.module';
import { MyProgressComponent } from './my-progress.component';

@NgModule({
  declarations: [MyProgressComponent],
  imports: [
    CommonModule,
    MyProgressRoutingModule,
    SharedModule,
  ],
})
export class MyProgressModule { }
