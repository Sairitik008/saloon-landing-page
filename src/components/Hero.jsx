import React from "react";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16" id="home">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Glow Beauty Salon luxuriant spa treatment"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Soft edge fade for luxury effect */}
        <div className="absolute inset-0 bg-brand-900/40 via-brand-900/60 to-brand-900 z-10 bg-gradient-to-b" />
      </div>

      <div className="container relative z-20 flex flex-col lg:flex-row lg:items-center gap-12 mt-10">

        {/* Text Column */}
        <div className="flex-1 text-center lg:text-center shrink-0 w-full mb-10 max-w-3xl mx-auto">
          <p className="inline-block text-xs uppercase tracking-[0.25em] text-brand-300 font-medium mb-6">
            Indulge In Refined Beauty
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-6">
            GLOW BEAUTY
          </h1>

          <p className="text-lg md:text-xl text-brand-100/90 font-light max-w-2xl leading-relaxed mb-10 mx-auto">
            Curated rituals, bespoke treatments, and effortless elegance. Elevate your self-care journey in Nagpur's premium beauty sanctuary.
          </p>

          <div className="flex justify-center mt-6">
            <a href="#services" className="btn-secondary px-10 py-4 border-brand-500/50">
              RESERVE YOUR APPOINTMENT
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
