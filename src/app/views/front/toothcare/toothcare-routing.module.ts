import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToothcareComponent } from './toothcare/toothcare.component';

const routes: Routes = [
  { path: '', component:ToothcareComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToothcareRoutingModule { }
