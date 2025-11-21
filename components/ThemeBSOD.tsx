import React from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

const ThemeBSOD: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#0000AA] text-white font-['VT323'] p-8 md:p-16 flex flex-col items-center justify-center cursor-none selection:bg-white selection:text-[#0000AA]">
      <div className="max-w-4xl w-full">
        <div className="bg-white text-[#0000AA] inline-block px-2 mb-8 font-bold text-xl">
          WINDOWS_FATAL_EXCEPTION_ERROR
        </div>
        
        <h1 className="text-4xl md:text-6xl mb-8 leading-tight">
          A problem has been detected and {data.name} has been loaded to prevent damage to your project.
        </h1>

        <div className="mb-8 text-xl md:text-2xl space-y-4">
          <p>THE_ENGINEER_PROFILE_DETAILS:</p>
          <p className="pl-4 text-yellow-300">{data.title.toUpperCase()}</p>
          <p className="pl-4 max-w-2xl">{data.bio}</p>
        </div>

        <div className="mb-8">
          <p className="text-xl mb-2">If this is the first time you've seen this engineer screen, restart your hiring process.</p>
          <p className="text-xl">Check to be sure you have adequate budget and interesting problems.</p>
        </div>

        <div className="mb-12">
          <p className="mb-2">Technical Information:</p>
          <div className="font-mono text-lg">
            <p>*** STOP: 0x00000000 (0xF00D, 0xCODE, 0xCAFE, 0xBABE)</p>
            <p>*** {data.contactEmail} - Address Base at {data.quirkyQuote}</p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="mb-4 border-b border-white/30 pb-2">Beginning dump of physical memory (Projects):</p>
          {data.projects.map((p, i) => (
            <div key={i} className="flex gap-4 font-mono text-lg opacity-80 hover:opacity-100 hover:bg-white hover:text-[#0000AA] transition-colors cursor-pointer">
              <span className="w-24">ADDR_{1000 + i}</span>
              <span className="font-bold w-48">{p.title}</span>
              <span>{p.description.substring(0, 50)}...</span>
            </div>
          ))}
        </div>

        <div className="mt-12 animate-pulse text-center">
          Press any key to contact...
        </div>
      </div>
    </div>
  );
};

export default ThemeBSOD;