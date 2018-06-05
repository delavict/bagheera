import { Component, OnInit, Input } from '@angular/core';
import { Node } from '../../../d3/models';

@Component({
  selector: '[nodeVisual]',
  template: `
  <svg:g [attr.transform]="'translate(' + node.x + ',' + node.y + ')'">
    <svg:circle
        cx="0"
        cy="0"
        r="50">
    </svg:circle>
    <svg:text>
      {{node.id}}
    </svg:text>
  </svg:g>
`,
  styleUrls: ['./node-visual.component.less']
})
export class NodeVisualComponent implements OnInit {
  @Input('nodeVisual') node: Node;

  constructor() { }

  ngOnInit() {
  }

}
