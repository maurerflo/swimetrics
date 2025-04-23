import { TimeLine } from "@/components/videoplayer/timeLine";
import { Tools } from "@/components/videoplayer/tools";
import { VideoMenagement } from "@/components/videoplayer/videoManagement";
import { VideoPlayer } from "@/components/videoplayer/videoPlayer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Tender Ninja | Analyzer',
    description: 'A comprehensive system for managing tenders'
}

export default function Analyzer() {
    return (
<>
    <div className="flex flex-col h-screen bg-gray-100">
        {/* Top section */}
        <div className="flex-1 flex">
            <div className="w-1/4 p-4 bg-white shadow-md overflow-y-auto">
                <VideoMenagement></VideoMenagement>
            </div>
            <div className="w-1/2 p-4 bg-gray-200 flex flex-col">
                <VideoPlayer></VideoPlayer>
            </div>
            <div className="w-1/4 p-4 bg-white shadow-md">
                <Tools></Tools>
            </div>
        </div>
        
        <div className="h-40 bg-gray-300 p-4">
            <TimeLine></TimeLine>
        </div>
    </div>
    
</>
    )
}