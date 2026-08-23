import React, { useRef } from "react";
import { Droplets, Heart, Scissors, Sparkles, Star } from 'lucide-react';
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: <Droplets strokeWidth={1} size={36} className="text-blush-500" />,
    title: "Bespoke Facials",
    desc: "Experience radiant renewal with our signature hydrating and lifting rituals.",
    link: "Learn More"
  },
  {
    icon: <Heart strokeWidth={1} size={36} className="text-brand-500" />,
    title: "Signature Massage",
    desc: "Melt into deep relaxation with aromatherapy and deep tissue mastery.",
    link: "Book Now"
  },
  {
    icon: <Scissors strokeWidth={1} size={36} className="text-blush-500" />,
    title: "Hair Artistry",
    desc: "Transformative cuts, vibrant color, and immaculate styling.",
    link: "Book Now"
  },
  {
    icon: <Sparkles strokeWidth={1} size={36} className="text-brand-500" />,
    title: "Luxe Manicure",
    desc: "Detail-oriented hand and nail rejuvenation for a flawless finish.",
    link: "Book Now"
  },
  {
    icon: <Star strokeWidth={1} size={36} className="text-blush-500" />,
    title: "Bridal Styling",
    desc: "Exquisite long-lasting makeup mapping to your perfect vision.",
    link: "Consultation"
  }
];

export default function Services() {
  const scrollRef = useRef(null);
  const { ref, isVisible } = useScrollReveal();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-800 py-24 border-t border-brand-500/20" id="services" ref={ref}>
      <div className={`container overflow-hidden relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-500/30 pb-4">
          <div>
            <h2 className="font-display text-4xl text-white">CURATED EXPERIENCES</h2>
            <p className="mt-4 text-brand-100/60 font-light text-sm max-w-sm">Every treatment is uniquely tailored to highlight your authentic self.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border border-brand-500/50 flex items-center justify-center text-brand-500 hover:bg-brand-500 hover:text-brand-900 transition-colors"
              aria-label="Scroll Left"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border border-brand-500/50 flex items-center justify-center text-brand-500 hover:bg-brand-500 hover:text-brand-900 transition-colors"
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-brand-900 min-w-[280px] md:min-w-[320px] snap-start border border-brand-500/10 hover:border-blush-500/40 hover:shadow-[0_4px_30px_rgba(232,180,184,0.1)] transition-all p-8 flex flex-col cursor-pointer group"
            >
              <div className="mb-6 transform group-hover:-translate-y-1 transition-transform duration-300">{s.icon}</div>
              <h3 className="font-display text-xl text-brand-100 uppercase tracking-widest">{s.title}</h3>
              <p className="text-brand-100/60 mt-3 text-sm flex-1 leading-relaxed">{s.desc}</p>
              <div className="mt-8">
                <a href="#contact" className="text-xs text-brand-500 border-b border-brand-500 pb-1 uppercase tracking-wider font-bold">
                  {s.link}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
