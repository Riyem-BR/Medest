import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddinterventionsRoutingModule } from './addinterventions-routing.module';
import { AddinterventionsComponent } from './addinterventions/addinterventions.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AddinterventionsComponent
  ],
  imports: [
    CommonModule,
    AddinterventionsRoutingModule,
    FormsModule

  ]
})
export class AddinterventionsModule { }
