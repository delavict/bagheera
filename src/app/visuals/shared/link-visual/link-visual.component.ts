import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../../d3/models';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        [attr.x1]="link.source.x"
        [attr.y1]="link.source.y"
        [attr.x2]="link.target.x"
        [attr.y2]="link.target.y"
    ></svg:line>
  `, 
  styleUrls: ['./link-visual.component.less']
})
export class LinkVisualComponent implements OnInit {
 @Input('linkVisual') link: Link;

  constructor() { }

  ngOnInit() {
    //console.log(this.link.source);
  }

}
