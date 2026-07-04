import React from 'react';
import { GrainOverlay } from './GrainOverlay';
import { Cpu, Palette, Sparkles } from 'lucide-react';

export const AboutTheCraft: React.FC = () => {
  return (
    <section
      id="the-craft"
      className="relative min-h-screen bg-[#111111] overflow-hidden py-24 flex items-center"
    >
      {/* Reusable Grain Overlay (low opacity 0.05) */}
      <GrainOverlay opacity={0.05} />

      {/* Giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <h2 className="font-anton text-[clamp(80px,20vw,300px)] text-white/[0.03] tracking-tighter leading-none">
          CRAFTED
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column (Visual 3D Abstract Placeholder) */}
          <div className="flex justify-center items-center relative">
            <div className="absolute w-[80%] h-[80%] rounded-full bg-[#F4845F]/10 blur-[100px] pointer-events-none" />
            <div className="absolute w-[60%] h-[60%] rounded-full bg-[#6EB5FF]/10 blur-[120px] pointer-events-none" />
            
            {/* The Floating Container */}
            <div className="relative w-full max-w-[450px] aspect-square rounded-[2.5rem] bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden animate-bounce-slow group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              
              {/* Inner holographic 3D figurine & geometric wireframes representing "3D Modeling" */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Holographic Figurine sitting inside the scanner */}
                <div className="absolute w-[65%] h-[65%] flex items-center justify-center z-10 animate-pulse-slow">
                  <img
                    src="https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png"
                    alt="3D Hologram Figurine"
                    className="max-h-[85%] object-contain filter drop-shadow-[0_0_25px_rgba(244,132,95,0.4)] saturate-125 select-none pointer-events-none"
                  />
                  {/* Glowing hologram scan bar */}
                  <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F4845F] to-transparent animate-scan z-20" />
                </div>

                {/* Outer Ring */}
                <div className="absolute w-72 h-72 rounded-full border border-dashed border-white/20 animate-spin-slow group-hover:border-[#F4845F]/50 transition-colors duration-500" />
                {/* Middle Hexagon / Rhombus structure */}
                <div className="absolute w-56 h-56 border border-white/10 rotate-45 animate-reverse-spin group-hover:border-[#6EB5FF]/40 transition-colors duration-500" />
                
                {/* Floating satellite elements */}
                <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-[#6BBF7A] shadow-[0_0_15px_rgba(107,191,122,0.8)] animate-ping" />
                <div className="absolute bottom-12 right-12 w-3 h-3 rounded-full bg-[#6EB5FF] shadow-[0_0_15px_rgba(110,181,255,0.8)]" />
              </div>
              
              {/* Dynamic labels in the frame to make it look scientific/industrial */}
              <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/30 tracking-widest uppercase">
                SYS_STATUS: ACTIVE
              </div>
              <div className="absolute top-6 right-6 font-mono text-[10px] text-white/30 tracking-widest uppercase">
                MODEL: #T-004
              </div>
            </div>
          </div>

          {/* Right Column (Text Content) */}
          <div className="flex flex-col justify-center text-white relative z-10 select-none">
            <span className="font-sans font-bold text-sm tracking-[0.25em] text-[#F4845F] uppercase mb-4">
              // THE PROCESS
            </span>
            <h3 className="font-anton text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight uppercase mb-8">
              FROM PIXELS<br/>TO REALITY
            </h3>
            <p className="font-sans text-lg text-white/60 leading-relaxed mb-10">
              Each TOONHUB figure is designed inside high-end virtual sandboxes, utilizing state-of-the-art voxel manipulation and multi-axis detailing. Once mathematically perfected, the blueprint is transferred into our micro-layer resin printers to forge a seamless solid figurine of absolute resilience.
            </p>

            {/* Feature bullets showing details of the craft */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                <div className="p-3 rounded-xl bg-[#F4845F]/10 text-[#F4845F]">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase mb-1">Subpixel Detailing</h4>
                  <p className="text-xs text-white/40">3D prints forged at 25-micron layer heights for invisible lines.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                <div className="p-3 rounded-xl bg-[#6BBF7A]/10 text-[#6BBF7A]">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase mb-1">Hand-Painted Coat</h4>
                  <p className="text-xs text-white/40">Airbrushed and details sealed with UV-resistant acrylic lacquer.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS custom utilities to handle rotational animations cleanly */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverseSpin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes scan {
          0%, 100% { top: 10%; opacity: 0.3; }
          50% { top: 90%; opacity: 1; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverseSpin 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 5s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
