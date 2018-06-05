import { Component, Input, OnInit } from '@angular/core';
import { D3Service } from '../../../d3/d3.service';
import { ForceDirectedGraph, Node } from '../../../d3/models';

@Component({
  selector: 'graph',
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g>
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" *ngFor="let node of nodes"></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit {

  @Input('nodes') nodes;
  @Input('links') links;

  private graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    // Receiving an initialized simulated graph from our custom d3 service
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterviewInit(){
    this.graph.initSimulation(this.options);
  }

  private _options: {width, height} = { width: 880, height: 600}


  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

}
