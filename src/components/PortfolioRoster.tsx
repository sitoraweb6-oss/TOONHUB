import React, { useState } from 'react';
import { IMAGES, Character } from '../types';
import { X, Box, Ruler, Award } from 'lucide-react';

export const PortfolioRoster: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  return (
    <section id="the-roster" className="relative bg-[#FFFFFF] py-24 text-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Subtitle Label */}
        <div className="flex flex-col items-center mb-6">
          <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-neutral-400">
            // COLLECTIBLE PORTFOLIO
          </span>
        </div>

        {/* Header */}
        <h2 className="font-anton text-[clamp(60px,12vw,150px)] leading-none text-center uppercase tracking-tighter mb-16">
          THE ROSTER
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IMAGES.map((char) => (
            <div
              key={char.id}
              onClick={() => setSelectedCharacter(char)}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden relative group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] hover:-translate-y-2"
              style={{ backgroundColor: char.panel }}
            >
              {/* Giant number top-left (Anton text-white mix-blend-overlay opacity-80) */}
              <div className="absolute top-8 left-8 pointer-events-none select-none z-10">
                <span className="font-anton text-8xl md:text-9xl text-white mix-blend-overlay opacity-80 leading-none">
                  {char.id}
                </span>
              </div>

              {/* Top-Right Label (Codename / Badge) */}
              <div className="absolute top-10 right-8 z-10 bg-black/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                <span className="font-mono text-[11px] font-bold tracking-wider text-white">
                  {char.codename}
                </span>
              </div>

              {/* Character Image (absolute bottom, w-[85%] object-contain, dropshadow-2xl, scales 110% on hover) */}
              <div className="absolute bottom-0 inset-x-0 flex justify-center items-end h-[68%] w-full overflow-hidden">
                <img
                  src={char.src}
                  alt={char.name}
                  draggable="false"
                  className="w-[85%] h-[100%] object-contain object-bottom transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* Bottom Card Title Banner (Fades on Hover or reveals specs) */}
              <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center z-10 transition-transform duration-500 group-hover:translate-y-[-4px]">
                <div>
                  <h3 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none">
                    {char.name}
                  </h3>
                  <p className="font-mono text-[11px] text-white/70 tracking-widest uppercase mt-1">
                    {char.edition}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <span className="text-sm font-bold font-mono">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX / SPEC DETAILS MODAL */}
      {selectedCharacter && (
        <div 
          id="roster-modal"
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedCharacter(null)}
        >
          <div 
            className="bg-neutral-900 border border-white/10 text-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full relative grid grid-cols-1 md:grid-cols-2 shadow-[0_30px_100px_rgba(0,0,0,0.8)] animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Left (Image side, panel color background) */}
            <div 
              className="relative p-12 flex items-center justify-center min-h-[350px] md:min-h-full"
              style={{ backgroundColor: selectedCharacter.panel }}
            >
              <div className="absolute top-8 left-8 select-none pointer-events-none">
                <span className="font-anton text-[120px] text-white opacity-40 mix-blend-overlay leading-none">
                  {selectedCharacter.id}
                </span>
              </div>
              <img
                src={selectedCharacter.src}
                alt={selectedCharacter.name}
                className="max-h-[320px] md:max-h-[420px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.45)] select-none"
              />
            </div>

            {/* Modal Right (Specs & Details) */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <span className="font-mono text-xs text-[#6EB5FF] tracking-[0.2em] mb-2">
                // SPECIFICATION MATRIX
              </span>
              <h3 className="font-anton text-4xl sm:text-5xl uppercase tracking-wider mb-2">
                {selectedCharacter.name}
              </h3>
              <p className="font-mono text-xs text-[#F4845F] tracking-widest uppercase mb-6">
                {selectedCharacter.codename}
              </p>
              
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-8">
                {selectedCharacter.description}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-4">
                  <Ruler className="w-5 h-5 text-neutral-500" />
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Height Dimension</p>
                    <p className="text-sm font-semibold text-white">{selectedCharacter.height}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Box className="w-5 h-5 text-neutral-500" />
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Primary Material</p>
                    <p className="text-sm font-semibold text-white">{selectedCharacter.material}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Award className="w-5 h-5 text-neutral-500" />
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">Allocation status</p>
                    <p className="text-sm font-semibold text-white">{selectedCharacter.edition}</p>
                  </div>
                </div>
              </div>

              {/* Close CTAs */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => setSelectedCharacter(null)}
                  className="w-full py-3.5 bg-white text-black font-anton uppercase text-xs sm:text-sm tracking-wider rounded-full hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  SECURE FIGURINE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation class styling for Lightbox scale up */}
      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};
