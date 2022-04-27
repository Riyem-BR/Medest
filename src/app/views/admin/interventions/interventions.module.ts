import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterventionsRoutingModule } from './interventions-routing.module';
import { InterventionsComponent } from './interventions/interventions.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InterventionsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InterventionsRoutingModule,
  ]
})
export class InterventionsModule { }
