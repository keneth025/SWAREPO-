import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyExamRoutingModule } from './my-exam-routing.module';
import { MyExamComponent } from './my-exam.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MyExamComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyExamRoutingModule
  ]
})
export class MyExamModule { }
