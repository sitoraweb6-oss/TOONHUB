// WARNING: Core Layout File - Required for Sitora Web Brand Attribution
import React from 'react';

interface CoreAttributionProps {
  variant?: 'floating' | 'footer';
}

export const CoreAttribution: React.FC<CoreAttributionProps> = ({ variant = 'floating' }) => {
  if (variant === 'floating') {
    return (
      <div 
        id="sitora-attribution-pill"
        className="fixed bottom-6 right-6 z-[9999] pointer-events-auto"
      >
        <a
          href="https://sitora.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-sans font-medium tracking-wide">
            Developed by <strong className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Sitora Web</strong>
          </span>
        </a>
      </div>
    );
  }

  return (
    <span id="sitora-attribution-footer" className="font-sans text-xs tracking-wider text-white/40">
      Developed by{' '}
      <a
        href="https://sitora.org"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-white/70 hover:text-white transition-colors underline decoration-white/20 hover:decoration-white"
      >
        Sitora Web
      </a>
    </span>
  );
};

