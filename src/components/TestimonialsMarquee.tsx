import React from 'react';
import { GrainOverlay } from './GrainOverlay';

export const TestimonialsMarquee: React.FC = () => {
  const testimonials = [
    { text: "MIND BLOWING DETAIL!", author: "ALEX K.", rating: "★★★★★" },
    { text: "STUNNING FINISH & POLYMERS!", author: "SOPHIE M.", rating: "★★★★★" },
    { text: "ABSOLUTELY FLAWLESS 3D CRAFT!", author: "MARCUS T.", rating: "★★★★★" },
    { text: "VIBRANT COLORS ARE UNREAL!", author: "EMILY V.", rating: "★★★★★" },
    { text: "SHIPPED FULLY PREPARED!", author: "JONAH S.", rating: "★★★★★" },
    { text: "CRAFTSMANSHIP AT ITS FINEST!", author: "CLARA B.", rating: "★★★★★" }
  ];

  // Repeat the list to ensure zero seams during scrolling
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="word-on-the-street"
      className="relative bg-[#F4845F] py-20 overflow-hidden select-none"
    >
      {/* Reusable Grain Overlay (opacity 0.4 as it's the warm textured background) */}
      <GrainOverlay opacity={0.35} />

      {/* Small Section Tag */}
      <div className="flex justify-center mb-10 relative z-10">
        <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/90 bg-black/15 px-4 py-2 rounded-full">
          // CLIENT REVIEWS & VERDICTS
        </span>
      </div>

      {/* Infinite scrolling CSS marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-4 z-10 border-y border-white/20">
        <div className="flex animate-marquee whitespace-nowrap gap-16 py-4">
          {marqueeItems.map((item, idx) => {
            // Alternating outline typography for dynamic maximalist visual rhythm
            const isOutline = idx % 2 === 1;

            return (
              <div 
                key={idx} 
                className="inline-flex items-center gap-6"
              >
                <span
                  className="font-anton text-6xl md:text-8xl tracking-tight leading-none uppercase select-none transition-all duration-300"
                  style={
                    isOutline
                      ? {
                          WebkitTextStroke: '2px #ffffff',
                          color: 'transparent',
                        }
                      : {
                          color: '#ffffff',
                        }
                  }
                >
                  "{item.text}"
                </span>
                <span className="font-mono text-sm font-bold text-white bg-black/25 px-3 py-1 rounded-md flex items-center gap-1">
                  {item.author} <span className="text-yellow-300 tracking-normal">{item.rating}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center mt-10 relative z-10">
        <p className="font-mono text-xs text-white/80 uppercase tracking-widest text-center">
          Hover to pause transmission speed • Handcrafted feedback verified globally
        </p>
      </div>
    </section>
  );
};
