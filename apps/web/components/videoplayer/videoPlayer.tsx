'use client'

import { useState, useRef } from 'react';
import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from '../../../../packages/ui/node_modules/react-icons/fa';
import { Canvas } from "./canvas";

export function VideoPlayer() {
    
    const [playing, setPlaying] = useState(false);
    const [playerLayout, setPlayerLayout] = useState('single')
    const videoRefs = useRef([]);
  
    function playBtn() {
        setPlaying(!playing);
        videoRefs.current.forEach((videoRef) => {
            if (videoRef) { // Check if the video reference exists
                if (playing) {
                    videoRef.pause();
                } else {
                    videoRef.play();
                }
            }
        });
    }

    function skip10(){
        videoRefs.current.forEach((videoRef) =>{
            videoRef.currentTime += 10;
        })
    }

    function revert10(){
        videoRefs.current.forEach((videoRef) =>{
            videoRef.currentTime -= 10;
        })
    }
    function handleLayoutChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setPlayerLayout(event.target.value);
    }

    function addVideoRef(ref: any) {
        if (ref && !videoRefs.current.includes(ref)) {
            videoRefs.current.push(ref);
        }
    }

    return (
        <>
            <div className="bg-black relative">
                {playerLayout === 'single' && (
                    <div className='flex justify-center'>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                    </div>
                )}
                {playerLayout === 'double' && (
                    <div className='grid grid-cols-2'>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                    </div>
                )}
                {playerLayout === 'quad' && (
                    <div className='grid grid-cols-2 grid-rows-2'>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                        <div>
                            <video src="https://ik.imagekit.io/ikmedia/example_video.mp4" ref={addVideoRef}/>
                            <Canvas />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <progress value={videoRefs.current.currentTime} max={videoRefs.current.duration}></progress>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
                <button className="p-2 bg-blue-900 text-white rounded" onClick={revert10}>
                    <FaBackward />
                </button>
                <button className="p-2 bg-blue-900 text-white rounded" onClick={playBtn}>
                    {playing ? <FaPause /> : <FaPlay />}
                </button>
                <button className="p-2 bg-blue-900 text-white rounded" onClick={skip10}>
                    <FaForward />
                </button>
                <select className="p-2 bg-white rounded" defaultValue={1}>
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                </select>
                <select className="p-2 bg-white rounded" value={playerLayout} onChange={handleLayoutChange}>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="quad">Quad</option>
                </select>
            </div>
        </>
    );
}