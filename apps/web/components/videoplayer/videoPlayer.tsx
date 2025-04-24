import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from '../../../../packages/ui/node_modules/react-icons/fa';
import { Canvas } from "./canvas";

export function VideoPlayer() {
    
  const playing = false
    

    return (
        <>
            <div className="flex-1 bg-black relative">
                {/*<ReactPlayer
                    url="https://www.example.com/video.mp4"
                    controls
                    width="100%"
                    height="100%"
                    playing={playing}
                />*/}
                <Canvas />
            </div>
            <div className="mt-4 flex justify-center space-x-4">
                <button className="p-2 bg-blue-900 text-white rounded">
                    <FaBackward />
                </button>
                <button className="p-2 bg-blue-900 text-white rounded">
                    {playing ? <FaPause /> : <FaPlay />}
                </button>
                <button className="p-2 bg-blue-900 text-white rounded">
                    <FaForward />
                </button>
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
    );
}