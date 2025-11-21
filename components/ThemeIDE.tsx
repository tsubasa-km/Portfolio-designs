import React from 'react';
import { PortfolioData } from '../types';
import { FileCode, Search, GitBranch, Settings, Menu, X, Play } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeIDE: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono flex flex-col md:flex-row overflow-hidden">
      {/* Activity Bar */}
      <div className="w-12 bg-[#333333] flex flex-col items-center py-4 gap-6 shrink-0 border-r border-[#1e1e1e]">
         <FileCode size={24} className="text-white opacity-100" />
         <Search size={24} className="opacity-40 hover:opacity-100 transition-opacity" />
         <GitBranch size={24} className="opacity-40 hover:opacity-100 transition-opacity" />
         <div className="mt-auto">
            <Settings size={24} className="opacity-40 hover:opacity-100 transition-opacity" />
         </div>
      </div>

      {/* Side Bar */}
      <div className="w-64 bg-[#252526] hidden md:flex flex-col border-r border-[#1e1e1e]">
         <div className="px-4 py-2 text-xs uppercase font-bold text-[#bbbbbb] flex justify-between items-center">
            Explorer <Menu size={14} />
         </div>
         <div className="p-2">
            <div className="font-bold text-sm text-[#bbbbbb] mb-1 flex items-center gap-1">
               <span className="text-xs">▼</span> PORTFOLIO
            </div>
            <div className="pl-4 space-y-1 text-sm">
               <div className="text-[#569cd6] flex items-center gap-2 bg-[#37373d] -mx-4 px-4 py-1 cursor-pointer">
                  <span className="text-[#e8c362]">TS</span> profile.ts
               </div>
               <div className="text-[#bbbbbb] flex items-center gap-2 px-2 hover:bg-[#2a2d2e] cursor-pointer">
                  <span className="text-[#e8c362]">TS</span> projects.ts
               </div>
               <div className="text-[#bbbbbb] flex items-center gap-2 px-2 hover:bg-[#2a2d2e] cursor-pointer">
                  <span className="text-orange-400">JSON</span> contact.json
               </div>
               <div className="text-[#bbbbbb] flex items-center gap-2 px-2 hover:bg-[#2a2d2e] cursor-pointer">
                  <span className="text-blue-400">CSS</span> styles.css
               </div>
            </div>
         </div>
      </div>

      {/* Main Editor */}
      <div className="flex-1 flex flex-col min-w-0">
         {/* Tab Bar */}
         <div className="bg-[#2d2d2d] flex text-sm overflow-x-auto scrollbar-hide">
            <div className="bg-[#1e1e1e] text-[#ffffff] px-4 py-2 flex items-center gap-2 border-t-2 border-[#007acc] min-w-fit">
               <span className="text-[#e8c362]">TS</span> profile.ts <X size={14} className="hover:bg-gray-700 rounded" />
            </div>
            <div className="text-[#969696] px-4 py-2 flex items-center gap-2 border-r border-[#1e1e1e] min-w-fit hover:bg-[#2d2d2d] cursor-pointer">
               <span className="text-orange-400">JSON</span> package.json
            </div>
         </div>

         {/* Breadcrumbs */}
         <div className="bg-[#1e1e1e] px-4 py-1 text-xs text-[#969696] flex items-center gap-1 border-b border-[#2d2d2d]">
            src &gt; pages &gt; profile.ts
         </div>

         {/* Code Area */}
         <div className="flex-1 overflow-auto p-4 relative bg-[#1e1e1e]">
            <div className="absolute top-4 right-4 flex gap-2">
               <Play size={18} className="text-green-500 cursor-pointer hover:text-green-400" />
            </div>
            
            <div className="flex text-sm md:text-base leading-relaxed font-['Consolas','Monaco','Courier_New',monospace]">
               {/* Line Numbers */}
               <div className="text-[#858585] text-right pr-4 select-none hidden sm:block">
                  {[...Array(30)].map((_, i) => <div key={i}>{i + 1}</div>)}
               </div>

               {/* Code */}
               <div className="flex-1">
                  <div><span className="text-[#c586c0]">import</span> <span className="text-[#9cdcfe]">{`{ Engineer }`}</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'./human'</span>;</div>
                  <br/>
                  <div><span className="text-[#c586c0]">const</span> <span className="text-[#4fc1ff]">me</span>: <span className="text-[#4ec9b0]">Engineer</span> = <span className="text-[#c586c0]">new</span> <span className="text-[#4ec9b0]">Engineer</span>({`{`}</div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">"{data.name}"</span>,</div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">title</span>: <span className="text-[#ce9178]">"{data.title}"</span>,</div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">bio</span>: <span className="text-[#ce9178]">"{data.bio}"</span>,</div>
                  <div className="pl-4"><span className="text-[#9cdcfe]">status</span>: <span className="text-[#ce9178]">"{data.quirkyQuote}"</span>,</div>
                  <div>{`});`}</div>
                  <br/>
                  <div><span className="text-[#6a9955]">// TODO: Refactor life balance</span></div>
                  <div><span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">const</span> <span className="text-[#dcdcaa]">getProjects</span> = () <span className="text-[#c586c0]">=</span>&gt; [</div>
                  
                  {data.projects.map((p, i) => (
                     <div key={i} className="pl-4 hover:bg-[#262626] rounded cursor-pointer group">
                        <div>{`{`}</div>
                        <div className="pl-4"><span className="text-[#9cdcfe]">name</span>: <span className="text-[#ce9178]">"{p.title}"</span>,</div>
                        <div className="pl-4"><span className="text-[#9cdcfe]">desc</span>: <span className="text-[#ce9178]">"{p.description.substring(0,40)}..."</span>,</div>
                        <div className="pl-4"><span className="text-[#9cdcfe]">stack</span>: [<span className="text-[#ce9178]">{p.tags.map(t=>`'${t}'`).join(', ')}</span>]</div>
                        <div>{`},`} <span className="text-[#6a9955] opacity-0 group-hover:opacity-100 transition-opacity">// Click to debug</span></div>
                     </div>
                  ))}
                  
                  <div>];</div>
                  <br/>
                  <div><span className="text-[#dcdcaa]">contact</span>(<span className="text-[#ce9178]">"{data.contactEmail}"</span>);</div>
               </div>
            </div>
         </div>

         {/* Status Bar */}
         <div className="bg-[#007acc] text-white text-xs px-2 py-1 flex justify-between items-center">
            <div className="flex gap-4">
               <span>master*</span>
               <span>0 errors, 0 warnings</span>
            </div>
            <div className="flex gap-4">
               <span>Ln 12, Col 40</span>
               <span>UTF-8</span>
               <span>TypeScript</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ThemeIDE;