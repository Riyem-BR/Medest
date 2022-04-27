import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancerRoutingModule } from './cancer-routing.module';
import { CancerComponent } from './cancer/cancer.component';


@NgModule({
  declarations: [
    CancerComponent
  ],
  imports: [
    CommonModule,
    CancerRoutingModule
  ]
})
export class CancerModule { }
