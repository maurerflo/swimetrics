import { defineStore } from 'pinia';
import { Canvas, CanvasOptions, FabricObject, FabricText } from 'fabric';
import type { EditorState, ShapeType } from '../types/editor';
import { createShape } from '../utils/shapes';
import { createImage, createVideo } from '../utils/media';
import type { TOptions } from 'fabric/src/typedefs';


export const useEditorStore = defineStore('editor', {
  state: (): EditorState => ({
    canvas: null,
    selectedObject: null,
    zoomLevel: 1,
  }),

  actions: {
    initializeCanvas(
      canvasElement: HTMLCanvasElement,
      options: TOptions<CanvasOptions>
    ) {
      this.canvas = new Canvas(canvasElement, options);
      this.setupCanvasListeners();
    },

    disposeCanvas() {
      this.canvas?.dispose();
      this.canvas = null;
    },

    resizeCanvas(width: number, height: number){
      this.canvas.setDimensions({ width, height });
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

    updateCanvas() {
      this.canvas?.renderAll();
    },

    zoomOnScrolling(opt: { e: WheelEvent }): void {
      const delta = opt.e.deltaY;
      const pointer = this.canvas.getScenePoint(opt.e);
      const zoom = this.zoomLevel - delta / 1000;

      // Clamp zoom level to a range (e.g., 0.5 to 2.0)
      this.zoomLevel = Math.min(Math.max(zoom, 0.5), 2.0);

      // Apply the zoom level
      this.canvas.zoomToPoint(pointer, this.zoomLevel);

      // Prevent default scrolling behavior
      opt.e.preventDefault();
      opt.e.stopPropagation();
    },

    setZoom(level: number): void {
      this.zoomLevel = level;
      this.canvas.setZoom(level);
    },

    addShape(type: ShapeType): void {
      if (!this.canvas) return;

      const shape = createShape(type, {
        left: 100,
        top: 100,
        fill: '#000000',
      });

      this.canvas.add(shape);
      this.canvas.setActiveObject(shape);
      this.canvas.renderAll();
    },

    addText(): void {
      if (!this.canvas) return;

      const text = new FabricText('Double click to edit', {
        left: 100,
        top: 100,
        fontSize: 20,
      });

      this.canvas.add(text);
      this.canvas.setActiveObject(text);
      this.canvas.renderAll();
    },

    async addImage(url: string): Promise<void> {
      if (!this.canvas) return;
      await createImage(url, this.canvas);
    },

    addVideo(url: string): void {
      if (!this.canvas) return;

      const fabricVideo = createVideo(url, {
        left: 100,
        top: 100,
      });

      this.canvas.add(fabricVideo);
      this.canvas.setActiveObject(fabricVideo);
      this.canvas.renderAll();

      const videoElement = fabricVideo.getElement() as HTMLVideoElement;
      videoElement.play();
    },

    deleteSelected(): void {
      if (!this.canvas) return;

      const activeObject = this.canvas.getActiveObject();
      if (activeObject) {
        this.canvas.remove(activeObject);
        this.canvas.renderAll();
      }
    },

    updateSelectedObject(): void {
      if (!this.canvas || !this.selectedObject) return;
      this.canvas.renderAll();
    },
  },
});
