import React from "react";
import BookingWidget from "./BookingWidget";
import SocialProofStrip from "./SocialProofStrip";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 md:pt-24 md:pb-16" id="home" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Glow Beauty Salon luxuriant spa treatment"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        {/* Soft edge fade for luxury effect plus blush radial glow */}
        <div className="absolute inset-0 bg-brand-900/50 via-brand-900/70 to-brand-900 z-10 bg-gradient-to-b" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blush-500/10 via-brand-900/0 to-transparent z-10" />
      </div>

      <div className={`container relative z-20 flex flex-col lg:flex-row lg:items-center justify-between gap-12 mt-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>

        {/* Text Column */}
        <div className="flex-1 text-center lg:text-left shrink-0 w-full mb-10 lg:mb-0 max-w-2xl mx-auto lg:mx-0 order-1">
          <p className="inline-block text-xs uppercase tracking-[0.25em] text-brand-300 font-medium mb-6">
            Indulge In Refined Beauty
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-6">
            GLOW BEAUTY
          </h1>

          <div className="mb-8 flex justify-center lg:justify-start">
            <SocialProofStrip />
          </div>

          <p className="text-lg md:text-xl text-brand-100/90 font-light max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0 px-4 lg:px-0">
            Allow us to craft your perfect moment. Experience bespoke rituals and personalized treatments tailored to unveil your natural radiance.
          </p>

          <div className="flex justify-center lg:justify-start mt-6">
            <a href="#services" className="btn-secondary px-10 py-4 border-brand-500/50">
              EXPLORE SERVICES
            </a>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="flex-1 shrink-0 w-full max-w-md mx-auto lg:mx-0 order-2 mt-8 lg:mt-0 transform transition-transform duration-700 hover:scale-[1.02]">
          <BookingWidget />
        </div>

      </div>
    </section>
  );
}
