import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu"

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
                <button className="bg-gray-300 p-1 m-1">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <span>Speed</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>0,25x</DropdownMenuItem>
                            <DropdownMenuSeparator></DropdownMenuSeparator>
                            <DropdownMenuItem>0,5x</DropdownMenuItem>
                            <DropdownMenuSeparator></DropdownMenuSeparator>
                            <DropdownMenuItem>1x</DropdownMenuItem>
                            <DropdownMenuSeparator></DropdownMenuSeparator>
                            <DropdownMenuItem>2x</DropdownMenuItem>
                            <DropdownMenuSeparator></DropdownMenuSeparator>
                            <DropdownMenuItem>4x</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </button>
            </div>
        </>
        
    )
}