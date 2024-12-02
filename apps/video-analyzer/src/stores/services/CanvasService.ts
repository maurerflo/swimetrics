import { Canvas, CanvasOptions, FabricObject, TOptions } from 'fabric';

export class CanvasService {
  canvas: Canvas | null = null;

  initialize(canvasElement: HTMLCanvasElement, options: TOptions<CanvasOptions>) {
    this.canvas = new Canvas(canvasElement, options);
  }

  dispose() {
    this.canvas?.dispose();
    this.canvas = null;
  }

  resize(width: number, height: number) {
    this.canvas?.setDimensions({ width, height });
  }

  addObject(object: FabricObject) {
    this.canvas?.add(object);
    this.canvas?.setActiveObject(object);
    this.canvas?.renderAll();
  }

  removeActiveObject() {
    if (!this.canvas) return;
    const activeObject = this.canvas.getActiveObject();
    if (activeObject) {
      this.canvas.remove(activeObject);
      this.canvas.renderAll();
    }
  }
}
