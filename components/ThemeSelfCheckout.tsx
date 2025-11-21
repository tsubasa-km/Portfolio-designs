
import React, { useState, useEffect, useRef } from 'react';
import { PortfolioData, Project } from '../types';
import { ShoppingBasket, ShoppingBag, CreditCard, RefreshCw, HelpCircle, Languages, Volume2 } from 'lucide-react';

interface Props {
  data: PortfolioData;
}

// Helper to generate consistent random prices for projects
const getPrice = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return (Math.abs(hash) % 90 + 10) * 100 + 80; // e.g., 2980
};

const ThemeSelfCheckout: React.FC<Props> = ({ data }) => {
  const [unscanned, setUnscanned] = useState<Project[]>([]);
  const [scanned, setScanned] = useState<Project[]>([]);
  const [currentScan, setCurrentScan] = useState<{ item: Project; state: 'moving-to-scanner' | 'scanning' | 'moving-to-bag' } | null>(null);
  const [uiState, setUiState] = useState<'WELCOME' | 'SCANNING' | 'PAYMENT' | 'THANKS'>('WELCOME');
  const [total, setTotal] = useState(0);

  // Audio refs for sound effects (using browser synthesis or simple beep logic conceptually)
  const beepRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setUnscanned(data.projects);
    // Preload a beep sound if possible, or just simulate visual feedback
  }, [data]);

  const handleStart = () => {
    setUiState('SCANNING');
  };

  const handleScan = (project: Project) => {
    if (currentScan) return; // Prevent double scanning

    // 1. Remove from basket
    setUnscanned((prev) => prev.filter((p) => p !== project));

    // 2. Start Animation Sequence
    setCurrentScan({ item: project, state: 'moving-to-scanner' });

    // Sequence
    setTimeout(() => {
      // Arrived at scanner
      setCurrentScan({ item: project, state: 'scanning' });
      
      // Play Beep (Visual feedback handled in render)
      
      // Update Logic
      setTimeout(() => {
        // Add to list visually on screen
        setScanned((prev) => [...prev, project]);
        setTotal((prev) => prev + getPrice(project.title));

        // Move to bag
        setCurrentScan({ item: project, state: 'moving-to-bag' });

        setTimeout(() => {
          // Finish
          setCurrentScan(null);
        }, 600); // Time to move to bag
      }, 800); // Scanning time
    }, 600); // Time to move to scanner
  };

  const handlePayment = () => {
    setUiState('THANKS');
  };

  const handleReset = () => {
    setUnscanned(data.projects);
    setScanned([]);
    setTotal(0);
    setUiState('WELCOME');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-end relative overflow-hidden font-sans select-none">
      
      {/* Background Store Ambience */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #cccccc 100%)',
             backgroundSize: '20px 20px'
           }}>
         {/* Simple tiled floor pattern */}
         <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd), linear-gradient(45deg, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%, #ddd)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
      </div>

      {/* === THE MACHINE === */}
      <div className="relative z-10 w-full max-w-md md:max-w-2xl lg:max-w-3xl flex flex-col items-center h-[90vh]">
        
        {/* Top Lamp / Sign */}
        <div className="bg-[#d12e68] text-white px-6 py-2 rounded-t-lg shadow-lg border-b-4 border-[#a01d4a] flex flex-col items-center mb-[-10px] z-20 animate-pulse relative">
          <div className="text-3xl font-bold tracking-wider">現金OK</div>
          <div className="text-sm font-bold bg-white text-[#d12e68] px-2 rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 -right-4 shadow border-2 border-[#d12e68]">3</div>
        </div>

        {/* Main Body (Screen Housing) */}
        <div className="w-full bg-[#fdfcf8] rounded-t-3xl shadow-2xl border-[16px] border-[#e8e6dc] p-4 pb-0 flex flex-col relative overflow-visible h-full">
            
            {/* SCREEN BEZEL */}
            <div className="bg-black p-4 rounded-t-xl rounded-b-lg shadow-inner border-b-8 border-gray-800 relative mb-4 h-[60%] md:h-[65%] flex flex-col">
               
               {/* === TOUCH SCREEN UI === */}
               <div className="bg-white w-full h-full rounded flex flex-col overflow-hidden relative">
                  
                  {/* UI Header */}
                  <div className="bg-[#e91e63] text-white p-3 flex justify-between items-center shrink-0 shadow-md z-10">
                     <div className="font-bold text-lg tracking-wide flex items-center gap-2">
                        <span className="bg-white text-[#e91e63] w-6 h-6 rounded-full flex items-center justify-center text-sm">i</span>
                        {uiState === 'WELCOME' && "いらっしゃいませ"}
                        {uiState === 'SCANNING' && "商品をスキャンしてください"}
                        {uiState === 'PAYMENT' && "お支払い方法を選択"}
                        {uiState === 'THANKS' && "ありがとうございました"}
                     </div>
                     <div className="text-xs bg-[#ad1457] px-3 py-1 rounded-full font-bold">日本語</div>
                  </div>

                  {/* UI Content */}
                  <div className="flex-1 flex bg-gray-50 relative overflow-hidden">
                     
                     {uiState === 'WELCOME' && (
                        <div className="absolute inset-0 z-20 bg-white/90 flex flex-col items-center justify-center text-center p-8">
                           <h1 className="text-4xl md:text-5xl font-bold text-[#e91e63] mb-4">Portfolio Self-Regi</h1>
                           <p className="text-gray-600 mb-8 text-lg">Please touch the button to start.</p>
                           <button 
                              onClick={handleStart}
                              className="bg-[#e91e63] text-white text-2xl font-bold py-6 px-12 rounded-full shadow-lg hover:bg-[#c2185b] active:scale-95 transition-transform animate-bounce"
                           >
                              スタート (Start)
                           </button>
                        </div>
                     )}

                     {uiState === 'THANKS' && (
                        <div className="absolute inset-0 z-20 bg-white flex flex-col items-center justify-center text-center p-8">
                           <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                              <CreditCard size={48} />
                           </div>
                           <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank You!</h1>
                           <p className="text-gray-600 mb-8">Please contact {data.contactEmail}</p>
                           <button 
                              onClick={handleReset}
                              className="bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-full hover:bg-gray-300"
                           >
                              最初に戻る
                           </button>
                        </div>
                     )}

                     {/* Left Panel: Receipt List */}
                     <div className="w-[45%] bg-white border-r border-gray-200 flex flex-col">
                        <div className="bg-[#f5f5f5] p-2 text-xs text-gray-500 font-bold border-b border-gray-200 flex justify-between">
                           <span>商品名 (Item)</span>
                           <span>点数 {scanned.length}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-2 space-y-2">
                           {scanned.length === 0 && uiState === 'SCANNING' && (
                              <div className="text-center text-gray-400 mt-10 text-sm">
                                 スキャンした商品が<br/>ここに表示されます
                              </div>
                           )}
                           {scanned.map((item, i) => (
                              <div key={i} className="flex justify-between items-baseline text-sm border-b border-dotted border-gray-300 pb-1 animate-in slide-in-from-right duration-300">
                                 <div className="truncate pr-2 font-bold text-gray-700">{item.title}</div>
                                 <div className="whitespace-nowrap">¥{getPrice(item.title).toLocaleString()}</div>
                              </div>
                           ))}
                           {/* Scrolling anchor */}
                           <div className="h-0"></div>
                        </div>
                     </div>

                     {/* Right Panel: Interaction & Total */}
                     <div className="w-[55%] flex flex-col">
                        
                        {/* Center Message / Animation Area */}
                        <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                           {uiState === 'SCANNING' && (
                              <>
                                 {currentScan && currentScan.state === 'scanning' ? (
                                    <div className="text-[#e91e63] font-bold text-2xl animate-pulse">
                                       ¥ {getPrice(currentScan.item.title).toLocaleString()}
                                    </div>
                                 ) : (
                                    <div className="text-gray-400 text-sm">
                                       <ShoppingBasket size={48} className="mx-auto mb-2 opacity-20" />
                                       手元のカゴから商品を選んでください
                                    </div>
                                 )}
                              </>
                           )}
                        </div>

                        {/* Total Display */}
                        <div className="bg-[#fff9c4] p-4 border-t border-[#ffe082]">
                           <div className="flex justify-between items-end mb-1">
                              <span className="text-sm font-bold text-gray-600">お支払い合計 (Total)</span>
                           </div>
                           <div className="text-right text-4xl font-bold text-[#e91e63] font-mono tracking-tighter">
                              ¥{total.toLocaleString()}
                           </div>
                        </div>

                        {/* Bottom Buttons */}
                        <div className="p-2 grid grid-cols-2 gap-2 bg-white border-t border-gray-200">
                           <button 
                              className="bg-gray-200 text-gray-600 rounded py-3 font-bold text-sm flex flex-col items-center justify-center shadow-sm active:translate-y-0.5"
                              onClick={() => alert("Calling attendant...")}
                           >
                              <HelpCircle size={18} />
                              係員呼出
                           </button>
                           <button 
                              disabled={scanned.length !== data.projects.length || uiState !== 'SCANNING'}
                              onClick={handlePayment}
                              className={`rounded py-3 font-bold text-sm flex flex-col items-center justify-center shadow-sm transition-all ${
                                 scanned.length === data.projects.length && uiState === 'SCANNING'
                                 ? 'bg-[#e91e63] text-white shadow-md hover:bg-[#c2185b] active:translate-y-0.5' 
                                 : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              }`}
                           >
                              <CreditCard size={18} />
                              お支払い
                           </button>
                        </div>
                     </div>
                  </div>

                  {/* Global Bottom Bar */}
                  <div className="bg-[#eeeeee] p-2 flex justify-between items-center text-xs text-gray-600 border-t border-gray-300">
                     <div className="flex gap-4">
                        <button className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-300"><Volume2 size={12} /> 音量</button>
                        <button className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-300"><Languages size={12} /> Language</button>
                     </div>
                     <div className="font-mono">REG: 02</div>
                  </div>
               </div>
            </div>

            {/* HARDWARE AREA (Scanner & Receipt) */}
            <div className="flex-1 bg-[#fdfcf8] relative flex items-start justify-center px-4">
               
               {/* Receipt Printer Slot */}
               <div className="absolute left-8 top-4 w-24 h-12 bg-gray-300 rounded-sm border-b-4 border-gray-400 overflow-hidden shadow-inner flex items-end justify-center">
                  <div className="w-16 h-1 bg-black mb-3"></div>
                  {uiState === 'THANKS' && (
                     <div className="absolute top-0 w-16 bg-white text-[8px] font-mono p-1 shadow text-center animate-[printReceipt_1s_ease-out_forwards]">
                        RECEIPT<br/>THANK YOU
                     </div>
                  )}
               </div>

               {/* Scanner Window */}
               <div className="w-48 h-32 bg-gray-800 rounded-lg border-8 border-gray-600 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] flex items-center justify-center">
                  {/* Scanner Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  {/* Laser Lines */}
                  <div className="absolute w-full h-[2px] bg-red-500 shadow-[0_0_8px_red] opacity-80"></div>
                  <div className="absolute h-full w-[2px] bg-red-500 shadow-[0_0_8px_red] opacity-80"></div>
                  
                  {/* Scanning Effect */}
                  {currentScan && currentScan.state === 'scanning' && (
                     <div className="absolute inset-0 bg-red-500/30 mix-blend-screen animate-pulse z-10"></div>
                  )}
               </div>

               {/* Coin Slot */}
               <div className="absolute right-8 top-8 w-8 h-16 bg-gray-300 rounded border border-gray-400 flex flex-col items-center justify-center gap-1 shadow-inner">
                  <div className="w-1 h-8 bg-black rounded-full"></div>
               </div>
            </div>

            {/* PHYSICAL BASKET & BAG ZONES */}
            {/* These are absolute positioned relative to the main machine body but stick out */}
            
            {/* LEFT: BASKET SHELF */}
            <div className="absolute bottom-10 -left-[160px] md:-left-[220px] w-[150px] md:w-[200px] h-24 bg-[#e8e6dc] rounded-l-lg shadow-xl border-t-4 border-l-4 border-white/50 flex items-end justify-center z-0">
               <div className="w-[90%] h-[120%] bg-[#d32f2f] rounded border-4 border-[#b71c1c] relative -mb-4 flex items-center justify-center shadow-md">
                   {/* Mesh pattern */}
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '8px 8px' }}></div>
                   <div className="bg-white px-2 py-0.5 text-xs font-bold text-[#b71c1c] absolute -top-3 left-2 border border-[#b71c1c]">買い物かご</div>
               </div>
               
               {/* UNSCANNED ITEMS (In Basket) */}
               <div className="absolute bottom-4 w-full flex flex-col items-center gap-1 px-2 z-20 pb-4">
                  {unscanned.map((item, i) => (
                     <button
                        key={i}
                        disabled={uiState !== 'SCANNING' || currentScan !== null}
                        onClick={() => handleScan(item)}
                        className="w-full bg-white border border-gray-300 shadow-sm rounded p-2 text-left text-xs hover:-translate-y-1 transition-transform relative group"
                        style={{ transform: `rotate(${Math.random() * 4 - 2}deg)`, marginTop: '-20px' }}
                     >
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="font-bold truncate">{item.title}</div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     </button>
                  ))}
                  {unscanned.length === 0 && (
                     <div className="text-xs text-white/80 font-bold absolute bottom-8">空 (Empty)</div>
                  )}
               </div>
            </div>

            {/* RIGHT: BAGGING SHELF */}
            <div className="absolute bottom-10 -right-[160px] md:-right-[220px] w-[150px] md:w-[200px] h-24 bg-[#e8e6dc] rounded-r-lg shadow-xl border-t-4 border-r-4 border-white/50 flex items-end justify-center z-0">
               <div className="w-2 h-32 bg-gray-400 absolute -top-32 left-4 rounded-full"></div>
               <div className="w-2 h-32 bg-gray-400 absolute -top-32 right-4 rounded-full"></div>
               <div className="w-[90%] h-[160%] bg-white/80 border-2 border-gray-300 border-t-0 rounded-b-lg relative -mb-2 shadow-sm flex flex-col-reverse items-center pb-2 overflow-hidden">
                   {/* Plastic Bag Texture */}
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-50"></div>
                   <div className="absolute top-0 w-full h-4 bg-gray-200/50 border-b border-gray-300"></div>
                   
                   {/* SCANNED ITEMS (In Bag) */}
                   {scanned.map((item, i) => (
                      <div 
                        key={i}
                        className="w-[90%] bg-white border border-gray-200 shadow-sm rounded p-1 mb-[-10px] text-[10px] z-10"
                        style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                      >
                         <div className="font-bold truncate text-center">{item.title}</div>
                      </div>
                   ))}
               </div>
            </div>

            {/* === MOVING ITEM ANIMATION LAYER === */}
            {currentScan && (
               <div 
                 className={`absolute z-50 bg-white border-2 border-gray-800 shadow-2xl rounded-lg p-2 w-32 text-center pointer-events-none transition-all duration-500 ease-in-out`}
                 style={{
                    left: '50%',
                    top: '80%', // Base position (Scanner)
                    transform: 'translate(-50%, -50%)', // Center anchor
                    ...(currentScan.state === 'moving-to-scanner' ? {
                       top: '80%', 
                       left: '-30%', // Start from left basket
                       transform: 'translate(-50%, -50%) scale(0.8) rotate(-15deg)',
                       opacity: 1
                    } : {}),
                    ...(currentScan.state === 'scanning' ? {
                       top: '80%', // At scanner
                       left: '50%',
                       transform: 'translate(-50%, -50%) scale(1.1) rotate(0deg)',
                    } : {}),
                    ...(currentScan.state === 'moving-to-bag' ? {
                       top: '80%', 
                       left: '130%', // To right bag
                       transform: 'translate(-50%, -50%) scale(0.8) rotate(15deg)',
                       opacity: 0
                    } : {})
                 }}
               >
                  <div className="h-8 bg-gray-200 mb-1 overflow-hidden flex justify-center gap-1 px-1">
                      {[...Array(10)].map((_,i) => <div key={i} className="w-[2px] h-full bg-black"></div>)}
                  </div>
                  <div className="font-bold text-sm truncate">{currentScan.item.title}</div>
                  <div className="text-xs text-gray-500">¥{getPrice(currentScan.item.title)}</div>
               </div>
            )}

        </div>

        {/* Footer / Floor Reflection Shadow */}
        <div className="w-[90%] h-4 bg-black/20 blur-xl rounded-[100%] mt-[-10px] z-0"></div>

      </div>

      <style>{`
        @keyframes printReceipt {
           0% { transform: translateY(-100%); }
           100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ThemeSelfCheckout;
