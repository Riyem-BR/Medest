import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddinterventionsComponent } from './addinterventions/addinterventions.component';

const routes: Routes = [
  { path: '', component:AddinterventionsComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddinterventionsRoutingModule { }
