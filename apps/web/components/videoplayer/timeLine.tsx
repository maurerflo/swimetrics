'use client'

import { FaPlay, FaPause, FaForward, FaBackward } from '../../../../packages/ui/node_modules/react-icons/fa';
import { FaScissors } from '../../../../packages/ui/node_modules/react-icons/fa6';

export function TimeLine() {
    return (
        <>
            <div className="">
                <div className="flex justify-center space-x-4 mb-2">
                    {/* Timeline tools */}
                    <button className="p-2 bg-gray-400 rounded"><FaScissors /></button>
                </div>
                <div className="bg-white flex-1 rounded shadow-inner">
                {/* Timeline content would go here */}
                </div>
            </div>  
        </>
    )
}