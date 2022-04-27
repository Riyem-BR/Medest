import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrthoComponent } from './ortho/ortho.component';

const routes: Routes = [
  { path: '', component:OrthoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrthoRoutingModule { }
