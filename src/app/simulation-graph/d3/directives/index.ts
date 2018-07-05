import { ZoomableDirective } from './zoomable.directive';
import { DraggableDirective } from './draggable.directive';

export * from './zoomable.directive';
export * from './draggable.directive';

export const D3_DIRECTIVES = [
    ZoomableDirective,
    DraggableDirective
];

console.log(D3_DIRECTIVES)