import React from 'react';
import { PortfolioData } from '../types';
import { Disc, Rewind, Play, FastForward } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeVHS: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#111] text-white p-4 md:p-8 flex items-center justify-center font-sans relative overflow-hidden">
      {/* TV Static Overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif")' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" style={{ backgroundSize: '100% 4px' }}></div>

      <div className="w-full max-w-3xl bg-black border-2 border-gray-800 shadow-[0_0_50px_rgba(255,0,255,0.2)] relative rounded-lg overflow-hidden">
        {/* VHS Spine/Cover Art */}
        <div className="relative h-64 w-full bg-gradient-to-br from-purple-900 to-blue-900 overflow-hidden">
           <img src={`https://picsum.photos/seed/${data.name}retro/800/400`} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 grayscale" />
           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
           
           <div className="absolute bottom-4 left-6 right-6 z-10">
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-red-500 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] transform -skew-x-12">
                 {data.name}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                 <span className="bg-white text-black font-bold px-1 text-sm transform skew-x-12">STEREO</span>
                 <span className="bg-red-600 text-white font-bold px-1 text-sm transform skew-x-12">HI-FI</span>
                 <span className="text-cyan-300 font-bold text-xl tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">{data.title}</span>
              </div>
           </div>

           <div className="absolute top-4 right-4 text-green-400 font-mono text-xl animate-pulse drop-shadow-[0_0_5px_rgba(0,255,0,0.8)]">
              PLAY &#9658;
           </div>
        </div>

        <div className="p-8 space-y-8">
           {/* Synopsis */}
           <div className="space-y-2">
              <h2 className="text-yellow-400 font-bold text-lg border-b border-gray-700 pb-1 mb-2 uppercase tracking-wider">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed font-medium text-justify">
                 {data.bio}
              </p>
              <p className="text-sm text-gray-500 italic">"{data.quirkyQuote}"</p>
           </div>

           {/* Features (Projects) */}
           <div>
              <h2 className="text-cyan-400 font-bold text-lg border-b border-gray-700 pb-1 mb-4 uppercase tracking-wider">Special Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {data.projects.map((p, i) => (
                    <div key={i} className="bg-gray-900 border border-gray-700 p-3 hover:border-purple-500 transition-colors group cursor-pointer">
                       <div className="flex items-center gap-2 mb-2 text-purple-400 group-hover:text-white transition-colors">
                          <Disc size={16} />
                          <span className="font-bold uppercase tracking-tight">{p.title}</span>
                       </div>
                       <p className="text-xs text-gray-400 leading-tight mb-2">{p.description}</p>
                       <div className="flex gap-1 flex-wrap">
                          {p.tags.map(t => <span key={t} className="text-[10px] bg-gray-800 px-1 text-gray-300 uppercase">{t}</span>)}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Footer info */}
           <div className="border-t-2 border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
              <div>Run Time: 5 Years approx.</div>
              <div>Rated R (For Refactoring)</div>
              <div>{data.contactEmail}</div>
           </div>
        </div>

        {/* Stickers */}
        <div className="absolute bottom-4 right-8 w-24 h-16 bg-yellow-300 text-black font-bold flex items-center justify-center text-center text-sm transform rotate-6 shadow-lg opacity-90">
           BE KIND<br/>REWIND
        </div>
      </div>
    </div>
  );
};

export default ThemeVHS;