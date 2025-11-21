import React from 'react';
import { PortfolioData } from '../types';

interface Props {
  data: PortfolioData;
}

const ThemeNutrition: React.FC<Props> = ({ data }) => {
  return (
    <div className="min-h-screen bg-white text-black font-[Helvetica,Arial,sans-serif] p-4 flex items-center justify-center">
      <div className="border-2 border-black p-1 w-full max-w-md shadow-2xl bg-white">
        <div className="border border-black p-4">
          <h1 className="text-5xl font-black leading-none mb-1">Nutrition Facts</h1>
          <p className="text-lg font-normal border-b-[16px] border-black pb-2 mb-4">
            Serving Size: 1 Full Stack Engineer ({data.name})
          </p>
          
          <div className="flex justify-between items-baseline border-b border-black pb-2 mb-2">
            <div>
              <span className="font-bold text-lg">Amount Per Serving</span>
            </div>
            <div className="font-bold text-3xl">
              <span className="text-sm align-top font-normal">Calories</span> High
            </div>
          </div>

          <div className="text-sm font-bold border-b border-black pb-1 mb-1 text-right">% Daily Value*</div>
          
          <div className="border-b border-gray-400 pb-1 mb-1 flex justify-between">
             <span><span className="font-bold">Total Experience</span> 5 Years</span>
             <span className="font-bold">100%</span>
          </div>
          <div className="border-b border-gray-400 pb-1 mb-1 pl-4 flex justify-between">
             <span>Frontend (React/TS)</span>
             <span className="font-bold">85%</span>
          </div>
          <div className="border-b border-gray-400 pb-1 mb-1 pl-4 flex justify-between">
             <span>Backend (Node/Go)</span>
             <span className="font-bold">70%</span>
          </div>
          
          <div className="border-b border-gray-400 pb-1 mb-1 flex justify-between">
             <span><span className="font-bold">Caffeine Intake</span> 500mg</span>
             <span className="font-bold">200%</span>
          </div>

           <div className="border-b border-gray-400 pb-1 mb-1 flex justify-between">
             <span><span className="font-bold">Creativity</span></span>
             <span className="font-bold">MAX</span>
          </div>

          <div className="border-b-[10px] border-black pb-2 mb-4"></div>

          <div className="mb-4">
            <p className="font-bold mb-1">INGREDIENTS (BIO):</p>
            <p className="text-sm leading-tight">{data.bio}</p>
          </div>

          <div className="mb-4">
            <p className="font-bold mb-1">CONTAINS (PROJECTS):</p>
            <ul className="list-disc pl-4 text-sm space-y-1">
              {data.projects.map((p, i) => (
                <li key={i}>
                  <span className="font-bold">{p.title}</span> - {p.description}
                </li>
              ))}
            </ul>
          </div>

           <div className="border-t border-black pt-2 text-[10px] leading-tight">
             * Percent Daily Values are based on a 2,000 bug-fix diet. Your daily values may be higher or lower depending on your project requirements.
             <br/><br/>
             DISTRIBUTED BY: {data.contactEmail}
             <br/>
             QUOTE: "{data.quirkyQuote}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeNutrition;