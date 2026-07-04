import React from 'react';
import { SectionHeader } from './SectionHeader';
import { Layers, Brush, Globe } from 'lucide-react';

export const FeaturesSpecs: React.FC = () => {
  const specs = [
    {
      num: "01",
      title: "PREMIUM RESIN",
      description: "We use top-grade liquid polymer compound. Highly durable, dense feel, with drop-resistant internal structuring ensuring your figurine stands the test of time.",
      icon: Layers,
      hoverBorder: "hover:border-[#F4845F]"
    },
    {
      num: "02",
      title: "HAND-PAINTED DETAILS",
      description: "Every stroke is applied manually by world-class studio artists. No decals, no machine print alignments; pure, artistic attention to details.",
      icon: Brush,
      hoverBorder: "hover:border-[#6BBF7A]"
    },
    {
      num: "03",
      title: "GLOBAL DROPS",
      description: "Available in ultra-limited, serialized drop cycles. Once a collection reaches full allocation, the mold is officially decommissioned, forever.",
      icon: Globe,
      hoverBorder: "hover:border-[#E882B4]"
    }
  ];

  return (
    <section id="the-specs" className="relative bg-[#000000] py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader title="THE SPECS" subtitle="BRUTALIST ARCHITECTURE" />

        {/* 3-Column Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {specs.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col pt-10 pb-12 px-6 border-t-2 border-white/20 transition-all duration-300 ${item.hoverBorder} bg-white/[0.01] hover:bg-white/[0.03]`}
              >
                {/* Header Row: Icon + Anton Number */}
                <div className="flex justify-between items-start mb-10">
                  <div className="p-3 bg-white/5 rounded-2xl text-[#6EB5FF] transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
                    <IconComponent size={32} />
                  </div>
                  <span className="font-anton text-5xl text-white/20 tracking-tighter leading-none group-hover:text-white/40 transition-colors duration-300">
                    {item.num}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-anton text-2xl text-white uppercase tracking-wider mb-4 group-hover:tracking-widest transition-all duration-300">
                  {item.title}
                </h3>

                {/* Paragraph */}
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
