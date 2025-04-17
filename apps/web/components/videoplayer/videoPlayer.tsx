import { Button } from "@repo/ui/button";

export function VideoPlayer() {
    return (
        <>
            <div>
                <video className="w-3/4 bg-gray-600">
                <source></source>
                </video>
            </div>
            <div className="inline">
                <button className="bg-gray-300 p-1 m-1">Play</button>
                <button className="bg-gray-300 p-1 m-1">Pause</button>
                <button className="bg-gray-300 p-1 m-1">STOP</button>
                <button className="bg-gray-300 p-1 m-1">Speed</button>
            </div>
        </>
        
    )
}