/*
  Author(s) : Nathan Delavictoire
  This file is part of bagheera project.

 This file is subject to the terms and conditions defined in
 file 'LICENSE.txt', which is part of this source code package.

 path: d3/models/force-directed-graph.ts
*/

import { EventEmitter } from '@angular/core';
import { Link } from './link';
import { Node } from './node';
import * as d3 from 'd3';

const FORCES = {
    LINKS: 1 / 50,
    COLLISION: 1,
    CHARGE: -1
}

/**
 * Model for the graph.
 */
export class ForceDirectedGraph {
    public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
    public simulation: d3.Simulation<any,any>

    public nodes: Node[] = [];
    public links: Link[] = [];

    constructor(nodes, links, options: {width, height}){
        this.nodes = nodes;
        this.links = links;

        this.initSimulation(options);
    }

    initNodes() {
        if(!this.simulation) {
            throw new Error('Simulation was not initialized yet')
        }

        this.simulation.nodes(this.nodes);
    }

    initLinks() {
        if (!this.simulation) {
            throw new Error('simulation was not initialized yet')
        }
    }

    initSimulation(options) {
        if (!options || !options.width || !options.height) {
            throw new Error('Missing options when initializing simulation');
        }

        // Creating the simulation
        if(!this.simulation) {
            const ticker = this.ticker

            //Creating the force simulation and defining the charges
            this.simulation = d3.forceSimulation()
            .force("charge", d3.forceManyBody()
            .strength(FORCES.CHARGE)
            );

            //Connecting the d3 ticker to an angular event emitter
            this.simulation.on('tick',function() {
                ticker.emit(this)
            });

            this.initNodes();
            this.initLinks();
        }

        // Updating the central force of the simulation 
        this.simulation.force("centers", d3.forceCenter(options.width / 2, options.height / 2))

        this.simulation.restart();
    }
}