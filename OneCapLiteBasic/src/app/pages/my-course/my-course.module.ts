import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCourseRoutingModule } from './my-course-routing.module';
import { MyCourseComponent } from './my-course.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MyCourseComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyCourseRoutingModule
  ]
})
export class MyCourseModule { }
