import type { MediaOptions } from '../types/editor';
import { Canvas, FabricImage, Image } from 'fabric';

export const createVideo = (url: string, options: MediaOptions) => {
  const video = document.createElement('video');
  video.src = url;
  video.crossOrigin = options.crossOrigin || 'anonymous';

  return new Image(video, {
    left: options.left,
    top: options.top,
    width: options.width,
  });
};

export const createImage = (url: string, canvas: Canvas): Promise<void> => {
  return new Promise((resolve) => {
    FabricImage.fromURL(url).then((img) => {
      img.scaleToWidth(200);
      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
      resolve();
    });
  });
};
