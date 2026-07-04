import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'accent' | 'brutalist';
  className?: string;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  className = ''
}) => {
  const baseStyle = "group relative overflow-hidden inline-flex items-center justify-center gap-3 font-anton uppercase text-sm sm:text-base tracking-wider transition-all duration-300 py-4 px-8 rounded-full select-none cursor-pointer";
  
  const variantStyles = {
    primary: "bg-white text-black border border-white hover:bg-black hover:text-white hover:border-white/20 shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-none",
    secondary: "bg-black text-white border border-white/20 hover:border-white/60 hover:bg-white hover:text-black",
    accent: "bg-[#F4845F] text-white border border-[#F4845F] hover:bg-transparent hover:text-[#F4845F]",
    brutalist: "bg-white text-black border-2 border-black font-bold shadow-[4px_4px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000]"
  };

  return (
    <button
      id={`animated-btn-${text.toLowerCase().replace(/\s+/g, '-')}`}
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </span>
      {/* Background slide effect */}
      <span className="absolute inset-0 w-0 bg-neutral-900 transition-all duration-300 ease-out group-hover:w-full -z-0 opacity-10" />
    </button>
  );
};
