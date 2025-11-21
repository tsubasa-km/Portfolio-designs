import React from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

const ThemeVending: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-zinc-800 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-red-600 p-4 md:p-8 rounded-3xl shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] max-w-4xl w-full border-r-8 border-b-8 border-red-800 relative">
         
         {/* Glass Window */}
         <div className="bg-blue-900/30 rounded-xl border-4 border-gray-400/50 backdrop-blur-sm p-6 mb-8 relative overflow-hidden shadow-inner">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-10"></div>
            
            {/* Rows of Products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {data.projects.map((p, i) => (
                  <div key={i} className="flex flex-col items-center group">
                     {/* Product "Can" */}
                     <div className="w-32 h-48 bg-gradient-to-r from-gray-200 to-white rounded-lg shadow-lg flex flex-col items-center justify-center p-2 text-center transform group-hover:scale-105 transition-transform relative">
                        <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex flex-col items-center justify-center gap-2 overflow-hidden bg-white">
                           <div className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-md`} style={{ backgroundColor: `hsl(${i * 60}, 70%, 50%)` }}>
                              {p.title.substring(0, 2)}
                           </div>
                           <div className="font-bold text-sm leading-tight break-words w-full px-1">{p.title}</div>
                        </div>
                     </div>
                     {/* Shelf Label */}
                     <div className="mt-2 bg-black text-red-500 font-mono font-bold px-3 py-1 rounded border border-gray-600">
                        A{i + 1}
                     </div>
                     <div className="text-white/80 text-xs mt-1 max-w-[150px] text-center line-clamp-2 h-8">{p.description}</div>
                  </div>
               ))}
               
               {/* Profile "Can" */}
               <div className="flex flex-col items-center">
                  <div className="w-32 h-48 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-lg shadow-lg flex flex-col items-center justify-center p-2 text-center border-b-4 border-yellow-600">
                     <div className="font-black text-2xl uppercase break-words">{data.name}</div>
                     <div className="text-xs font-bold mt-2">{data.title}</div>
                  </div>
                  <div className="mt-2 bg-black text-red-500 font-mono font-bold px-3 py-1 rounded border border-gray-600">
                     B1
                  </div>
                  <div className="text-white/80 text-xs mt-1">Engineer Profile</div>
               </div>
            </div>
         </div>

         {/* Control Panel */}
         <div className="bg-gray-900 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border-t-4 border-gray-700 shadow-lg">
            
            <div className="flex-1 text-green-400 font-mono bg-black p-4 rounded border-4 border-gray-600 shadow-[inset_0_0_10px_rgba(0,255,0,0.2)] w-full md:w-auto">
               <p className="animate-pulse">WELCOME</p>
               <p className="text-sm text-gray-500">CREDIT: ∞</p>
               <p className="text-xs mt-2 text-white">"{data.quirkyQuote}"</p>
            </div>

            <div className="grid grid-cols-3 gap-2 font-bold text-white">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                  <button key={n} className="w-12 h-12 bg-gray-700 rounded shadow-[0_4px_0_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 transition-all border border-gray-500">{n}</button>
               ))}
            </div>

            <div className="bg-black w-full md:w-48 h-24 rounded-b-xl border-x-8 border-b-8 border-gray-800 relative flex items-center justify-center group overflow-hidden cursor-pointer">
               <div className="absolute top-0 w-full h-1 bg-gray-700"></div>
               <span className="text-gray-600 font-bold text-2xl group-hover:text-gray-400 transition-colors">PUSH</span>
               <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-50 pointer-events-none"></div>
            </div>

         </div>

         <div className="absolute bottom-2 right-4 text-white/20 font-bold text-4xl italic transform -rotate-12 pointer-events-none">
            ColaCode
         </div>
      </div>
    </div>
  );
};

export default ThemeVending;