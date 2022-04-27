import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LasikComponent } from './lasik/lasik.component';

const routes: Routes = [
  { path: '', component:LasikComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LasikRoutingModule { }
