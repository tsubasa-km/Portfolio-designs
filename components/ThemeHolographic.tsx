import React from 'react';
import { PortfolioData } from '../types';
import { Sparkles, Aperture, Globe } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeHolographic: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-black text-white font-['Zen_Kaku_Gothic_New'] overflow-hidden relative">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-pulse delay-700"></div>
         <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-teal-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <header className="flex justify-between items-center mb-20 backdrop-blur-sm bg-white/5 p-4 rounded-full border border-white/10">
           <div className="flex items-center gap-2">
              <Aperture className="text-teal-400 animate-spin-slow" />
              <span className="tracking-widest uppercase text-sm font-bold text-gray-400">System.Holo.Ver.3.0</span>
           </div>
           <nav className="flex gap-6 text-sm font-light">
              <a href="#" className="hover:text-teal-400 transition-colors">Neural Link</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Memory Bank</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Comms</a>
           </nav>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <div className="relative">
                 <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-teal-200 via-white to-purple-200">
                    {data.name}
                 </h1>
                 <div className="absolute -top-10 -left-10 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center">
                    <Sparkles size={16} className="text-white/50" />
                 </div>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500">
                 <h2 className="text-2xl text-teal-300 font-bold mb-4 flex items-center gap-2">
                    <Globe size={20} /> {data.title}
                 </h2>
                 <p className="text-lg text-gray-300 leading-relaxed font-light">
                    {data.bio}
                 </p>
                 <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400 italic">
                    Output: "{data.quirkyQuote}"
                 </div>
              </div>

              <button className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full">
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity"></div>
                 <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
                 <span className="relative text-white font-bold tracking-widest uppercase text-sm">Initiate Contact</span>
              </button>
           </div>

           <div className="relative h-[600px] w-full overflow-y-auto pr-4 scrollbar-hide perspective-container">
              <div className="space-y-6">
                 {data.projects.map((project, idx) => (
                    <div key={idx} className="group relative bg-black/40 border border-white/10 rounded-xl overflow-hidden hover:border-teal-500/50 transition-colors duration-500">
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none"></div>
                       <img src={`https://picsum.photos/seed/${project.title}holo/600/300`} className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                       <div className="relative z-20 p-6 -mt-12">
                          <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-teal-300 transition-colors">{project.title}</h3>
                          <p className="text-gray-400 text-sm mb-4 backdrop-blur-sm">{project.description}</p>
                          <div className="flex gap-2">
                             {project.tags.map(tag => (
                                <span key={tag} className="text-xs border border-white/20 px-2 py-1 rounded-full text-gray-300">{tag}</span>
                             ))}
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </main>
      </div>

      <style>{`
        .perspective-container {
           perspective: 1000px;
        }
        .animate-spin-slow {
           animation: spin 10s linear infinite;
        }
        /* Custom Scrollbar for this specific component */
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ThemeHolographic;