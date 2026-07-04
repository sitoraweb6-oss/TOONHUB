import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { AnimatedButton } from './AnimatedButton';

export const PricingDrops: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Basic Collector",
      price: "$19",
      priceAnnually: "$15",
      description: "Start your miniature collection journey with quarterly randomized drops.",
      features: [
        "1 Randomized Figurine per quarter",
        "Standard Drop voting pool access",
        "Official TOONHUB Discord VIP role",
        "Standard protective cardboard container"
      ],
      cta: "INITIATE COLLECTION",
      isPopular: false
    },
    {
      name: "Pro Member",
      price: "$39",
      priceAnnually: "$29",
      description: "Our signature tier. Receive selected masterworks monthly with pre-sale guarantees.",
      features: [
        "1 Curated Figurine dropped monthly",
        "24-Hour early access to secret pre-sales",
        "Laser-serialized matching custom stand",
        "10% Lifetime Storewide discount",
        "Exclusive Series voting rights"
      ],
      cta: "UPGRADE TO MASTER",
      isPopular: true
    },
    {
      name: "Whale",
      price: "$89",
      priceAnnually: "$69",
      description: "Ultimate collectors only. Receive hand-painted ultra-rare variants with priority.",
      features: [
        "2 Premium Figurines dropped monthly",
        "Guaranteed Golden-Variant allocations",
        "1-on-1 designer session (Virtual)",
        "Premium military-grade transport crate",
        "Priority hand-paint custom requests"
      ],
      cta: "SECURE LEGACY LEVEL",
      isPopular: false
    }
  ];

  return (
    <section id="secure-yours" className="relative bg-[#000000] py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader title="LIMITED DROPS" subtitle="THE COLLECTORS CLUB" />

        {/* Billed Monthly/Annually Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`font-sans text-xs uppercase tracking-wider transition-colors duration-200 ${!isAnnual ? 'text-white' : 'text-white/40'}`}>
            Billed Monthly
          </span>
          <button
            id="pricing-billing-toggle"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 rounded-full bg-white/10 border border-white/20 relative flex items-center p-1 cursor-pointer transition-colors hover:border-white/40"
            aria-label="Toggle annual pricing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white transition-all duration-300 ${isAnnual ? 'translate-x-8 bg-[#6BBF7A]' : 'translate-x-0 bg-[#F4845F]'}`}
            />
          </button>
          <span className={`font-sans text-xs uppercase tracking-wider transition-colors duration-200 ${isAnnual ? 'text-white' : 'text-white/40'} flex items-center gap-1.5`}>
            Billed Annually
            <span className="bg-[#6BBF7A]/20 text-[#6BBF7A] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
              Save ~25%
            </span>
          </span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const currentPrice = isAnnual ? plan.priceAnnually : plan.price;
            
            return (
              <div
                key={index}
                className={`flex flex-col relative rounded-[2rem] p-8 backdrop-blur-md transition-all duration-500 bg-white/[0.02] border ${
                  plan.isPopular 
                    ? 'border-[#6BBF7A] lg:scale-105 z-10 shadow-[0_20px_50px_rgba(107,191,122,0.15)] bg-white/[0.03]' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-y-[-50%] translate-x-[50%] bg-[#6BBF7A] text-black text-[10px] font-anton tracking-widest uppercase px-5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(107,191,122,0.4)]">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="font-anton text-2xl text-white uppercase tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <p className="font-sans text-xs text-white/50 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing Display */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="font-anton text-5xl sm:text-6xl text-white tracking-tight leading-none">
                    {currentPrice}
                  </span>
                  <span className="font-mono text-xs text-white/40 uppercase">
                    / mo
                  </span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-4 mb-10 flex-grow border-t border-white/5 pt-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#6BBF7A]" />
                      </div>
                      <span className="font-sans text-xs sm:text-sm text-white/70 leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Button */}
                <div className="mt-auto">
                  <AnimatedButton
                    text={plan.cta}
                    variant={plan.isPopular ? 'accent' : 'secondary'}
                    className="w-full text-center"
                    onClick={() => {
                      alert(`Initiating drop subscription: ${plan.name} (${isAnnual ? 'Annually' : 'Monthly'})`);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
