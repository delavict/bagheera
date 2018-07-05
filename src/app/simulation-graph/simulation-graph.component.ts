import { Component } from '@angular/core';
import SIMULATION_GRAPH_CONFIG from './simulation-graph.config';
import { Node, Link } from './d3';

@Component({
  selector: 'simulation-graph',
  templateUrl: './simulation-graph.component.html',
  styleUrls: ['./simulation-graph.component.less']
})
export class SimulationGraphComponent {
  nodes: Node[] = []
  links: Link[] = []

  constructor(){
    const N = SIMULATION_GRAPH_CONFIG.N, 
    getIndex = number => number - 1;

    /** constructing the nods array */
    for(let i = 1; i <= N; i++){
      this.nodes.push(new Node(i))
    }

    for(let i = 1; i<= N; i++){
      for(let m = 2; i * m <= N; m++){

        // Increasing connection toll on connecting nodes
        this.nodes[getIndex(i)].linkCount++;
        this.nodes[getIndex(i * m)].linkCount++;

        // Connecting hte nodes before starting the simulation
        this.links.push(new Link(i, i * m));
        
      }
    }
  }
}


