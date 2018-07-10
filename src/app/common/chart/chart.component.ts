/**
 * Container of the chart and the svg container Needs to be put in a container takes 100%
 */


import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'g[bghr-chart]',
  template: `
    <svg:g
      [attr.id]="domID"
      [attr.width]="width"
      [attr.height]="height">
    </svg:g>
  `
})
export class ChartComponent implements OnChanges {

  @Input() domID;

  constructor() { }

  ngOnChanges() {
  }

}
