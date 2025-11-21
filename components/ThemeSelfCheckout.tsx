
import React, { useState, useEffect } from 'react';
import { PortfolioData, Project } from '../types';
import { ScanBarcode, ShoppingBag, ShoppingBasket, CreditCard, User, ChevronRight, Plus, RefreshCw } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

const ThemeSelfCheckout: React.FC<Props> = ({ data }) => {
  const [unscannedItems, setUnscannedItems] = useState<Project[]>([]);
  const [scannedItems, setScannedItems] = useState<Project[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState<Project | null>(null);
  
  // Initial load
  useEffect(() => {
    setUnscannedItems([...data.projects]);
  }, [data]);

  const handleScan = (project: Project) => {
    if (isScanning) return;

    setIsScanning(true);
    setScannedProduct(project);

    // Remove from unscanned immediately
    setUnscannedItems(prev => prev.filter(p => p !== project));

    // 1.5s delay for "scanning" animation
    setTimeout(() => {
      setScannedItems(prev => [...prev, project]);
      setScannedProduct(null);
      setIsScanning(false);
    }, 1500);
  };

  const reset = () => {
    setUnscannedItems([...data.projects]);
    setScannedItems([]);
    setIsScanning(false);
    setScannedProduct(null);
  };

  const totalPrice = scannedItems.length * 2980; // Fake price

  return (
    <div className="min-h-screen bg-[#f0f0f5] text-gray-800 font-sans flex flex-col overflow-hidden">
      
      {/* Top Status Bar */}
      <header className="bg-teal-700 text-white p-4 flex justify-between items-center shadow-md z-20">
        <div className="flex items-center gap-2">
           <ScanBarcode size={28} />
           <span className="text-xl font-bold tracking-wider">SELF-REG PORTFOLIO</span>
        </div>
        <div className="text-sm font-mono">System: ONLINE | Operator: {data.name}</div>
      </header>

      <div className="flex-1 flex flex-col md:flex-row p-4 gap-4 overflow-hidden">
        
        {/* LEFT PANEL: The Touch Screen Display */}
        <div className="flex-1 flex flex-col bg-white border-8 border-gray-300 rounded-xl shadow-xl overflow-hidden relative">
           {/* Screen Header */}
           <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-bold text-gray-600">TRANSACTION LIST</h2>
              <div className="text-xs text-gray-500">Reg #004</div>
           </div>

           {/* Scanned List */}
           <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono">
              {scannedItems.length === 0 && !isScanning && (
                 <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4 opacity-50">
                    <ScanBarcode size={64} />
                    <p className="text-xl">Please scan an item to begin</p>
                 </div>
              )}

              {scannedItems.map((item, idx) => (
                 <div key={idx} className="flex justify-between items-center p-2 border-b border-dashed border-gray-300 animate-in slide-in-from-left duration-300">
                    <div className="flex-1">
                       <div className="font-bold uppercase truncate">{item.title}</div>
                       <div className="text-xs text-gray-500 truncate">{item.description}</div>
                    </div>
                    <div className="font-bold text-lg pl-4">¥2,980</div>
                 </div>
              ))}
              
              {/* Pending Item (Ghost) */}
              {scannedProduct && (
                 <div className="flex justify-between items-center p-2 bg-yellow-50 border border-yellow-200 animate-pulse">
                    <div className="flex-1">
                       <div className="font-bold uppercase text-gray-400">SCANNING...</div>
                    </div>
                 </div>
              )}
           </div>

           {/* Total Area */}
           <div className="bg-teal-50 p-6 border-t-2 border-teal-100">
              <div className="flex justify-between items-end mb-4">
                 <div className="text-gray-600 font-bold">TOTAL</div>
                 <div className="text-4xl font-black text-teal-800 font-mono">
                    ¥{totalPrice.toLocaleString()}
                 </div>
              </div>
              
              {scannedItems.length === data.projects.length ? (
                  <a href={`mailto:${data.contactEmail}`} className="block w-full bg-teal-600 text-white text-center py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-teal-500 active:translate-y-1 transition-all flex items-center justify-center gap-3 animate-bounce">
                     <CreditCard /> PAY NOW (CONTACT)
                  </a>
              ) : (
                 <div className="w-full bg-gray-300 text-gray-500 text-center py-4 rounded-lg font-bold text-xl flex items-center justify-center gap-3 cursor-not-allowed">
                    SCAN ALL ITEMS
                 </div>
              )}
           </div>
        </div>


        {/* RIGHT PANEL: The Physical Interaction Zone */}
        <div className="flex-1 flex flex-col gap-4 relative">
           
           {/* SCANNER ZONE (Middle) */}
           <div className="flex-1 bg-gray-800 rounded-xl relative overflow-hidden flex items-center justify-center shadow-inner group border-b-8 border-gray-900">
              {/* Laser Effect */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(255,0,0,1)] z-10 opacity-50"></div>
              <div className="absolute top-0 left-1/2 w-1 h-full bg-red-500 shadow-[0_0_20px_rgba(255,0,0,1)] z-10 opacity-50"></div>
              
              <div className="text-gray-600 font-mono text-sm absolute bottom-2 right-4">SCANNER READY</div>

              {/* Current Scanning Product Animation */}
              {scannedProduct && (
                 <div className="absolute z-20 bg-white p-4 rounded shadow-2xl w-64 animate-[scanMove_1.5s_ease-in-out_forwards] flex flex-col items-center border border-gray-300">
                    <div className="h-12 w-full bg-black mb-2 flex justify-between px-1">
                       {[...Array(20)].map((_, i) => <div key={i} className="h-full bg-white" style={{width: Math.random() * 4 + 1 + 'px'}}></div>)}
                    </div>
                    <div className="font-bold text-xl text-center">{scannedProduct.title}</div>
                    <div className="text-xs text-gray-500">{scannedProduct.tags[0]}</div>
                 </div>
              )}
              
              {!scannedProduct && (
                 <div className="text-white/20 font-bold text-2xl animate-pulse">PLACE ITEM HERE</div>
              )}
           </div>

           {/* BOTTOM ROW: BASKET & BAG */}
           <div className="h-64 flex gap-4">
              
              {/* BASKET (Unscanned Items) */}
              <div className="flex-1 bg-red-100 border-4 border-red-300 rounded-xl p-4 overflow-y-auto relative shadow-inner">
                 <div className="absolute top-0 right-0 bg-red-300 text-red-800 px-3 py-1 rounded-bl-xl font-bold text-xs flex gap-1 items-center">
                    <ShoppingBasket size={14} /> BASKET
                 </div>
                 
                 <div className="mt-6 grid grid-cols-2 gap-2">
                    {unscannedItems.map((item, idx) => (
                       <button 
                          key={idx}
                          onClick={() => handleScan(item)}
                          disabled={isScanning}
                          className="bg-white p-3 rounded shadow-sm border border-gray-200 hover:shadow-md hover:-translate-y-1 active:translate-y-0 transition-all text-left flex flex-col h-full disabled:opacity-50 disabled:cursor-not-allowed"
                       >
                          <div className="h-8 w-full bg-gray-200 mb-2 relative overflow-hidden">
                             <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-[10px] font-mono">BARCODE</div>
                             <div className="absolute bottom-0 left-0 right-0 h-2 bg-black flex justify-between px-1">
                                {[...Array(10)].map((_, i) => <div key={i} className="h-full bg-white w-[2px]"></div>)}
                             </div>
                          </div>
                          <div className="font-bold text-sm leading-tight">{item.title}</div>
                          <div className="text-[10px] text-gray-500 mt-1">{item.tags[0]}</div>
                       </button>
                    ))}
                    {unscannedItems.length === 0 && scannedItems.length > 0 && (
                       <div className="col-span-2 text-center text-gray-400 text-sm py-8">
                          Basket Empty
                       </div>
                    )}
                     {unscannedItems.length === 0 && scannedItems.length === 0 && (
                       <div className="col-span-2 flex items-center justify-center h-full">
                          <button onClick={reset} className="flex items-center gap-2 text-teal-600 font-bold"><RefreshCw size={16}/> RELOAD</button>
                       </div>
                    )}
                 </div>
              </div>

              {/* ARROW */}
              <div className="flex items-center justify-center text-gray-400">
                 <ChevronRight size={32} className={isScanning ? "text-teal-500 animate-pulse" : ""} />
              </div>

              {/* BAG (Scanned Items) */}
              <div className="flex-1 bg-teal-100 border-4 border-teal-300 rounded-xl p-4 relative shadow-inner overflow-hidden">
                 <div className="absolute top-0 left-0 bg-teal-300 text-teal-900 px-3 py-1 rounded-br-xl font-bold text-xs flex gap-1 items-center z-10">
                    <ShoppingBag size={14} /> BAG
                 </div>
                 
                 <div className="mt-6 w-full h-full relative flex items-end justify-center">
                    {/* Bag Graphic */}
                    <div className="w-32 h-32 bg-white/50 border-4 border-white rounded-b-xl relative flex items-end justify-center pb-2 overflow-hidden">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-10 border-4 border-white rounded-t-full"></div>
                        <div className="text-teal-800/20 font-bold text-4xl">BAG</div>
                        
                        {/* Stacked Items Visualization */}
                        {scannedItems.map((_, idx) => (
                           <div 
                              key={idx} 
                              className="absolute w-20 h-4 bg-teal-600 rounded border border-white shadow-sm transition-all duration-500"
                              style={{ 
                                 bottom: `${idx * 8 + 10}px`, 
                                 transform: `rotate(${Math.random() * 10 - 5}deg) translateX(${Math.random() * 10 - 5}px)`,
                                 zIndex: idx 
                              }}
                           ></div>
                        ))}
                    </div>
                 </div>
              </div>

           </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scanMove {
          0% { transform: scale(0.5) translate(100%, 200%) rotate(45deg); opacity: 0; }
          20% { transform: scale(1) translate(0, 0) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.1) translate(0, 0) rotate(0deg); }
          80% { transform: scale(1) translate(0, 0) rotate(0deg); opacity: 1; }
          100% { transform: scale(0.5) translate(120%, 200%) rotate(-45deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ThemeSelfCheckout;
