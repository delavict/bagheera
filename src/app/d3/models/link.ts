/*
  Author(s) : Nathan Delavictoire
  This file is part of bagheera project.

 This file is subject to the terms and conditions defined in
 file 'LICENSE.txt', which is part of this source code package.

 path: d3/models/link.ts
*/

import { Node } from './';

// Implementing SimulationDatum interface into our custom Link class
export class Link implements d3.SimulationLinkDatum<Node> {
    // Optional implementation properties
    index?: number;

    // Must - definig enforced implementation properties
    source: Node | string | number;
    target: Node | string | number;

    constructor(source,target){
        this.source = source;
        this.target = target
    }
}