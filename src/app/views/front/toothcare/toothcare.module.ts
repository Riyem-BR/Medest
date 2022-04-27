import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToothcareRoutingModule } from './toothcare-routing.module';
import { ToothcareComponent } from './toothcare/toothcare.component';


@NgModule({
  declarations: [
    ToothcareComponent
  ],
  imports: [
    CommonModule,
    ToothcareRoutingModule
  ]
})
export class ToothcareModule { }
