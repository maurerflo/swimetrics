'use client'

import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from '../../../../packages/ui/node_modules/react-icons/fa';
import { Canvas } from "./canvas";

export function VideoPlayer() {
    
    const [playing, setPlaying] = useState(false);
    const [playerLayout, setPlayerLayout] = useState('single')
    const videoRefs = useRef([]);
    const containerRef = useRef(null)

    useEffect(() => {
        const resizeObserver = new ResizeObserver(adjustVideoSize);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => resizeObserver.disconnect();
    }, [playerLayout]);

    function adjustVideoSize() {
        if (containerRef.current) {
            const container = containerRef.current;
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            const controlsHeight = 40; // Estimated height for controls
            const availableHeight = containerHeight - controlsHeight;

            let gridCols, gridRows;
            if (playerLayout === 'single') {
                gridCols = 1;
                gridRows = 1;
            } else if (playerLayout === 'double') {
                gridCols = 2;
                gridRows = 1;
            } else { // quad
                gridCols = 2;
                gridRows = 2;
            }

            const videoWidth = (containerWidth * 0.95) / gridCols; // 95% of available width
            const videoHeight = (availableHeight * 0.95) / gridRows; // 95% of available height

            videoRefs.current.forEach((videoRef) => {
                if (videoRef) {
                    videoRef.style.width = `${videoWidth}px`;
                    videoRef.style.height = `${videoHeight}px`;
                }
            });
        }
    }
  
    function playBtn() {
        setPlaying(!playing);
        videoRefs.current.forEach((videoRef) => {
            if (videoRef) {
                playing ? videoRef.pause() : videoRef.play();
            }
        });
    }

    function skip10(){
        videoRefs.current.forEach((videoRef) =>{
            if (videoRef) videoRef.currentTime += 10;
        })
    }

    function revert10(){
        videoRefs.current.forEach((videoRef) =>{
            if (videoRef) videoRef.currentTime -= 10;
        })
    }
    function handleLayoutChange(event) {
        setPlayerLayout(event.target.value);
    }

    function addVideoRef(ref: any) {
        if (ref && !videoRefs.current.includes(ref)) {
            videoRefs.current.push(ref);
        }
    }

    function handleProgressChange(event) {
        videoRefs.current.forEach((videoRef) =>{
            if (videoRef) videoRef.currentTime = event.target.currentTime;
        })
    }

    return (
        <div ref={containerRef} className="flex flex-col bg-gray-300 p-2 w-full h-full">
            <div className="flex-grow flex items-center justify-center">
                <div className={`grid ${playerLayout === 'single' ? '' : playerLayout === 'double' ? 'grid-cols-2' : 'grid-cols-2 grid-rows-2'} w-full h-full`}>
                    {[...Array(playerLayout === 'single' ? 1 : playerLayout === 'double' ? 2 : 4)].map((_, index) => (
                        <div key={index} className="relative flex items-center justify-center">
                            <video 
                                src="https://ik.imagekit.io/ikmedia/example_video.mp4" 
                                ref={addVideoRef}
                                className="object-contain max-w-full max-h-full"
                                onTimeUpdate={handleProgressChange}
                            />
                            <Canvas />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <progress 
                    className='w-full h-1'
                    value={videoRefs.current[0] ? videoRefs.current[0].currentTime : 0} 
                    max={videoRefs.current[0] ? videoRefs.current[0].duration: 100}
                >

                </progress>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
                <button className="p-1 bg-blue-900 text-white rounded text-xs" onClick={revert10}>
                    <FaBackward />
                </button>
                <button className="p-1 bg-blue-900 text-white rounded text-xs" onClick={playBtn}>
                    {playing ? <FaPause /> : <FaPlay />}
                </button>
                <button className="p-1 bg-blue-900 text-white rounded text-xs" onClick={skip10}>
                    <FaForward />
                </button>
                <select className="p-1 bg-white rounded text-xs" defaultValue={1}>
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                </select>
                <select className="p-1 bg-white rounded text-xs" value={playerLayout} onChange={handleLayoutChange}>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="quad">Quad</option>
                </select>
            </div>
        </div>
    );
}