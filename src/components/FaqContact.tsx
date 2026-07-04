import React, { useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  index
}) => {
  return (
    <div 
      id={`faq-accordion-item-${index}`}
      className="border-b border-white/10 py-5 transition-all duration-300"
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base sm:text-lg font-bold text-white group-hover:text-[#6EB5FF] transition-colors duration-200">
          {question}
        </span>
        <div className={`p-1.5 rounded-full bg-white/5 text-white/50 transition-all duration-300 ${isOpen ? 'rotate-180 bg-white/15 text-white' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {/* Accordion Content with smooth height transition */}
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm text-white/60 leading-relaxed pb-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FaqContact: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const faqs = [
    {
      question: "What polymers/resins are used in the prints?",
      answer: "We use solid micro-layer urethane resins baked in dual high-intensity UV chambers. This ensures absolute durability, solid tactile density, and a finish completely free of standard visible print layers."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship globally using premium express courier networks. Every single figurine packet is securely padded inside custom high-density foam cells and fully tracked."
    },
    {
      question: "Can I order custom figurines or poses?",
      answer: "Custom poses, custom dimensions, and bespoke coloring requested by collectors are exclusive benefits of our Whale Tier subscription program."
    },
    {
      question: "What is your return or replacement policy?",
      answer: "Every transmission is fully insured. If your product is damaged during transit, simply upload a photo within 48 hours of reception, and we will dispatch a serialized replacement instantly."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please complete all transmission parameters.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="intel-comms" className="relative bg-[#090909] py-24 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Reusable Section Header */}
        <SectionHeader title="INTEL & COMMS" subtitle="FAQ & SUBMISSIONS" />

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mt-12">
          
          {/* Left Side: FAQ (Accordion list) */}
          <div className="w-full flex flex-col">
            <span className="font-mono text-xs text-neutral-500 tracking-wider mb-6">
              // RECURRENT TRANSMISSIONS [FAQ]
            </span>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form (Brutalist Style) */}
          <div className="w-full flex flex-col bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E882B4] to-transparent" />
            
            <span className="font-mono text-xs text-[#E882B4] tracking-widest uppercase mb-4">
              // BROADCAST FEEDBACK
            </span>
            <h3 className="font-anton text-3xl sm:text-4xl uppercase text-white mb-8 tracking-wide leading-none">
              SEND ENQUIRY
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Name Field */}
              <div className="relative mb-8 flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="NAME / INITIATION ID"
                  required
                  className="bg-transparent border-b-2 border-white/20 text-white text-lg sm:text-xl pb-4 outline-none focus:border-[#E882B4] transition-colors uppercase font-mono tracking-wider placeholder:text-white/20 placeholder:text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="relative mb-8 flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="EMAIL ADDRESS"
                  required
                  className="bg-transparent border-b-2 border-white/20 text-white text-lg sm:text-xl pb-4 outline-none focus:border-[#E882B4] transition-colors uppercase font-mono tracking-wider placeholder:text-white/20 placeholder:text-sm"
                />
              </div>

              {/* Message Field */}
              <div className="relative mb-10 flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="ENTER BROADCAST MASSAGE..."
                  rows={3}
                  required
                  className="bg-transparent border-b-2 border-white/20 text-white text-lg sm:text-xl pb-4 outline-none focus:border-[#E882B4] transition-colors uppercase font-mono tracking-wider placeholder:text-white/20 placeholder:text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-white text-black font-anton text-lg sm:text-xl uppercase py-5 px-8 rounded-2xl hover:bg-[#E882B4] hover:text-white transition-all duration-300 tracking-wider disabled:opacity-50 cursor-pointer shadow-[0_4px_30px_rgba(255,255,255,0.05)] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>SEND TRANSMISSION</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Success Notification */}
              {submitStatus === 'success' && (
                <div className="mt-6 text-center text-xs text-[#6BBF7A] font-mono tracking-wider uppercase bg-[#6BBF7A]/10 border border-[#6BBF7A]/20 py-3 rounded-xl animate-fade-in">
                  ✓ Connection established. transmission received.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
