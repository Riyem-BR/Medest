import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SterilityComponent } from './sterility/sterility.component';

const routes: Routes = [
  { path: '', component:SterilityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SterilityRoutingModule { }
