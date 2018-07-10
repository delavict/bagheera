import { Component, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';


// import { XAxisTickComponent } from '../x-axis-tick.component'

@Component({
  selector: 'g[bghr-x-axis-ticks]',
  templateUrl: `
    <svg:g #ticksel
      [attr.class]='xAxisTicks'>
     <svg:g *ngFor='let tick of ticks' class='tick'
        [attr.transform]='tickTransform(tick)'
     
     >   
     </svg:g>
     <svg:g bgh-x-axis-label
        *ngIf="showLabel"
        [label]="labelText"
        [offset]="labelOffset"
        [orient]="'bottom'"
        [height]="dims.height"
        [width]="dims.width">
     </svg:g>
    </svg:g>
  `,
  styleUrls: ['./x-axis.component.less']
})
export class XAxisTicksComponent implements OnChanges {

  @Input() scale;
  @Input() ticks: any[];
  @Input() tickFormating
  @Input() tickStroke;


  private adjustedScale = this.scale.bandwidth ? function(d) {
    return this.scale(d) + this.scale.bandwidth() * 0.5;
  } : this.scale;

  verticalSpacing = 20;


  @ViewChild('ticksel') tickElement: ElementRef;

  

  constructor() { }

  ngOnChanges() {
  }

  getTickTransform(tick): string {
    return 'translate(' + this.adjustedScale(tick) + ',' + this.verticalSpacing + ')';
  }

}
