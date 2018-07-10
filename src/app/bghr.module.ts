import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimulationGraphModule } from './simulation-graph/simulation-graph.module';
import { ChartModule } from './common/chart/chart.module';

import { testDisplayComponent } from './test-display/bghr-test-display.component';

@NgModule({
  declarations: [
    testDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //DEVELOPED COMPONENT
    SimulationGraphModule,
    // CHART LIBRARY
    ChartModule

  ],

  bootstrap: [testDisplayComponent]
})
export class AppModule { 

  constructor(){
    console.log(ChartModule);
  }
}
