import React, { useState } from 'react';
import { Loader2, FlaskConical } from 'lucide-react';

interface Props {
  onGenerate: (input: string) => Promise<void>;
  isLoading: boolean;
}

const InputForm: React.FC<Props> = ({ onGenerate, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onGenerate(input);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4 font-['Space_Grotesk'] text-white">
      <div className="max-w-2xl w-full border border-neutral-800 p-8 md:p-12 relative">
        
        {/* Decorative grid lines */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-white text-black rounded-sm">
              <FlaskConical size={24} />
            </div>
            <h1 className="text-2xl font-bold tracking-widest uppercase">Portfolio Lab</h1>
          </div>
          
          <p className="text-neutral-400 mb-8 text-lg font-light leading-relaxed">
            Enter persona data below. The system will synthesize experimental portfolio interfaces tailored to the subject's characteristics.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-700 to-neutral-800 opacity-50 group-hover:opacity-100 transition duration-200 blur"></div>
              <textarea
                className="relative w-full h-40 p-6 bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none font-mono text-sm leading-relaxed"
                placeholder="// INPUT_STREAM:&#10;Web developer based in Tokyo. Obsessed with clean code and spicy curry. Loves building minimalistic UI components."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-full bg-white text-black py-4 font-bold text-sm tracking-widest uppercase hover:bg-neutral-200 disabled:bg-neutral-700 disabled:text-neutral-500 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={18} /> PROCESSING...
                </>
              ) : (
                <>
                  INITIALIZE GENERATION
                </>
              )}
            </button>
          </form>

          <div className="mt-8 flex justify-between text-xs text-neutral-600 font-mono uppercase">
            <span>System: Gemini 2.5 Flash</span>
            <span>Status: Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;