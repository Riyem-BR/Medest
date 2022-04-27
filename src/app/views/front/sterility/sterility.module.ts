import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SterilityRoutingModule } from './sterility-routing.module';
import { SterilityComponent } from './sterility/sterility.component';


@NgModule({
  declarations: [
    SterilityComponent
  ],
  imports: [
    CommonModule,
    SterilityRoutingModule
  ]
})
export class SterilityModule { }
