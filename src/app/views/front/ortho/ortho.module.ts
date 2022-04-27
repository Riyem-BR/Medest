import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrthoRoutingModule } from './ortho-routing.module';
import { OrthoComponent } from './ortho/ortho.component';


@NgModule({
  declarations: [
    OrthoComponent,
    
  ],
  imports: [
    CommonModule,
    OrthoRoutingModule
  ]
})
export class OrthoModule { }
