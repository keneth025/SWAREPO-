import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

import { FAQRoutingModule } from './faq-routing.module';
import { FAQComponent } from './faq.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FAQComponent],
  imports: [
    CommonModule,
    FAQRoutingModule,
    SharedModule,
    MatExpansionModule,
  ],
})
export class FAQModule { }
