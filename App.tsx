import React, { useState } from 'react';
import { PortfolioData, ThemeType } from './types';
import ThemeRetroOS from './components/ThemeRetroOS';
import ThemeNeoBrutalism from './components/ThemeNeoBrutalism';
import ThemeHolographic from './components/ThemeHolographic';
import ThemeRpg from './components/ThemeRpg';
import ThemeReceipt from './components/ThemeReceipt';
import ThemeBSOD from './components/ThemeBSOD';
import ThemeNutrition from './components/ThemeNutrition';
import ThemeWanted from './components/ThemeWanted';
import ThemeIDE from './components/ThemeIDE';
import ThemeSubway from './components/ThemeSubway';
import ThemeVHS from './components/ThemeVHS';
import ThemeTradingCard from './components/ThemeTradingCard';
import ThemeInstruction from './components/ThemeInstruction';
import ThemeTopSecret from './components/ThemeTopSecret';
import ThemeVending from './components/ThemeVending';

import { 
  Monitor, Square, Sparkles, Gamepad2, ReceiptText, 
  AlertTriangle, Utensils, Skull, Code2, Map, Disc, 
  CreditCard, PenTool, FileLock, Store
} from 'lucide-react';

// Pre-defined data for an Engineer Persona
const ENGINEER_DATA: PortfolioData = {
  name: "佐藤 健太",
  title: "フルスタックエンジニア / 週末ハッカー",
  bio: "東京を拠点に活動するWebエンジニア。コーヒーを美しいコードに変換する装置。パフォーマンスチューニングとレトロゲームの仕組みに執着しています。",
  contactEmail: "kenta.dev@example.com",
  quirkyQuote: "それはバグではありません、仕様です。",
  projects: [
    {
      title: "VimRacer",
      description: "Vimのキーバインディングを楽しく学べるレーシングゲーム。ReactとCanvas APIを使用し、入力速度を競います。",
      tags: ["React", "Canvas", "Vim"]
    },
    {
      title: "GitVisualizer 3D",
      description: "複雑なGitブランチ構造をThree.jsを用いて宇宙空間のような3Dグラフとして可視化するツール。",
      tags: ["Three.js", "WebGL", "Git"]
    },
    {
      title: "AutoRefactor AI",
      description: "スパゲッティコードを解析し、可読性の高いモダンな構文に自動リファクタリングするVSCode拡張機能。",
      tags: ["VSCode Ext", "AST", "AI"]
    },
    {
      title: "RetroTerminal OS",
      description: "ブラウザ上で動作するLinux風のWeb OS。ファイルシステム、プロセス管理をJavaScriptでエミュレート。",
      tags: ["OS", "Emulator", "PWA"]
    }
  ]
};

const App: React.FC = () => {
  const [data] = useState<PortfolioData>(ENGINEER_DATA);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(ThemeType.RETRO_OS);

  const themeButtons = [
    { type: ThemeType.RETRO_OS, icon: Monitor, label: "Retro OS", color: "bg-blue-600" },
    { type: ThemeType.NEO_BRUTALISM, icon: Square, label: "Neo Brutalism", color: "bg-[#bcff00] text-black" },
    { type: ThemeType.HOLOGRAPHIC, icon: Sparkles, label: "Holographic", color: "bg-purple-600" },
    { type: ThemeType.RPG_STATS, icon: Gamepad2, label: "RPG Stats", color: "bg-[#000080]" },
    { type: ThemeType.RECEIPT, icon: ReceiptText, label: "Receipt", color: "bg-gray-800" },
    { type: ThemeType.BSOD, icon: AlertTriangle, label: "BSOD", color: "bg-[#0000AA]" },
    { type: ThemeType.NUTRITION, icon: Utensils, label: "Nutrition", color: "bg-white text-black border border-black" },
    { type: ThemeType.WANTED, icon: Skull, label: "Wanted", color: "bg-[#4a3b2a]" },
    { type: ThemeType.IDE, icon: Code2, label: "IDE", color: "bg-[#007acc]" },
    { type: ThemeType.SUBWAY, icon: Map, label: "Subway", color: "bg-green-600" },
    { type: ThemeType.VHS, icon: Disc, label: "VHS", color: "bg-red-600" },
    { type: ThemeType.TRADING_CARD, icon: CreditCard, label: "Card", color: "bg-yellow-500 text-black" },
    { type: ThemeType.INSTRUCTION, icon: PenTool, label: "Manual", color: "bg-black" },
    { type: ThemeType.TOP_SECRET, icon: FileLock, label: "Secret", color: "bg-red-800" },
    { type: ThemeType.VENDING, icon: Store, label: "Vending", color: "bg-red-500" },
  ];

  return (
    <div className="relative">
      {/* Theme Rendering */}
      {currentTheme === ThemeType.RETRO_OS && <ThemeRetroOS data={data} />}
      {currentTheme === ThemeType.NEO_BRUTALISM && <ThemeNeoBrutalism data={data} />}
      {currentTheme === ThemeType.HOLOGRAPHIC && <ThemeHolographic data={data} />}
      {currentTheme === ThemeType.RPG_STATS && <ThemeRpg data={data} />}
      {currentTheme === ThemeType.RECEIPT && <ThemeReceipt data={data} />}
      {currentTheme === ThemeType.BSOD && <ThemeBSOD data={data} />}
      {currentTheme === ThemeType.NUTRITION && <ThemeNutrition data={data} />}
      {currentTheme === ThemeType.WANTED && <ThemeWanted data={data} />}
      {currentTheme === ThemeType.IDE && <ThemeIDE data={data} />}
      {currentTheme === ThemeType.SUBWAY && <ThemeSubway data={data} />}
      {currentTheme === ThemeType.VHS && <ThemeVHS data={data} />}
      {currentTheme === ThemeType.TRADING_CARD && <ThemeTradingCard data={data} />}
      {currentTheme === ThemeType.INSTRUCTION && <ThemeInstruction data={data} />}
      {currentTheme === ThemeType.TOP_SECRET && <ThemeTopSecret data={data} />}
      {currentTheme === ThemeType.VENDING && <ThemeVending data={data} />}

      {/* Theme Switcher (Horizontal Scroll Dock) */}
      <div className="fixed bottom-6 left-0 right-0 z-[9999] flex justify-center pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-2xl border border-gray-200 flex gap-2 items-center overflow-x-auto max-w-[95vw] pointer-events-auto scrollbar-hide mx-4">
          {themeButtons.map((theme) => (
            <button
              key={theme.type}
              onClick={() => setCurrentTheme(theme.type)}
              className={`p-3 rounded-xl transition-all shrink-0 flex flex-col items-center gap-1 min-w-[60px] ${currentTheme === theme.type ? `${theme.color} text-white shadow-md scale-110` : 'hover:bg-gray-100 text-gray-600'}`}
              title={theme.label}
            >
              <theme.icon size={20} />
              <span className="text-[10px] font-bold hidden md:block">{theme.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
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

export default App;