import React from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

const ThemeSubway: React.FC<Props> = ({ data }) => {
  const colors = ['#EE352E', '#00933C', '#0039A6', '#FF6319', '#6CBE45', '#996633', '#A7A9AC'];

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900 font-sans overflow-x-hidden p-8">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Title / Header Sign */}
        <div className="bg-black text-white inline-block px-8 py-4 mb-12 rounded-full border-4 border-yellow-400 shadow-lg">
           <h1 className="text-4xl font-bold tracking-wider flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center text-2xl">M</span>
              METRO PORTFOLIO
           </h1>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-2xl relative overflow-hidden min-h-[600px]">
           {/* Grid Background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
           
           <div className="relative z-10 flex flex-col gap-16">
              
              {/* Central Hub (Bio) */}
              <div className="flex items-center gap-6 md:ml-20">
                 <div className="w-16 h-16 rounded-full bg-black border-8 border-white shadow-lg z-20 relative flex items-center justify-center text-white font-bold text-xl">
                    YOU
                 </div>
                 <div className="bg-black text-white p-4 rounded-xl max-w-lg shadow-lg relative arrow-left">
                    <h2 className="text-2xl font-bold mb-1">{data.name} <span className="text-sm font-normal text-gray-400">({data.title})</span></h2>
                    <p>{data.bio}</p>
                 </div>
              </div>

              {/* Lines & Stations */}
              <div className="relative pl-20 md:pl-40 py-10">
                 {/* Main Line SVG */}
                 <svg className="absolute top-0 left-8 h-full w-full pointer-events-none z-0" style={{ strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                    <path d={`M 20 0 V ${data.projects.length * 140 + 50}`} stroke={colors[0]} strokeWidth="12" fill="none" />
                    <path d={`M 20 40 C 20 40, 100 40, 120 80`} stroke={colors[1]} strokeWidth="8" fill="none" opacity="0.5" />
                 </svg>

                 <div className="flex flex-col gap-24">
                    {data.projects.map((project, idx) => (
                       <div key={idx} className="relative flex items-center gap-8 group">
                          {/* Station Node */}
                          <div className="absolute -left-[6.5rem] w-12 h-12 bg-white border-[6px] rounded-full z-10 transition-transform group-hover:scale-125 cursor-pointer" style={{ borderColor: colors[idx % colors.length] }}></div>
                          
                          {/* Station Content */}
                          <div className="bg-white border-2 p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 w-full max-w-2xl relative" style={{ borderColor: colors[idx % colors.length] }}>
                             <div className="absolute -left-3 top-1/2 w-4 h-4 bg-white rotate-45 border-l-2 border-b-2" style={{ borderColor: colors[idx % colors.length] }}></div>
                             <h3 className="text-2xl font-bold uppercase mb-2 flex items-center gap-3">
                                <span className="px-2 py-0.5 text-white rounded text-sm" style={{ backgroundColor: colors[idx % colors.length] }}>L{idx+1}</span>
                                {project.title}
                             </h3>
                             <p className="text-gray-600 mb-4">{project.description}</p>
                             <div className="flex flex-wrap gap-2">
                                {project.tags.map(t => (
                                   <span key={t} className="text-xs font-bold px-2 py-1 rounded-full bg-gray-100 text-gray-600">{t}</span>
                                ))}
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="mt-8 md:ml-20 flex gap-4 items-center">
                 <div className="h-4 w-full bg-gray-200 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-stripes animate-slide w-full"></div>
                 </div>
                 <div className="whitespace-nowrap font-bold text-gray-500">NEXT TRAIN: {data.contactEmail}</div>
              </div>
           </div>
        </div>
        
        <style>{`
          .bg-stripes {
            background-image: linear-gradient(45deg, rgba(0,0,0,.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,.1) 50%, rgba(0,0,0,.1) 75%, transparent 75%, transparent);
            background-size: 1rem 1rem;
          }
          .animate-slide {
             animation: slide 1s linear infinite;
          }
          @keyframes slide {
             from { background-position: 0 0; }
             to { background-position: 1rem 0; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ThemeSubway;