import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LasikRoutingModule } from './lasik-routing.module';
import { LasikComponent } from './lasik/lasik.component';


@NgModule({
  declarations: [
    LasikComponent
  ],
  imports: [
    CommonModule,
    LasikRoutingModule
  ]
})
export class LasikModule { }
