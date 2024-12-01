import { defineStore } from 'pinia';
import { Canvas, CanvasOptions, FabricObject, FabricText } from 'fabric';
import type { EditorState, ShapeType } from '../types/editor';
import { createShape } from '../utils/shapes';
import { createImage, createVideo } from '../utils/media';


export const useEditorStore = defineStore('editor', {
  state: (): EditorState => ({
    canvas: null,
    selectedObject: null,
  }),

  actions: {
    initializeCanvas(
      canvasElement: HTMLCanvasElement,
      options: CanvasOptions
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
