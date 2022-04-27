import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AestheticComponent } from './aesthetic/aesthetic.component';

const routes: Routes = [
  { path: '', component:AestheticComponent }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AestheticRoutingModule { }
