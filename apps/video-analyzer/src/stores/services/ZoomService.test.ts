import { ZoomService } from './ZoomService';
import { Canvas } from 'fabric';

describe('ZoomService', () => {
  let zoomService: ZoomService;
  let mockCanvas: Canvas;

  beforeEach(() => {
    zoomService = new ZoomService();
    mockCanvas = new Canvas(document.createElement('canvas'));
  });

  test('sets zoom level', () => {
    zoomService.setZoom(mockCanvas, 1.5);
    expect(zoomService.zoomLevel).toBe(1.5);
    expect(mockCanvas.getZoom()).toBe(1.5);
  });

  test('clamps zoom level', () => {
    zoomService.setZoom(mockCanvas, 3.0); // Beyond upper limit
    expect(zoomService.zoomLevel).toBe(2.0);

    zoomService.setZoom(mockCanvas, 0.1); // Below lower limit
    expect(zoomService.zoomLevel).toBe(0.5);
  });
});
