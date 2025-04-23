import { FaPen, FaDrawPolygon, FaCircle, FaRuler } from '../../../../packages/ui/node_modules/react-icons/fa';

const tools = [
  { name: 'Pen', icon: <FaPen /> },
  { name: 'Line', icon: <FaDrawPolygon /> },
  { name: 'Circle', icon: <FaCircle /> },
  { name: 'Angle', icon: <FaRuler /> },
];

export function Tools(){
    return (
        <div className="">
            <h2 className="text-lg font-bold mb-4">Drawing Tools</h2>
            <div className="space-y-2">
            {tools.map((tool) => (
              <button
                key={tool.name}
                className={`w-full p-2 flex items-center space-x-2 bg-blue-500 text-white`}
              >
                {tool.icon}
                <span>{tool.name}</span>
              </button>
            ))}
          </div>
        </div>
    )
}