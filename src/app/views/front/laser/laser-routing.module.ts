import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaserComponent } from './laser/laser.component';

const routes: Routes = [
  { path: '', component:LaserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaserRoutingModule { }
