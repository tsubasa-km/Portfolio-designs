import React from 'react';
import { PortfolioData } from '../types';
import { Smile, Hammer, PenTool, Wrench } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeInstruction: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white text-black font-sans p-4 md:p-12 flex justify-center">
       <div className="max-w-3xl w-full space-y-12">
          
          {/* Header */}
          <div className="border-b-4 border-black pb-8 flex justify-between items-end">
             <div>
                <h1 className="text-6xl font-bold tracking-tighter uppercase mb-2">HËLLO</h1>
                <h2 className="text-2xl font-normal uppercase tracking-widest">{data.name}</h2>
             </div>
             <div className="border-4 border-black rounded-full p-4">
                <Smile size={64} strokeWidth={1.5} />
             </div>
          </div>

          {/* Warning Box */}
          <div className="grid grid-cols-3 gap-4">
             <div className="border-2 border-black p-4 flex flex-col items-center justify-center aspect-square">
                <Hammer size={48} strokeWidth={1} className="mb-4" />
                <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl">?</div>
             </div>
             <div className="border-2 border-black p-4 flex flex-col items-center justify-center aspect-square">
                <div className="text-4xl font-bold mb-2">1x</div>
                <span className="uppercase text-sm font-bold">{data.title}</span>
             </div>
             <div className="border-2 border-black p-4 flex flex-col items-center justify-center aspect-square text-center">
                <span className="text-xs font-bold uppercase mb-2">Contact</span>
                <span className="text-xs break-all">{data.contactEmail}</span>
             </div>
          </div>

          {/* Steps (Projects) */}
          <div className="space-y-16">
             {data.projects.map((project, idx) => (
                <div key={idx} className="relative">
                   <div className="absolute -left-4 -top-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {idx + 1}
                   </div>
                   <div className="border-4 border-black p-8 min-h-[200px] flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-1 order-2 md:order-1">
                         <h3 className="text-3xl font-bold uppercase mb-4">{project.title}</h3>
                         <p className="text-lg font-medium leading-relaxed mb-4">{project.description}</p>
                         <div className="flex gap-2">
                            {project.tags.map(t => (
                               <span key={t} className="border border-black px-2 py-1 text-xs uppercase font-bold rounded-full">{t}</span>
                            ))}
                         </div>
                      </div>
                      <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 order-1 md:order-2 border-2 border-dashed border-black rounded-full flex items-center justify-center">
                         {idx % 2 === 0 ? <PenTool size={48} strokeWidth={1} /> : <Wrench size={48} strokeWidth={1} />}
                      </div>
                   </div>
                </div>
             ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-12 border-t-4 border-black">
             <p className="font-bold uppercase text-sm text-gray-500">© 2024 {data.name} Design System</p>
             <p className="text-xs mt-2 uppercase">Assembly required. Batteries (Coffee) not included.</p>
          </div>
       </div>
    </div>
  );
};

export default ThemeInstruction;