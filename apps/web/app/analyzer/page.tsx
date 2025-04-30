'use client'

import { useState, useEffect } from "react";
import { TimeLine } from "@/components/videoplayer/timeLine";
import { Tools } from "@/components/videoplayer/tools";
import { VideoMenagement } from "@/components/videoplayer/videoManagement";
import { VideoPlayer } from "@/components/videoplayer/videoPlayer";
import {Metadata} from "next";


export default function Analyzer() {
    const [showVideoManager, setShowVideoManager] = useState(true);
    const [showTools, setShowTools] = useState(true);
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const timelineHeight = Math.max(80, dimensions.height * 0.20); // 20% of screen height, minimum 80px
    const topSectionHeight = dimensions.height - timelineHeight;
    const videoPlayerHeight = Math.min(topSectionHeight, dimensions.width); // 80% of top section or 45% of width, whichever is smaller

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
            {/* Top section */}
            <div className="flex flex-grow" style={{ height: `${topSectionHeight}px` }}>
                <div className={`w-1/6 bg-white shadow-md transition-all duration-300 ${showVideoManager ? 'block' : 'hidden md:block'}`}>
                    <button
                        className="md:hidden p-2 w-full text-xs"
                        onClick={() => setShowVideoManager(!showVideoManager)}
                    >
                        {showVideoManager ? 'Hide Video Manager' : 'Show Video Manager'}
                    </button>
                    <div className="overflow-auto h-full p-2">
                        <VideoMenagement />
                    </div>
                </div>
                <div className={`bg-gray-200 flex-grow overflow-hidden flex items-center justify-center h-[${videoPlayerHeight}px] w-[${videoPlayerHeight * 16 / 9}px] max-w-full`}>
                    <VideoPlayer />
                </div>
                <div className={`w-1/6 bg-white shadow-md transition-all duration-300 ${showTools ? 'block' : 'hidden md:block'}`}>
                    <button
                        className="md:hidden p-2 w-full text-xs"
                        onClick={() => setShowTools(!showTools)}
                    >
                        {showTools ? 'Hide Tools' : 'Show Tools'}
                    </button>
                    <div className="overflow-auto h-full p-2">
                        <Tools />
                    </div>
                </div>
            </div>
            
            {/* Timeline section */}
            <div className="bg-gray-300 flex-shrink-0 border-t-2 border-gray-400 p-2" style={{ height: `${timelineHeight}px` }}>
                <TimeLine />
            </div>
        </div>
    )
}