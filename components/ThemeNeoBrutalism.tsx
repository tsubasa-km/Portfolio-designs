import React from 'react';
import { PortfolioData } from '../types';
import { ArrowUpRight, Star, Zap } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeNeoBrutalism: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#FFDEE9] text-black font-['Space_Grotesk'] p-4 md:p-8 overflow-x-hidden">
      
      {/* Header / Marquee */}
      <div className="fixed top-4 left-0 w-full z-50 -rotate-1 pointer-events-none">
        <div className="bg-[#bcff00] border-y-4 border-black py-2 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[marquee_20s_linear_infinite] text-2xl font-black uppercase tracking-widest">
            Welcome to the portfolio of {data.name} /// Open for work /// {data.title} /// Let's build something crazy ///
            Welcome to the portfolio of {data.name} /// Open for work /// {data.title} /// Let's build something crazy ///
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Main Identity Card */}
        <div className="md:col-span-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 relative hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
           <div className="absolute -top-6 -right-6 bg-[#ff00ff] text-white p-4 rotate-12 border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10">
              <Zap size={32} />
           </div>
           
           <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-4 break-words">
              {data.name}
           </h1>
           <div className="bg-black text-white inline-block px-4 py-2 text-2xl font-bold mb-6 rotate-1">
              {data.title}
           </div>
           <p className="text-xl md:text-2xl font-medium leading-relaxed border-l-8 border-[#bcff00] pl-6">
              {data.bio}
           </p>

           <div className="mt-8 flex gap-4">
              <a href={`mailto:${data.contactEmail}`} className="bg-[#bcff00] px-8 py-3 text-xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#a6e600] active:translate-y-1 active:shadow-none transition-all">
                 CONTACT ME
              </a>
           </div>
        </div>

        {/* Sidebar / Stats */}
        <div className="md:col-span-4 flex flex-col gap-6">
           <div className="bg-[#ff9900] p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] rotate-2">
              <h3 className="font-black text-2xl mb-2 uppercase border-b-4 border-black pb-2">Vibe Check</h3>
              <p className="text-lg font-bold italic">"{data.quirkyQuote}"</p>
           </div>
           
           <div className="bg-cyan-300 aspect-square border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative group">
              <img src={`https://picsum.photos/seed/${data.name}art/400/400`} className="w-full h-full object-cover filter contrast-150 grayscale group-hover:grayscale-0 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                 <Star size={64} className="text-yellow-400 fill-yellow-400 animate-spin-slow" />
              </div>
           </div>
        </div>

        {/* Project Grid */}
        <div className="md:col-span-12 mt-12">
           <h2 className="text-5xl font-black mb-8 uppercase flex items-center gap-4">
              <span className="w-12 h-12 bg-black block"></span> 
              Projects 
              <span className="w-full h-2 bg-black block ml-4"></span>
           </h2>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project, idx) => (
                 <div key={idx} className="bg-white border-4 border-black p-4 flex flex-col justify-between hover:-rotate-1 transition-transform duration-300">
                    <div className="bg-gray-100 border-2 border-black h-48 mb-4 overflow-hidden relative">
                       <img src={`https://picsum.photos/seed/${project.title}/400/300`} className="w-full h-full object-cover mix-blend-multiply" />
                       <div className="absolute bottom-2 right-2 bg-white px-2 py-1 border-2 border-black font-bold text-xs">IMG_0{idx + 1}</div>
                    </div>
                    <div>
                       <h3 className="text-2xl font-black uppercase mb-2 leading-none">{project.title}</h3>
                       <p className="text-sm font-bold text-gray-600 mb-4">{project.description}</p>
                       <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                             <span key={tag} className="px-2 py-1 bg-black text-white text-xs font-bold uppercase">{tag}</span>
                          ))}
                       </div>
                    </div>
                    <button className="mt-4 w-full border-4 border-black py-2 font-black text-lg hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                       VIEW <ArrowUpRight size={20} />
                    </button>
                 </div>
              ))}
           </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default ThemeNeoBrutalism;