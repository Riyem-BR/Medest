import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaserRoutingModule } from './laser-routing.module';
import { LaserComponent } from './laser/laser.component';


@NgModule({
  declarations: [
    LaserComponent
  ],
  imports: [
    CommonModule,
    LaserRoutingModule
  ]
})
export class LaserModule { }
