/*
  Author(s) : Nathan Delavictoire
  This file is part of bagheera project.

 This file is subject to the terms and conditions defined in
 file 'LICENSE.txt', which is part of this source code package.

 path: d3/directives/zoomable.directive.ts
*/

import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from '../d3.service'

@Directive({
    selector: '[zoomableOf]',
})
export class ZoomableDirective {
    @Input('zoomableOf') zoomableOf: ElementRef;

    constructor(private d3Service: D3Service, private _element: ElementRef) {}

    ngOnInit() {
        this.d3Service.applyZoomableBehaviour(this.zoomableOf, this._element.nativeElement);
    }
}