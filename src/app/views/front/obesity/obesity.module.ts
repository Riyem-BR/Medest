import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObesityRoutingModule } from './obesity-routing.module';
import { ObesityComponent } from './obesity/obesity.component';
import { BalloonComponent } from './balloon/balloon.component';
import { PancreaComponent } from './pancrea/pancrea.component';
import { MiniComponent } from './mini/mini.component';
import { SleeveComponent } from './sleeve/sleeve.component';
import { PlicatureComponent } from './plicature/plicature.component';
import { BypassComponent } from './bypass/bypass.component';
import { AnneauComponent } from './anneau/anneau.component';


@NgModule({
  declarations: [
    ObesityComponent,
    BalloonComponent,
    PancreaComponent,
    MiniComponent,
    SleeveComponent,
    PlicatureComponent,
    BypassComponent,
    AnneauComponent
  ],
  imports: [
    CommonModule,
    ObesityRoutingModule
  ]
})
export class ObesityModule { }
