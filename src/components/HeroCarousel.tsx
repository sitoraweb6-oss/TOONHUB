import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { IMAGES } from '../types';
import { GrainOverlay } from './GrainOverlay';

export const HeroCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Ref to track state to avoid closures issues in listeners
  const isAnimatingRef = useRef(isAnimating);
  isAnimatingRef.current = isAnimating;

  // Handle Resize and detect mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Preload all 4 images on mount
  useEffect(() => {
    IMAGES.forEach((item) => {
      const img = new Image();
      img.src = item.src;
    });
  }, []);

  // Navigation Logic
  const navigate = (direction: 'next' | 'prev') => {
    if (isAnimatingRef.current) return;
    setIsAnimating(true);

    setActiveIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % 4;
      } else {
        return (prev + 3) % 4;
      }
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  // Derive roles
  const centerIndex = activeIndex;
  const leftIndex = (activeIndex + 3) % 4;
  const rightIndex = (activeIndex + 1) % 4;
  const backIndex = (activeIndex + 2) % 4;

  const currentBgColor = IMAGES[activeIndex].bg;

  return (
    <div
      id="hero-carousel-container"
      className="relative w-full overflow-hidden transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ 
        backgroundColor: currentBgColor,
        fontFamily: "'Inter', sans-serif"
      }}
    >
      <div className="relative w-full h-screen overflow-hidden">
        {/* 1. Grain overlay (zIndex 50) */}
        <GrainOverlay opacity={0.4} />

        {/* 2. Giant ghost text "3D SHAPE" (zIndex 2, top 18%) */}
        <div
          id="giant-ghost-text"
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2]"
          style={{ top: '18%' }}
        >
          <span
            className="font-anton font-black uppercase text-white tracking-[-0.02em] leading-none whitespace-nowrap text-center"
            style={{ 
              fontSize: 'clamp(90px, 28vw, 380px)',
              textShadow: '0 10px 40px rgba(0,0,0,0.05)'
            }}
          >
            3D SHAPE
          </span>
        </div>

        {/* 3. Top Navigation Bar (zIndex 60) */}
        <nav
          id="brand-header"
          className="absolute top-0 left-0 w-full p-6 sm:p-8 flex justify-between items-center z-[60] select-none"
        >
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white opacity-90">
              TOONHUB
            </span>
            <span className="text-[8px] text-white/50 tracking-widest mt-1 uppercase font-mono">
              Collectible Edition
            </span>
          </div>
          <div className="hidden sm:flex gap-6 text-[10px] font-semibold text-white tracking-widest opacity-70 uppercase font-mono">
            <a href="#the-craft" className="hover:opacity-100 transition-opacity">The Craft</a>
            <a href="#the-specs" className="hover:opacity-100 transition-opacity">The Specs</a>
            <a href="#the-roster" className="hover:opacity-100 transition-opacity">Roster</a>
            <a href="#secure-yours" className="hover:opacity-100 transition-opacity">Drops</a>
          </div>
        </nav>

        {/* 4. Carousel Items Mapping (zIndex 3) */}
        <div id="carousel-items-stage" className="absolute inset-0 z-[3] overflow-hidden">
          {IMAGES.map((item, index) => {
            // Determine role and style
            let roleStyle = {};
            let isCurrent = false;

            if (index === centerIndex) {
              isCurrent = true;
              roleStyle = {
                transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
                filter: 'blur(0px)',
                opacity: 1,
                zIndex: 20,
                left: '50%',
                height: isMobile ? '60%' : '92%',
                bottom: isMobile ? '22%' : '0px',
              };
            } else if (index === leftIndex) {
              roleStyle = {
                transform: 'translateX(-50%) scale(1)',
                filter: 'blur(2px)',
                opacity: 0.85,
                zIndex: 10,
                left: isMobile ? '20%' : '30%',
                height: isMobile ? '16%' : '28%',
                bottom: isMobile ? '32%' : '12%',
              };
            } else if (index === rightIndex) {
              roleStyle = {
                transform: 'translateX(-50%) scale(1)',
                filter: 'blur(2px)',
                opacity: 0.85,
                zIndex: 10,
                left: isMobile ? '80%' : '70%',
                height: isMobile ? '16%' : '28%',
                bottom: isMobile ? '32%' : '12%',
              };
            } else if (index === backIndex) {
              roleStyle = {
                transform: 'translateX(-50%) scale(1)',
                filter: 'blur(4px)',
                opacity: 1, // specified opacity 1 in prompt
                zIndex: 5,
                left: '50%',
                height: isMobile ? '13%' : '22%',
                bottom: isMobile ? '32%' : '12%',
              };
            }

            return (
              <div
                key={item.id}
                className="absolute transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  aspectRatio: '0.6 / 1',
                  willChange: 'transform, filter, opacity',
                  ...roleStyle
                }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  draggable="false"
                  className="w-full h-full object-contain object-bottom select-none"
                  style={{
                    filter: isCurrent ? 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))' : 'none'
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* 5. Bottom-left text + nav buttons (zIndex 60) */}
        <div
          id="carousel-navigation-panel"
          className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-[60] max-w-[320px] select-none text-white"
        >
          <p className="font-sans font-bold uppercase tracking-widest text-base sm:text-[22px] mb-2 sm:mb-3 opacity-95">
            TOONHUB FIGURINES
          </p>
          <p className="hidden sm:block text-xs sm:text-sm text-white/85 leading-[1.6] mb-4 sm:mb-5">
            The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.
          </p>
          
          <div className="flex gap-3">
            <button
              id="hero-nav-prev"
              onClick={() => navigate('prev')}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center transition-all duration-150 hover:scale-[1.08] hover:bg-white/12 active:scale-95 cursor-pointer outline-none"
              aria-label="Previous figurine"
            >
              <ArrowLeft className="w-5 h-5 sm:w-[26px] sm:h-[26px]" strokeWidth={2.25} />
            </button>
            <button
              id="hero-nav-next"
              onClick={() => navigate('next')}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center transition-all duration-150 hover:scale-[1.08] hover:bg-white/12 active:scale-95 cursor-pointer outline-none"
              aria-label="Next figurine"
            >
              <ArrowRight className="w-5 h-5 sm:w-[26px] sm:h-[26px]" strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link "DISCOVER IT" (zIndex 60) */}
        <div
          id="discover-link-container"
          className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-[60] select-none"
        >
          <a
            href="#the-craft"
            className="flex items-center gap-2 font-anton text-white opacity-95 hover:opacity-100 transition-opacity duration-200 uppercase tracking-[-0.02em] leading-none"
            style={{ fontSize: 'clamp(20px, 4vw, 56px)' }}
          >
            DISCOVER IT
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8 animate-bounce-horizontal" strokeWidth={2.25} />
          </a>
        </div>

        {/* 7. Status Indicators (Sidebar Aesthetic - Immersive UI SPEC) */}
        <div 
          id="sidebar-aesthetic" 
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-8 items-center pointer-events-none select-none"
        >
          <div className="w-[1px] h-24 bg-white/20 relative">
            <div 
              className="absolute left-[-1px] w-[3px] bg-white transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                height: '32px',
                top: `${(activeIndex / 3) * (96 - 32)}px` // scaled smoothly on 96px total height
              }}
            />
          </div>
          <span className="rotate-90 text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase whitespace-nowrap origin-center my-4">
            ITEM 0{activeIndex + 1} OF 04
          </span>
        </div>
      </div>
    </div>
  );
};
