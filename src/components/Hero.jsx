import React from "react";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+",  label: "Years Experience" },
  { value: "50+",  label: "Beauty Services" },
  { value: "4.9★", label: "Google Rating" },
];

export default function Hero() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="order-2 md:order-1">
          <span className="section-label">✨ Premier Beauty Salon in Nagpur</span>

          {/* SEO H1: captures "best beauty salon in Nagpur" search intent */}
          <h1 className="section-title mt-2">
            Nagpur's Most{" "}
            <span className="gradient-text">Trusted Beauty</span>{" "}
            Salon Experience
          </h1>

          <p className="section-subtitle">
            From expert hair styling and bridal makeup to rejuvenating skincare
            treatments — Glow Beauty Salon is where you come to look and feel
            absolutely stunning.
          </p>

          {/* CTA Pair */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Book Appointment
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="badge-trust">✅ Certified Stylists</span>
            <span className="badge-trust">🏆 Award-Winning Salon</span>
            <span className="badge-trust">💯 100% Satisfaction</span>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 md:order-2 relative">
          <div className="relative rounded-3xl overflow-hidden border border-pink-200 shadow-brand-lg">
            <img
              src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional beauty salon hair styling service in Nagpur at Glow Beauty Salon"
              className="w-full h-[420px] object-cover"
              loading="eager"
              fetchpriority="high"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 to-transparent pointer-events-none" />
          </div>

          {/* Floating Trust Badge */}
          <div
            className="absolute -bottom-5 -left-4 bg-white border border-pink-200 rounded-2xl px-5 py-3 shadow-brand-md"
            style={{ animation: "float 3s ease-in-out infinite" }}
          >
            <p className="text-xs font-medium text-gray-500">Trusted by</p>
            <p className="text-xl font-bold text-brand-700">500+ Clients</p>
          </div>

          {/* Floating Rating Badge */}
          <div className="absolute -top-4 -right-4 bg-white border border-pink-200 rounded-2xl px-4 py-2.5 shadow-brand-md">
            <div className="flex items-center gap-1">
              <span className="text-yellow-400 text-lg">⭐</span>
              <span className="font-bold text-gray-900">4.9</span>
            </div>
            <p className="text-xs text-gray-500 mt-0.5">Google Review</p>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center p-5 rounded-2xl bg-white border border-pink-100 shadow-sm hover:shadow-brand-sm hover:border-brand-200 transition-all duration-300"
          >
            <p className="text-3xl font-bold gradient-text">{s.value}</p>
            <p className="mt-1 text-sm text-gray-500 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
