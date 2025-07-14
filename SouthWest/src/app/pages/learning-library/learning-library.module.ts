import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningLibraryRoutingModule } from './learning-library-routing.module';
import { LearningLibraryComponent } from './learning-library.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LearningLibraryComponent],
  imports: [
    CommonModule,
    SharedModule,
    LearningLibraryRoutingModule,
  ]
})
export class LearningLibraryModule { }
