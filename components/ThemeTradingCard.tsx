import React from 'react';
import { PortfolioData } from '../types';
import { Sparkles, Zap, Shield, Sword } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeTradingCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 overflow-auto">
      <div className="relative group w-full max-w-md aspect-[2.5/3.5] rounded-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
        
        {/* Holographic Shine Effect (Overlay) */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 z-50 pointer-events-none mix-blend-overlay transition-opacity duration-700 bg-[length:200%_200%] animate-shine"></div>
        
        {/* Card Container */}
        <div className="w-full h-full bg-[#f3d566] p-3 rounded-3xl shadow-2xl border-8 border-[#ffd700]">
           <div className="w-full h-full bg-[#1a1a1a] rounded-xl p-4 flex flex-col text-white relative overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-center mb-2 z-10">
                 <div className="font-bold text-xl uppercase tracking-tighter">{data.name}</div>
                 <div className="flex items-center gap-1 text-red-500 font-black text-xl">
                    <span>3000</span> <span className="text-xs text-white">HP</span>
                 </div>
              </div>

              {/* Art Box */}
              <div className="relative w-full aspect-[4/3] bg-slate-800 border-4 border-[#888] shadow-inner mb-4 overflow-hidden">
                 <img src={`https://picsum.photos/seed/${data.name}card/500/400`} className="w-full h-full object-cover" />
                 <div className="absolute bottom-0 right-0 bg-black/60 px-2 py-1 text-xs italic border-tl-lg">
                    {data.title} Type
                 </div>
              </div>

              {/* Stats / Bio */}
              <div className="flex-1 z-10 space-y-4">
                 <div className="text-xs text-[#ffd700] italic text-center border-b border-gray-700 pb-2">
                    "{data.quirkyQuote}"
                 </div>

                 {/* Attacks (Projects) */}
                 <div className="space-y-3">
                    {data.projects.slice(0, 2).map((p, i) => (
                       <div key={i} className="flex gap-3 items-center">
                           <div className="flex flex-col items-center justify-center w-8 shrink-0">
                              {i === 0 ? <Sword size={20} className="text-red-400" /> : <Zap size={20} className="text-yellow-400" />}
                           </div>
                           <div className="flex-1">
                              <div className="flex justify-between">
                                 <span className="font-bold text-sm uppercase">{p.title}</span>
                                 <span className="font-bold text-lg">{100 + i * 50}</span>
                              </div>
                              <p className="text-[10px] text-gray-400 leading-tight">{p.description.substring(0, 60)}...</p>
                           </div>
                       </div>
                    ))}
                    <div className="text-center text-xs text-gray-500 italic pt-1">...and {Math.max(0, data.projects.length - 2)} more abilities</div>
                 </div>
              </div>

              {/* Weakness/Resistance Footer */}
              <div className="mt-auto pt-2 border-t border-gray-700 flex justify-between items-center text-[10px] text-gray-400 uppercase">
                 <div className="flex gap-1 items-center">Weakness: <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-black font-bold">W</div></div>
                 <div className="flex gap-1 items-center">Resistance: <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center text-black font-bold">L</div></div>
                 <div>Retreat: 3</div>
              </div>
           </div>
        </div>
      </div>
      <style>{`
         @keyframes shine {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
         }
         .animate-shine {
            animation: shine 3s ease infinite;
         }
      `}</style>
    </div>
  );
};

export default ThemeTradingCard;