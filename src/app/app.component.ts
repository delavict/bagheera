import { Component } from '@angular/core';
import APP_CONFIG from './app.config';
import { Node, Link } from './d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  nodes: Node[] = []
  links: Link[] = []

  constructor(){
    const N = APP_CONFIG.N, 
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


