/*
  Author(s) : Nathan Delavictoire
  This file is part of bagheera project.

 This file is subject to the terms and conditions defined in
 file 'LICENSE.txt', which is part of this source code package.

 path: d3/models/node.ts
*/

import SIMULATION_GRAPH_CONFIG from '../../simulation-graph.config';

// Implementing SimulationNodeDatum interface into our custom Node class
export class Node implements d3.SimulationNodeDatum {
    
    index?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
    fx?: number | null;
    fy?: number | null;

    id: string;
    linkCount: number = 0

    constructor(id){
        this.id = id;
    }

    normal = () => {
        return Math.sqrt(this.linkCount / SIMULATION_GRAPH_CONFIG.N)
    }

    get r() {
        return 50 * this.normal() + 10;
    }

    get fontSize() {
        return (30 * this.normal() + 10 + 'px')
    }

    get color() {
        let index = Math.floor(SIMULATION_GRAPH_CONFIG.SPECTRUM.length * this.normal())
        return SIMULATION_GRAPH_CONFIG.SPECTRUM[index];
    }
}

