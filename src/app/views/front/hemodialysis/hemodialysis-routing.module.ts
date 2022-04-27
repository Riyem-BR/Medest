import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HemodialysisComponent } from './hemodialysis/hemodialysis.component';

const routes: Routes = [
  { path: '', component:HemodialysisComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HemodialysisRoutingModule { }
