import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  isLightBg?: boolean;
  align?: 'left' | 'center' | 'right';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  isLightBg = false,
  align = 'center'
}) => {
  const alignmentClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align];

  return (
    <div id={`section-header-${title.toLowerCase().replace(/\s+/g, '-')}`} className={`flex flex-col ${alignmentClass} mb-16 select-none relative z-10`}>
      <span className={`font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.25em] mb-3 ${isLightBg ? 'text-neutral-500' : 'text-[#6EB5FF]'}`}>
        // {subtitle}
      </span>
      <h2 className={`font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight leading-[0.95] ${isLightBg ? 'text-black' : 'text-white'}`}>
        {title}
      </h2>
      <div className={`h-[2px] w-24 mt-6 ${isLightBg ? 'bg-black/20' : 'bg-white/20'}`} />
    </div>
  );
};
