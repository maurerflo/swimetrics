import { Canvas, Object as FabricObject } from 'fabric'

export type ShapeType = 'rectangle' | 'circle'

export interface EditorState {
  canvas: Canvas | null
  selectedObject: FabricObject | null
}

export interface ShapeOptions {
  left: number
  top: number
  width?: number
  height?: number
  radius?: number
  fill: string
}

export interface TextOptions {
  left: number
  top: number
  fontSize: number
  text: string
}

export interface MediaOptions {
  left: number
  top: number
  width?: number
  crossOrigin?: string
}
