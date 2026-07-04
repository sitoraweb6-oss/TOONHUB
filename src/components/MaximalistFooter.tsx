import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, ArrowUp, Send } from 'lucide-react';
import { CoreAttribution } from './core-attribution';

export const MaximalistFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const navLinks = [
    { label: "HERO STAGE", href: "#hero-carousel-container" },
    { label: "THE CRAFT", href: "#the-craft" },
    { label: "SPEC MATRIX", href: "#the-specs" },
    { label: "ROSTER GALLERY", href: "#the-roster" },
    { label: "COLLECTOR PRICING", href: "#secure-yours" },
    { label: "FAQ / CONTACT", href: "#intel-comms" }
  ];

  const socialLinks = [
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Youtube, url: "https://youtube.com", label: "Youtube" }
  ];

  return (
    <footer id="maximalist-footer" className="relative bg-black text-white pt-24 pb-8 border-t border-white/10 select-none overflow-hidden">
      
      {/* Giant Branding: Edge-to-edge "TOONHUB" text in Anton */}
      <div className="w-full overflow-hidden select-none mb-16 pointer-events-none">
        <h1 className="font-anton text-[clamp(80px,22vw,400px)] text-white/[0.04] leading-[0.8] text-center uppercase tracking-tighter">
          TOONHUB
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start mb-16">
          
          {/* Column 1: Newsletter Input */}
          <div className="flex flex-col">
            <span className="font-mono text-xs text-neutral-500 tracking-wider mb-4">
              // DROP NOTIFICATIONS
            </span>
            <h4 className="font-anton text-lg tracking-wide uppercase mb-6">
              SUBSCRIBE TO NEXT DROP
            </h4>
            <form onSubmit={handleSubscribe} className="relative flex items-center w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL LINK"
                required
                className="w-full bg-transparent border-b-2 border-white text-white font-mono text-sm uppercase pb-3 outline-none focus:border-[#6BBF7A] transition-colors placeholder:text-neutral-700"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-white hover:text-[#6BBF7A] transition-colors cursor-pointer"
                aria-label="Subscribe to drops"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <span className="text-xs text-[#6BBF7A] font-mono tracking-wider uppercase mt-3 animate-pulse">
                ✓ Connection saved. you're in.
              </span>
            )}
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col md:pl-12">
            <span className="font-mono text-xs text-neutral-500 tracking-wider mb-4">
              // INDEX NAVIGATION
            </span>
            <h4 className="font-anton text-lg tracking-wide uppercase mb-6">
              DIRECTORY MAP
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="inline-block font-sans text-xs tracking-wider text-neutral-400 hover:text-white transition-transform duration-300 hover:translate-x-2 uppercase font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Action */}
          <div className="flex flex-col md:items-end">
            <div className="w-full md:max-w-xs md:text-right">
              <span className="font-mono text-xs text-neutral-500 tracking-wider mb-4 block">
                // SATELLITE LINKS
              </span>
              <h4 className="font-anton text-lg tracking-wide uppercase mb-6">
                SOCIAL SIGNALS
              </h4>
              
              {/* Social icons */}
              <div className="flex gap-4 md:justify-end mb-8">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300 bg-white/[0.02]"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Scroll to top button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400 hover:text-white group cursor-pointer"
              >
                BACK TO SUMMIT
                <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUp className="w-4.5 h-4.5" />
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Flex justify-between */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs tracking-widest text-white/40 border-t border-white/10 pt-8 gap-4">
          
          {/* Copyright */}
          <div>
            <p className="font-sans uppercase">
              &copy; {new Date().getFullYear()} TOONHUB. ALL VECTOR CHANNELS SECURED.
            </p>
          </div>

          {/* Brand Attribution Link */}
          <div>
            <CoreAttribution variant="footer" />
          </div>

        </div>

      </div>
    </footer>
  );
};
