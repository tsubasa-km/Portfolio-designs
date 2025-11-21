import React from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

const ThemeTopSecret: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#2a2a2a] p-4 md:p-12 flex justify-center font-mono overflow-y-auto">
      <div className="max-w-3xl w-full bg-[#f4e4bc] shadow-2xl relative p-8 md:p-16 text-[#1a1a1a] transform rotate-[0.5deg]">
        
        {/* Stamps */}
        <div className="absolute top-10 right-10 border-4 border-red-700 text-red-700 px-4 py-2 text-2xl font-black uppercase transform -rotate-12 opacity-70 pointer-events-none">
           TOP SECRET
        </div>
        <div className="absolute bottom-20 right-20 border-4 border-red-700 text-red-700 rounded-full w-32 h-32 flex items-center justify-center text-xl font-black uppercase transform rotate-12 opacity-50 pointer-events-none text-center leading-none">
           DECLASSIFIED<br/>2024
        </div>

        {/* Header */}
        <div className="text-center border-b-2 border-black mb-8 pb-4">
           <div className="text-sm mb-2">AGENCY OF INTELLIGENCE - PERSONNEL FILE</div>
           <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">SUBJECT: {data.name}</h1>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-2 gap-4 mb-8 border-b-2 border-black pb-8">
           <div>
              <span className="font-bold block text-xs uppercase text-gray-600">Codename / Title</span>
              <div className="text-xl font-bold">{data.title}</div>
           </div>
           <div>
              <span className="font-bold block text-xs uppercase text-gray-600">Status</span>
              <div className="text-xl font-bold uppercase">Active / Hirable</div>
           </div>
           <div className="col-span-2">
              <span className="font-bold block text-xs uppercase text-gray-600">Bio (Redacted)</span>
              <div className="relative group cursor-help">
                 <span className="bg-black text-black group-hover:bg-transparent group-hover:text-black transition-all duration-300 select-all">
                    {data.bio}
                 </span>
              </div>
           </div>
        </div>

        {/* Evidence (Projects) */}
        <div className="space-y-8">
           <h2 className="text-2xl font-bold uppercase underline decoration-4 underline-offset-4 decoration-black">Operation Logs</h2>
           
           {data.projects.map((p, i) => (
              <div key={i} className="flex gap-4 items-start">
                 <div className="font-bold text-lg w-8 pt-1">{String(i + 1).padStart(2, '0')}</div>
                 <div className="flex-1 border-l-2 border-black pl-4">
                    <div className="flex justify-between items-baseline mb-2">
                       <h3 className="font-bold text-xl uppercase bg-yellow-200 px-1">{p.title}</h3>
                       <span className="text-xs font-bold uppercase tracking-widest">[CONFIDENTIAL]</span>
                    </div>
                    <p className="mb-2 font-medium leading-relaxed">
                       <span className="bg-black text-black hover:bg-transparent hover:text-black transition-colors duration-200">
                          Target Objective: {p.description}
                       </span>
                    </p>
                    <div className="text-xs uppercase font-bold text-gray-600">
                       Tools Used: {p.tags.join(' // ')}
                    </div>
                 </div>
              </div>
           ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-black text-xs flex justify-between font-bold uppercase">
           <div>Doc ID: {Math.random().toString(36).substr(2, 9)}</div>
           <div>Contact: {data.contactEmail}</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeTopSecret;