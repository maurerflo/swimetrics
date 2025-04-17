import { TimeLine } from "@/components/videoplayer/timeLine";
import { VideoPlayer } from "@/components/videoplayer/videoPlayer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Tender Ninja | Analyzer',
    description: 'A comprehensive system for managing tenders'
}

export default function Analyzer() {
    return (
<>
    <VideoPlayer></VideoPlayer>
    <TimeLine></TimeLine>
</>
    )
}