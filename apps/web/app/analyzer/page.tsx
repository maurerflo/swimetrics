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
    <div className="grid grid-cols-4 gab-1">
        <div className="">
            <VideoMenagement></VideoMenagement>
        </div>
        <div className="col-span-2">
            <VideoPlayer></VideoPlayer>
        </div>
        <div className="">
            <Tools></Tools>
        </div>
        <div className="col-span-3">
            <TimeLine></TimeLine>
        </div>
    </div>
    
</>
    )
}