'use client'

import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from '../../../../packages/ui/node_modules/react-icons/fa';
import { Canvas } from "./canvas";

export function VideoPlayer() {
    
    const [playing, setPlaying] = useState(false);
    const [playerLayout, setPlayerLayout] = useState('single')
    const [progress, setProgress] = useState(0);
    const videoRefs = useRef([]);
    const containerRef = useRef(null)
    const progressBarRef = useRef(null)

    useEffect(() => {
        const resizeObserver = new ResizeObserver(adjustVideoSize);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
        return () => resizeObserver.disconnect();
    }, [playerLayout]);

    useEffect(() => {
        videoRefs.current.forEach((videoRef) => {
            if (videoRef) {
                videoRef.addEventListener('timeupdate', handleProgress);
            }
        });
        return () => {
            videoRefs.current.forEach((videoRef) => {
                if (videoRef) {
                    videoRef.removeEventListener('timeupdate', handleProgress);
                }
            });
        };
    }, []);

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

    function handleProgress() {
        const video = videoRefs.current[0]; // Use the first video as reference
        if (video) {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
        }
    }

    function handleSeek(e) {
        const progressBar = progressBarRef.current;
        if (progressBar) {
            const seekTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * videoRefs.current[0].duration;
            videoRefs.current.forEach((videoRef) => {
                if (videoRef) {
                    videoRef.currentTime = seekTime;
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
                            />
                            <Canvas />
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center w-full mt-2'>
                <div 
                    ref={progressBarRef}
                    className="bg-gray-200 h-2 w-full rounded-full cursor-pointer"
                    onClick={handleSeek}
                >
                    <div 
                        className="bg-green-700 h-full rounded-full transition-all duration-300 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
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