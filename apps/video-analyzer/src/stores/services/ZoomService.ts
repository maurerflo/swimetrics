import { Canvas } from 'fabric';
import { Point } from 'fabric/src/Point';

export class ZoomService {
  zoomLevel = 1;

  setZoom(canvas: Canvas, zoom: number) {
    this.zoomLevel = Math.min(Math.max(zoom, 0.5), 2.0); // Clamp zoom level
    canvas.setZoom(this.zoomLevel);
  }

  zoomOnScroll(canvas: Canvas, delta: number, pointer: Point) {
    const zoom = this.zoomLevel - delta / 1000;
    this.setZoom(canvas, zoom);
    canvas.zoomToPoint(pointer, this.zoomLevel);
  }
}
