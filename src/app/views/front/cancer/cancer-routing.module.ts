import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancerComponent } from './cancer/cancer.component';

const routes: Routes = [
  { path: '', component:CancerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancerRoutingModule { }
