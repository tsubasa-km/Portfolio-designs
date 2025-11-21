import React, { useState } from 'react';
import { PortfolioData } from '../types';
import { X, Minus, Square, Folder, Mail, Save } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const WindowFrame: React.FC<{ title: string; children: React.ReactNode; className?: string; onClose?: () => void }> = ({ title, children, className = "", onClose }) => (
  <div className={`bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] ${className}`}>
    <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center mb-2">
      <span className="font-bold font-['VT323'] tracking-widest text-lg">{title}</span>
      <div className="flex gap-1">
        <button className="bg-[#c0c0c0] w-5 h-5 flex items-center justify-center border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">
          <Minus size={12} className="text-black" />
        </button>
        <button className="bg-[#c0c0c0] w-5 h-5 flex items-center justify-center border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">
          <Square size={10} className="text-black" />
        </button>
        <button onClick={onClose} className="bg-[#c0c0c0] w-5 h-5 flex items-center justify-center border border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white">
          <X size={12} className="text-black" />
        </button>
      </div>
    </div>
    <div className="bg-white text-black p-4 font-['VT323'] text-xl">
      {children}
    </div>
  </div>
);

const ThemeRetroOS: React.FC<Props> = ({ data }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showBio, setShowBio] = useState(true);

  return (
    <div className="min-h-screen bg-[#008080] p-4 font-['VT323'] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-6 text-white text-center w-20">
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#000080] hover:bg-opacity-50 p-2 border border-transparent hover:border-dotted hover:border-white">
          <Folder size={32} className="text-yellow-300 mb-1" />
          <span className="bg-[#008080] px-1 text-lg leading-none">Projects</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#000080] hover:bg-opacity-50 p-2 border border-transparent hover:border-dotted hover:border-white">
          <Mail size={32} className="text-white mb-1" />
          <span className="bg-[#008080] px-1 text-lg leading-none">Mail</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-[#000080] hover:bg-opacity-50 p-2 border border-transparent hover:border-dotted hover:border-white">
          <Save size={32} className="text-blue-300 mb-1" />
          <span className="bg-[#008080] px-1 text-lg leading-none">Save.exe</span>
        </div>
      </div>

      {/* Main Profile Window */}
      {showBio && (
        <WindowFrame 
          title={`User: ${data.name}`} 
          className="absolute top-10 left-1/4 max-w-lg w-full z-10 animate-[bounce_0.5s_ease-out_1]"
          onClose={() => setShowBio(false)}
        >
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 border-2 border-l-black border-t-black border-r-white border-b-white p-2 bg-gray-100">
               <img src={`https://picsum.photos/seed/${data.name}/150/150`} alt="Profile" className="w-24 h-24 object-cover grayscale contrast-125 border border-black" />
               <div>
                  <h1 className="text-3xl font-bold uppercase tracking-widest">{data.name}</h1>
                  <h2 className="text-xl text-blue-800 italic mb-2">{data.title}</h2>
                  <p className="text-lg leading-tight">{data.bio}</p>
               </div>
            </div>
            <div className="bg-yellow-100 border border-black p-2 text-center shadow-inner">
               "{data.quirkyQuote}"
            </div>
            <div className="flex justify-end gap-2 mt-2">
                <button className="px-4 py-1 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border-2 active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold">OK</button>
            </div>
          </div>
        </WindowFrame>
      )}

      {/* Projects Window */}
      <WindowFrame title="C:\PROJECTS" className="absolute top-60 right-10 max-w-2xl w-full z-0">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((project, idx) => (
               <div key={idx} className="border-2 border-l-black border-t-black border-r-white border-b-white p-2 bg-white hover:bg-blue-50 cursor-pointer group">
                  <div className="h-6 bg-gray-300 mb-2 border border-gray-400 group-hover:bg-[#000080] transition-colors"></div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-base leading-none text-gray-600 mb-2">{project.description.substring(0, 50)}...</p>
                  <div className="flex flex-wrap gap-1">
                     {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-gray-200 text-xs px-1 border border-gray-400">{tag}</span>
                     ))}
                  </div>
               </div>
            ))}
         </div>
         <div className="mt-2 text-sm text-gray-500">
            {data.projects.length} objects(s) selected
         </div>
      </WindowFrame>

      {/* Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#c0c0c0] border-t-2 border-white flex items-center px-1 py-1 gap-2 z-50">
         <button className="h-full px-4 flex items-center gap-2 font-bold bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white shadow-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Windows_logo_and_wordmark_-_1995-2001.svg/1200px-Windows_logo_and_wordmark_-_1995-2001.svg.png" className="h-4 w-auto" alt="win" />
            Start
         </button>
         <div className="h-full border border-l-black border-t-black border-r-white border-b-white flex-1 mx-1 bg-gray-200 inset-shadow px-2 flex items-center">
            {data.contactEmail}
         </div>
         <div className="h-full px-3 border border-l-black border-t-black border-r-white border-b-white bg-gray-200 flex items-center text-sm">
            {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
         </div>
      </div>
    </div>
  );
};

export default ThemeRetroOS;