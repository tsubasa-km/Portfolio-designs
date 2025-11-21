import React from 'react';
import { PortfolioData } from '../types';
import { ReceiptText } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeReceipt: React.FC<Props> = ({ data }) => {
  const today = new Date();
  const dateStr = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;
  const timeStr = `${String(today.getHours()).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-[#e0e0e0] py-12 px-4 font-['VT323'] text-gray-900 flex justify-center items-start overflow-y-auto">
      <div className="bg-white w-full max-w-md shadow-2xl relative filter drop-shadow-xl transform rotate-1">
        
        {/* Jagged Top */}
        <div className="absolute -top-3 left-0 right-0 h-4 bg-white" style={{ clipPath: 'polygon(0% 100%, 2% 0%, 4% 100%, 6% 0%, 8% 100%, 10% 0%, 12% 100%, 14% 0%, 16% 100%, 18% 0%, 20% 100%, 22% 0%, 24% 100%, 26% 0%, 28% 100%, 30% 0%, 32% 100%, 34% 0%, 36% 100%, 38% 0%, 40% 100%, 42% 0%, 44% 100%, 46% 0%, 48% 100%, 50% 0%, 52% 100%, 54% 0%, 56% 100%, 58% 0%, 60% 100%, 62% 0%, 64% 100%, 66% 0%, 68% 100%, 70% 0%, 72% 100%, 74% 0%, 76% 100%, 78% 0%, 80% 100%, 82% 0%, 84% 100%, 86% 0%, 88% 100%, 90% 0%, 92% 100%, 94% 0%, 96% 100%, 98% 0%, 100% 100%)' }}></div>

        <div className="p-6 pb-12 flex flex-col gap-4">
           <div className="text-center border-b-2 border-dashed border-gray-300 pb-4">
              <h1 className="text-4xl font-bold tracking-widest mb-1 uppercase">PORTFOLIO</h1>
              <div className="flex justify-center items-center gap-2 text-xl text-gray-600">
                 <ReceiptText size={20} />
                 <span>STORE #{Math.floor(Math.random() * 9000) + 1000}</span>
              </div>
              <div className="mt-2 text-lg flex justify-between px-4 text-gray-500">
                 <span>DATE: {dateStr}</span>
                 <span>TIME: {timeStr}</span>
              </div>
           </div>

           <div className="py-2 text-center">
              <h2 className="text-3xl font-bold uppercase">{data.name}</h2>
              <p className="text-xl text-gray-600">{data.title}</p>
           </div>

           <div className="border-t-2 border-b-2 border-dashed border-gray-300 py-4">
               <div className="mb-2 font-bold text-xl">DESCRIPTION:</div>
               <p className="text-lg leading-tight uppercase text-justify">{data.bio}</p>
               <div className="mt-4 text-lg italic text-center">"{data.quirkyQuote}"</div>
           </div>

           <div>
              <div className="flex justify-between font-bold text-xl border-b border-black mb-2 pb-1">
                 <span>ITEM (PROJECT)</span>
                 <span>QTY</span>
              </div>
              <div className="flex flex-col gap-6">
                 {data.projects.map((project, idx) => (
                    <div key={idx} className="flex flex-col">
                       <div className="flex justify-between items-baseline font-bold text-xl">
                          <span className="uppercase">{project.title}</span>
                          <span>1</span>
                       </div>
                       <p className="text-lg text-gray-600 leading-none pl-2 my-1">{project.description.substring(0, 100)}</p>
                       <div className="text-sm text-gray-500 pl-2 flex flex-wrap gap-2">
                          {project.tags.map(t => `#${t}`).join(' ')}
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           <div className="border-t-2 border-dashed border-gray-800 pt-4 mt-4 space-y-2">
              <div className="flex justify-between text-2xl font-bold">
                 <span>SUBTOTAL</span>
                 <span>$$$</span>
              </div>
              <div className="flex justify-between text-2xl font-bold">
                 <span>TAX</span>
                 <span>0.00</span>
              </div>
              <div className="flex justify-between text-4xl font-bold mt-2">
                 <span>TOTAL</span>
                 <span>HIRE ME</span>
              </div>
           </div>

           <div className="text-center mt-8 space-y-2">
              <p className="text-xl font-bold">{data.contactEmail}</p>
              <p className="text-sm text-gray-500 uppercase">Thank you for visiting.<br/>Please come again.</p>
           </div>

           {/* Fake Barcode */}
           <div className="h-16 bg-black w-full mt-4 flex justify-between px-2 overflow-hidden">
              {[...Array(40)].map((_, i) => (
                 <div key={i} className="h-full bg-white" style={{ width: Math.random() * 6 + 2 + 'px' }}></div>
              ))}
           </div>
           <div className="text-center text-sm tracking-[0.5em] mt-1">{Math.random().toString().slice(2, 14)}</div>
        </div>

        {/* Jagged Bottom */}
        <div className="absolute -bottom-3 left-0 right-0 h-4 bg-white" style={{ clipPath: 'polygon(0% 0%, 2% 100%, 4% 0%, 6% 100%, 8% 0%, 10% 100%, 12% 0%, 14% 100%, 16% 0%, 18% 100%, 20% 0%, 22% 100%, 24% 0%, 26% 100%, 28% 0%, 30% 100%, 32% 0%, 34% 100%, 36% 0%, 38% 100%, 40% 0%, 42% 100%, 44% 0%, 46% 100%, 48% 0%, 50% 100%, 52% 0%, 54% 100%, 56% 0%, 58% 100%, 60% 0%, 62% 100%, 64% 0%, 66% 100%, 68% 0%, 70% 100%, 72% 0%, 74% 100%, 76% 0%, 78% 100%, 80% 0%, 82% 100%, 84% 0%, 86% 100%, 88% 0%, 90% 100%, 92% 0%, 94% 100%, 96% 0%, 98% 100%, 100% 0%)' }}></div>

      </div>
    </div>
  );
};

export default ThemeReceipt;