
import React, { useState } from 'react';
import { PortfolioData, ThemeType } from './types';
import ThemeNeoBrutalism from './components/ThemeNeoBrutalism';
import ThemeHolographic from './components/ThemeHolographic';
import ThemeReceipt from './components/ThemeReceipt';
import ThemeTradingCard from './components/ThemeTradingCard';
import ThemeSelfCheckout from './components/ThemeSelfCheckout';

import { 
  Square, Sparkles, ReceiptText, 
  CreditCard, ScanBarcode
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
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(ThemeType.NEO_BRUTALISM);

  const themeButtons = [
    { type: ThemeType.NEO_BRUTALISM, icon: Square, label: "Neo Brutalism", color: "bg-[#bcff00] text-black" },
    { type: ThemeType.HOLOGRAPHIC, icon: Sparkles, label: "Holographic", color: "bg-purple-600" },
    { type: ThemeType.RECEIPT, icon: ReceiptText, label: "Receipt", color: "bg-gray-800" },
    { type: ThemeType.TRADING_CARD, icon: CreditCard, label: "Card", color: "bg-yellow-500 text-black" },
    { type: ThemeType.SELF_CHECKOUT, icon: ScanBarcode, label: "Checkout", color: "bg-teal-600" },
  ];

  return (
    <div className="relative">
      {/* Theme Rendering */}
      {currentTheme === ThemeType.NEO_BRUTALISM && <ThemeNeoBrutalism data={data} />}
      {currentTheme === ThemeType.HOLOGRAPHIC && <ThemeHolographic data={data} />}
      {currentTheme === ThemeType.RECEIPT && <ThemeReceipt data={data} />}
      {currentTheme === ThemeType.TRADING_CARD && <ThemeTradingCard data={data} />}
      {currentTheme === ThemeType.SELF_CHECKOUT && <ThemeSelfCheckout data={data} />}

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
