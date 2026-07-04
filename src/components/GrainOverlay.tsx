import React from 'react';

interface GrainOverlayProps {
  opacity?: number; // Custom opacity to control density (e.g. 0.4 for hero, 0.05 for section)
}

export const GrainOverlay: React.FC<GrainOverlayProps> = ({ opacity = 0.4 }) => {
  return (
    <div
      id="grain-overlay"
      className="absolute inset-0 pointer-events-none z-[50] select-none repeat"
      style={{
        opacity: opacity,
        backgroundSize: '200px 200px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`
      }}
    />
  );
};
