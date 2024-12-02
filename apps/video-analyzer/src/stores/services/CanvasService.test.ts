import { CanvasService } from './CanvasService';

describe('CanvasService', () => {
  let canvasService: CanvasService;
  let canvasElement: HTMLCanvasElement;

  beforeEach(() => {
    canvasService = new CanvasService();
    canvasElement = document.createElement('canvas');
  });

  test('initializes canvas', () => {
    canvasService.initialize(canvasElement, { width: 800, height: 600 });
    expect(canvasService.canvas).not.toBeNull();
  });

  test('disposes canvas', () => {
    canvasService.initialize(canvasElement, { width: 800, height: 600 });
    canvasService.dispose();
    expect(canvasService.canvas).toBeNull();
  });
});
