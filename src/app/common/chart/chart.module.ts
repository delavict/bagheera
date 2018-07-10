import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './chart.component';
import { ChartBundleComponent } from './chart-bundle.component'

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ChartComponent,
        ChartBundleComponent
    ],
    exports: [
        ChartComponent,
        ChartBundleComponent
    ],
})
export class ChartModule { }