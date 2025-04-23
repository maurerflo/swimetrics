import { FaPlay, FaPause, FaForward, FaBackward } from '../../../../packages/ui/node_modules/react-icons/fa';
import { Canvas } from "./canvas";

export function VideoPlayer() {
    return (
        <>
        <div className="flex-1 bg-black relative">
            {/* Video players would go here */}
            {/* Drawing canvas would be overlaid on top of videos */}
            <Canvas></Canvas>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
            <button className="p-2 bg-blue-900 text-white rounded"><FaBackward /></button>
            <button className="p-2 bg-blue-900 text-white rounded"><FaPlay /></button>
            <button className="p-2 bg-blue-900 text-white rounded"><FaForward /></button>
            <select 
              className="p-2 bg-white rounded"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
          </div>
        </>        
    )
}