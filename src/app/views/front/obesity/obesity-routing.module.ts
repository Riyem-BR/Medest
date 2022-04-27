import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneauComponent } from './anneau/anneau.component';
import { BalloonComponent } from './balloon/balloon.component';
import { ObesityComponent } from './obesity/obesity.component';

const routes: Routes = [
  { path: '', component:ObesityComponent },
  
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObesityRoutingModule { }
