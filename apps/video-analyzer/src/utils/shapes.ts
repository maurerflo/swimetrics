import type { ShapeType, ShapeOptions } from '../types/editor'
import { Rect, Circle} from 'fabric';

export const createShape = (type: ShapeType, options: ShapeOptions) => {
  switch (type) {
    case 'rectangle':
      return new Rect({
        left: options.left,
        top: options.top,
        width: options.width || 100,
        height: options.height || 100,
        fill: options.fill
      })
    case 'circle':
      return new Circle({
        left: options.left,
        top: options.top,
        radius: options.radius || 50,
        fill: options.fill
      })
    default:
      throw new Error(`Unsupported shape type: ${type}`)
  }
}
