import { defineStore } from 'pinia';
import { CanvasService } from './services/CanvasService';
import { ZoomService } from './services/ZoomService';
import { CanvasOptions, FabricObject, TOptions } from 'fabric';
import { Point } from 'fabric/src/Point';

const canvasService = new CanvasService();
const zoomService = new ZoomService();

export const useEditorStore = defineStore('editor', {
  state: () => ({
    zoomLevel: zoomService.zoomLevel,
  }),

  actions: {
    initializeCanvas(
      canvasElement: HTMLCanvasElement,
      options: TOptions<CanvasOptions>
    ) {
      canvasService.initialize(canvasElement, options);
      this.setupCanvasListeners();
    },

    disposeCanvas() {
      canvasService.dispose();
    },

    setupCanvasListeners(): void {
      if (!this.canvas) return;

      this.canvas.on('selection:created', (e: { selected: FabricObject[] }) => {
        this.selectedObject = e.selected[0];
      });

      this.canvas.on('selection:cleared', () => {
        this.selectedObject = null;
      });

      this.canvas.on('mouse:wheel', this.zoomOnScrolling);
    },

    resizeCanvas(width: number, height: number) {
      canvasService.resize(width, height);
    },

    addShape(shape: any) {
      canvasService.addObject(shape);
    },

    deleteSelected() {
      canvasService.removeActiveObject();
    },

    setZoom(level: number) {
      zoomService.setZoom(canvasService.canvas!, level);
      this.zoomLevel = zoomService.zoomLevel;
    },

    zoomOnScroll(delta: number, pointer: Point) {
      zoomService.zoomOnScroll(canvasService.canvas!, delta, pointer);
      this.zoomLevel = zoomService.zoomLevel;
    },
  },
});
