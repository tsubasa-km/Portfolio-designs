import React from 'react';
import { PortfolioData } from '../types';
import { Skull } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeWanted: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#d4c5a3] p-4 flex items-center justify-center font-serif relative overflow-hidden">
      {/* Paper Texture Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>

      <div className="max-w-lg w-full bg-[#fdf3dd] p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative border-4 border-double border-[#5a4632] text-[#4a3b2a] rotate-1">
        {/* Nail */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#333] shadow-sm"></div>

        <div className="text-center space-y-4">
          <div className="text-5xl md:text-7xl font-black tracking-widest border-b-4 border-[#4a3b2a] pb-4 mb-6" style={{ fontFamily: 'Times New Roman, serif' }}>
            WANTED
          </div>
          
          <div className="flex justify-center gap-8 text-2xl font-bold uppercase tracking-widest mb-6">
            <span>Dead</span>
            <span className="text-sm flex items-center">OR</span>
            <span>Alive</span>
          </div>

          <div className="w-full aspect-square bg-neutral-800 mb-6 relative border-4 border-[#4a3b2a] p-2">
             <img src={`https://picsum.photos/seed/${data.name}western/400/400`} className="w-full h-full object-cover sepia contrast-125 brightness-90 grayscale" alt="Portrait" />
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#fdf3dd] px-4 py-1 border-2 border-[#4a3b2a] font-bold text-xl uppercase whitespace-nowrap transform -rotate-2">
                {data.name}
             </div>
          </div>

          <div className="text-lg font-bold mb-6 uppercase">
             The "{data.title}" Bandit
          </div>

          <div className="text-justify leading-relaxed mb-8 font-medium border-t-2 border-b-2 border-[#4a3b2a] py-4 border-dashed">
             <span className="font-bold text-xl mr-2">CRIMES:</span>
             {data.bio} Known to utilize dangerous tools such as {data.projects[0]?.tags.join(', ')}. 
             Approach with caution. Extremely capable of solving problems.
          </div>

          <div className="space-y-6 text-left">
             <h3 className="text-center text-2xl font-bold border-b-2 border-[#4a3b2a] inline-block px-8 mx-auto w-full">KNOWN HEISTS</h3>
             {data.projects.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                   <Skull size={24} className="shrink-0 mt-1" />
                   <div>
                      <div className="font-bold text-xl uppercase">{p.title}</div>
                      <div className="text-sm italic">{p.description}</div>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-12 pt-6 border-t-4 border-[#4a3b2a]">
             <div className="text-4xl font-black mb-2">REWARD</div>
             <div className="text-xl font-bold">$ 1,000,000 (Negotiable)</div>
             <div className="mt-4 text-sm font-bold uppercase">Contact Sheriff: {data.contactEmail}</div>
             <div className="text-xs mt-2">"{data.quirkyQuote}"</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeWanted;