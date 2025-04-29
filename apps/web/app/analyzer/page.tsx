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
    const [topSectionHeight, setTopSectionHeight] = useState('auto');

    useEffect(() => {
        const handleResize = () => {
            const windowHeight = window.innerHeight;
            const timelineHeight = windowHeight/4
            const topSectionMaxHeight = windowHeight - timelineHeight;
            setTopSectionHeight(`${topSectionMaxHeight}px`);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-100">
                {/* Top section */}
                <div className={`flex-1 flex flex-col md:flex-row ${showVideoManager || showTools ? 'overflow-y-auto' : ''}`} style={{ maxHeight: topSectionHeight }}>
                    <div className={`w-full md:w-1/6 p-4 bg-white shadow-md transition-all duration-300 ${showVideoManager ? 'block' : 'hidden md:block'}`}>
                        <button
                            className="md:hidden mb-4"
                            onClick={() => setShowVideoManager(!showVideoManager)}
                        >
                            {showVideoManager ? 'Hide Video Manager' : 'Show Video Manager'}
                        </button>
                        <VideoMenagement></VideoMenagement>
                    </div>
                    <div className="w-full md:w-2/3 p-4 bg-gray-200 flex flex-col flex-grow">
                        <VideoPlayer></VideoPlayer>
                    </div>
                    <div className={`w-full md:w-1/6 p-4 bg-white shadow-md transition-all duration-300 ${showTools ? 'block' : 'hidden md:block'}`}>
                        <button
                            className="md:hidden mb-4"
                            onClick={() => setShowTools(!showTools)}
                        >
                            {showTools ? 'Hide Tools' : 'Show Tools'}
                        </button>
                        <Tools></Tools>
                    </div>
                </div>
                
                <div className="timeline h-1/4 bg-gray-300 p-4">
                    <TimeLine></TimeLine>
                </div>
            </div>
        </>
    )
}