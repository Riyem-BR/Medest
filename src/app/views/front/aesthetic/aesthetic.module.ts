import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AestheticRoutingModule } from './aesthetic-routing.module';
import { AestheticComponent } from './aesthetic/aesthetic.component';


@NgModule({
  declarations: [
    AestheticComponent
  ],
  imports: [
    CommonModule,
    AestheticRoutingModule
  ]
})
export class AestheticModule { }
