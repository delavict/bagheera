import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import CONFIG from '../bghr.config';

@Component({
  selector: 'bghr-test-display',
  templateUrl: './bghr-test-display.component.html',
  styleUrls: ['./bghr-test-display.component.less']
})
export class testDisplayComponent implements OnInit {

  private bulkData;


  constructor(private _http: Http){}
  ngOnInit(){
    this.updateData()
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
    console.log(url);
    // Call map on the response observable to get the parsed people object
    return this._http.get(url).map(res => res.json());
  } 

}


