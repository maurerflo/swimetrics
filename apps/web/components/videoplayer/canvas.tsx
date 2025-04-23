import React from 'react';
import { Stage, Layer, Line, Circle, Rect } from '../../../../packages/ui/node_modules/react-konva';


export function Canvas() {
    const selectedVideos = [];
    const currentTool = 'pen';
    const playbackSpeed = 1;
    const shapes: any[] = [];

    const handleDrawStart = (e) => {
        const pos = e.target.getStage().getPointerPosition();
        if (currentTool === 'pen') {
          shapes.push({ tool: 'pen', points: [pos.x, pos.y] });
        } else if (currentTool === 'line') {
          shapes.push({ tool: currentTool, points: [pos.x, pos.y] });
        } else if (currentTool === 'circle') {
          shapes.push({ tool: currentTool, x: pos.x, y: pos.y, radius: 0 });
        }
      };
    
      const handleDrawMove = (e) => {
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        const lastShape = shapes[shapes.length - 1];
        if (lastShape.tool === 'pen') {
          lastShape.points = lastShape.points.concat([point.x, point.y]);
        } else if (lastShape.tool === 'line') {
          lastShape.points = [lastShape.points[0], lastShape.points[1], point.x, point.y];
        } else if (lastShape.tool === 'circle') {
          const radius = Math.sqrt(
            Math.pow(point.x - lastShape.x, 2) + Math.pow(point.y - lastShape.y, 2)
          );
          lastShape.radius = radius;
        }
      };
    
      const handleDrawEnd = () => {
        // No action required
      };
    return (
        <div>

        </div>
    )
}