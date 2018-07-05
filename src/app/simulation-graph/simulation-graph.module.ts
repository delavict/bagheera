import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service, D3_DIRECTIVES } from './d3';

import { SimulationGraphComponent } from './simulation-graph.component';

import { GraphComponent } from './visuals/graph/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';


@NgModule({
  declarations: [
    SimulationGraphComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [
    SimulationGraphComponent,
    ...D3_DIRECTIVES
  ],
  providers: [D3Service]
  //bootstrap: [SimulationGraphComponent]
})
export class SimulationGraphModule { }
