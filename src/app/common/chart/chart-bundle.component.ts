/**
 * Chart Bundle
 * Contains several charts
 * Contains cursor
 * Common x Axis
 */
import { Component, OnChanges, Input } from '@angular/core';
import { ChartBundleMargins, Chart, LineChart } from '../../utils/parameters';


@Component({
  selector: 'chart-bundle',
  template: `
    <svg class='chart-bundle'
    [style.width.%]="dims.width"
    [style.height.%]="dims.height"
    >
      <svg:g 
        *ngFor="let chart of charts"
       >
       <svg:g bghr-chart
       class="hello">
       </svg:g>
          
      </svg:g>
    </svg>
  `
  //styleUrls: ['']
})
export class ChartBundleComponent implements OnChanges {

  @Input() chartBundleID;
  @Input() charts: Chart[];
  @Input() data: any[];

  public dims: any = {
    width: '100',
    height: '100'
  }



  public bundleMargins: ChartBundleMargins = {top: 30, right: 30, bottom: 30, left: 30, middle: 20};

  //chart header

  constructor() { 

  }

  ngOnChanges() {
    console.log(this.charts)
    

  }

  ngOnInit(){
  
  }

  ngAfterViewInit(){
   
  }

}
