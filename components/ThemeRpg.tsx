import React from 'react';
import { PortfolioData } from '../types';
import { Sword, Shield, Scroll, Gem, User } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeRpg: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 md:p-8 font-['DotGothic16'] text-white overflow-auto">
      <div className="w-full max-w-5xl border-4 border-white rounded-lg bg-[#0000aa] shadow-[0_0_0_4px_#555,0_0_20px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Classic Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000088] to-[#000033] -z-10"></div>
        
        {/* Header Section */}
        <div className="border-b-4 border-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex gap-6 items-center">
             <div className="w-24 h-24 bg-black border-2 border-gray-400 relative shrink-0">
               <img src={`https://picsum.photos/seed/${data.name}rpg/150/150`} alt="Avatar" className="w-full h-full object-cover pixelated" style={{ imageRendering: 'pixelated' }} />
               <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-xs px-1 font-bold border border-white">LV.99</div>
             </div>
             <div>
                <h1 className="text-3xl md:text-4xl mb-1 text-yellow-300 drop-shadow-[2px_2px_0_#000]">{data.name}</h1>
                <div className="text-xl text-cyan-200 flex items-center gap-2">
                  <span className="text-sm text-gray-400">CLASS:</span> {data.title}
                </div>
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg w-full md:w-auto">
             <div className="flex justify-between gap-4"><span className="text-yellow-200">HP</span> <span>9999 / 9999</span></div>
             <div className="flex justify-between gap-4"><span className="text-cyan-200">MP</span> <span>999 / 999</span></div>
             <div className="flex justify-between gap-4"><span className="text-green-200">EXP</span> <span>MAX</span></div>
             <div className="flex justify-between gap-4"><span className="text-pink-200">GOLD</span> <span>0</span></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
           {/* Left Sidebar: Stats/Bio */}
           <div className="border-r-4 border-white p-6 space-y-8 bg-[#000066]/50">
              <div>
                 <h3 className="text-xl text-yellow-200 mb-4 border-b-2 border-gray-500 pb-1 flex items-center gap-2">
                    <User size={20} /> PROFILE
                 </h3>
                 <p className="text-lg leading-relaxed whitespace-pre-wrap">{data.bio}</p>
              </div>

              <div>
                 <h3 className="text-xl text-yellow-200 mb-4 border-b-2 border-gray-500 pb-1 flex items-center gap-2">
                    <Shield size={20} /> QUOTE
                 </h3>
                 <div className="bg-black/40 p-3 border border-gray-500 rounded text-gray-300 italic">
                    "{data.quirkyQuote}"
                 </div>
              </div>

              <div>
                 <h3 className="text-xl text-yellow-200 mb-4 border-b-2 border-gray-500 pb-1 flex items-center gap-2">
                    <Scroll size={20} /> CONTACT
                 </h3>
                 <a href={`mailto:${data.contactEmail}`} className="block p-2 hover:bg-white/10 cursor-pointer transition-colors text-cyan-300">
                    To: {data.contactEmail}
                 </a>
              </div>
           </div>

           {/* Right Content: Quest Log */}
           <div className="lg:col-span-2 p-6">
              <h3 className="text-2xl text-yellow-200 mb-6 flex items-center gap-3 pb-2 border-b-4 border-white/20">
                 <Sword size={24} /> QUEST LOG (Projects)
              </h3>

              <div className="space-y-4">
                 {data.projects.map((project, idx) => (
                    <div key={idx} className="group relative border-2 border-gray-500 bg-black/20 p-4 hover:bg-white/10 hover:border-yellow-400 cursor-pointer transition-all">
                       {/* Hand Cursor on Hover */}
                       <div className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse hidden md:block">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Mickey_Mouse_gloves.png" className="w-8 h-8 -rotate-90 filter invert" alt="cursor" />
                       </div>

                       <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-cyan-300 group-hover:text-yellow-300">{project.title}</h4>
                          <span className="text-xs bg-gray-800 px-2 py-1 rounded border border-gray-600">Rank S</span>
                       </div>
                       <p className="text-gray-300 mb-3">{project.description}</p>
                       <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tIdx) => (
                             <div key={tIdx} className="flex items-center gap-1 text-sm text-green-300">
                                <Gem size={12} /> {tag}
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
              
              <div className="mt-8 text-center text-gray-500 text-sm animate-pulse">
                 PRESS START TO CONNECT
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeRpg;