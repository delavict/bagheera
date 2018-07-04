import { Component, Input, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { D3Service } from '../../../d3/d3.service';
import { ForceDirectedGraph, Node } from '../../../d3/models';

@Component({
  selector: 'graph',
  template: `
    <svg #svg [attr.width]="_options.width" [attr.height]="_options.height">
      <g [zoomableOf]="svg">
        <g [linkVisual]="link" *ngFor="let link of links"></g>
        <g [nodeVisual]="node" 
        *ngFor="let node of nodes"
        [draggableNode]="node"
        [draggableInGraph]="graph"
        ></g>
      </g>
    </svg>
  `,
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit {

  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;
  private _options: {width, height } = {width: 1800, height: 1600}

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.graph.initSimulation(this.options);
  }

  constructor(private d3Service: D3Service,private ref: ChangeDetectorRef) { }

  ngOnInit() {
    // Receiving an initialized simulated graph from our custom d3 service
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

    /**
     * Binding  change dection check on each tick
     * this along with an onPush change detection strategy should enforce checking only when relevant !
     * this improve scripting computation duration in a couple of tests
     * Avoid unecessary check when we are dealing only with simulations data binding.
     */
    this.graph.ticker.subscribe((d) => {
      this.ref.markForCheck()
    });
  }
 
  ngAfterviewInit(){
    this.graph.initSimulation(this.options);
  }


  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

}
