import React, { useRef } from "react";

const services = [
  {
    icon: "✨",
    title: "Bespoke Facials",
    desc: "Hydrating, lifting, radiant rituals",
    link: "Learn More"
  },
  {
    icon: "💆‍♀️",
    title: "Signature Massage",
    desc: "Relaxing, deep tissue, aromatherapy",
    link: "Book Now"
  },
  {
    icon: "✂️",
    title: "Hair Artistry",
    desc: "Cut, style, color treatments",
    link: "Book Now"
  },
  {
    icon: "💅",
    title: "Luxe Manicure",
    desc: "Hand & nail rejuvenation",
    link: "Book Now"
  },
  {
    icon: "👰",
    title: "Bridal Styling",
    desc: "Flawless long-lasting event makeup",
    link: "Consultation"
  }
];

export default function Services() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-brand-800 py-24 border-t border-brand-500/20" id="services">
      <div className="container overflow-hidden relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-500/30 pb-4">
          <div>
            <h2 className="font-display text-4xl text-white">EXPLORE OUR SERVICES</h2>
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
              className="bg-brand-900 min-w-[280px] md:min-w-[320px] snap-start border border-brand-500/10 hover:border-brand-500/40 transition-all p-6 flex flex-col cursor-pointer"
            >
              <div className="text-3xl mb-6 text-brand-500">{s.icon}</div>
              <h3 className="font-display text-xl text-brand-100 uppercase tracking-widest">{s.title}</h3>
              <p className="text-brand-100/60 mt-3 text-sm flex-1">{s.desc}</p>
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
