import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HemodialysisRoutingModule } from './hemodialysis-routing.module';
import { HemodialysisComponent } from './hemodialysis/hemodialysis.component';


@NgModule({
  declarations: [
    HemodialysisComponent
  ],
  imports: [
    CommonModule,
    HemodialysisRoutingModule
  ]
})
export class HemodialysisModule { }
