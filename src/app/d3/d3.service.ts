/*
  Author(s) : Nathan Delavictoire
  This file is part of bagheera project.

 This file is subject to the terms and conditions defined in
 file 'LICENSE.txt', which is part of this source code package.

 path: d3/d3.service.ts
*/
import { Injectable, EventEmitter } from '@angular/core';
import * as d3 from 'd3';
import { Node, Link, ForceDirectedGraph  } from './models';


@Injectable()
export class D3Service{

    /**
     * This service will provide methods to abable user interaction with element
     * while maintaining the d3 simulation physics.
     */
     constructor() {}

     /**
      *  A method to bind a pan and zoom behavior to an svg element
      */
     applyZoomableBehaviour(svgElement, containerElement){
         let svg, container, zoomed, zoom;

         svg = d3.select(svgElement);
         container = d3.select(containerElement);

         zoomed = () => {
             const transform = d3.event.transform;
             container.attr("transform", "translate("+ transform.x + "," + transform.y + ") scale(" + transform.k + ")");
         }

         zoom = d3.zoom().on("zoom", zoomed)
         svg.call(zoom);
     }

     /**
      * A method to bind a draggable behavior to an svg  element
      */
     applyDraggableBehavior(){}

     /**
      * The interactable graph we will simulate in this article 
      * This method does not interact  with the document, purely physical calculations with d3
      */
     getForceDirectedGraph(nodes: Node[], links: Link[], options: {width, height}){
         let graph = new ForceDirectedGraph(nodes, links, options);
         return graph;
     }

}