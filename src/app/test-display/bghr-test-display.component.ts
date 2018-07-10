import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import {Chart, LineChart, ChartType, BundleChartPosition } from '../utils/parameters'

import 'rxjs/add/operator/map';

import CONFIG from '../bghr.config';

@Component({
  selector: 'bghr-test-display',
  template: `
  <simulation-graph></simulation-graph>
  <chart-bundle
    [charts]="chartList"
    [chartBundleID]="chartID1"
    [data]="data"
  ></chart-bundle>
  `,
  styleUrls: ['./bghr-test-display.component.less']
})
export class testDisplayComponent implements OnInit {

  public bulkData;

  public chartList: Chart[];
  


  constructor(private _http: Http){}
  ngOnInit(){
    this.updateData()
    this.chartList = new Array<Chart>();

    const lineColor = '#004565';
    const lineChart1: LineChart = new LineChart(
      lineColor, 
      ChartType.LINE,
      BundleChartPosition.FIRST,
      300 
    );
    const lineChart2: LineChart = new LineChart(
      lineColor,
      ChartType.LINE,
      BundleChartPosition.LAST,
      300
    ) 
    this.chartList.push(lineChart1);
    this.chartList.push(lineChart2);

  }

  updateData(){
    this.getDataset(CONFIG.DATAFILE_LINE_CHART_BUNDLE)
    .subscribe(data => {
      //console.log(data);
      this.bulkData = data
     
    });
  }

  getDataset(filename: string){
    const url = `./assets/data/${filename}`;
  
    // Call map on the response observable to get the parsed people object
    return this._http.get(url).map(res => res.json());
  } 

}


