import React from "react";

const services = [
  {
    icon: "✂️",
    title: "Hair Styling",
    desc: "Get a fresh, modern look with our expert hair stylists. From precision cuts and blowouts to elegant updos for special occasions — we tailor every style to you.",
    tag: "Most Popular",
  },
  {
    icon: "👰",
    title: "Bridal Makeup",
    desc: "Look absolutely stunning on your wedding day. Our professional bridal makeup artists create flawless, long-lasting looks crafted to match your unique vision.",
    tag: null,
  },
  {
    icon: "🌿",
    title: "Skincare Treatments",
    desc: "Rejuvenate and glow with our customized facials and advanced skincare treatments — targeting acne, aging, pigmentation, and hydration for healthier skin.",
    tag: null,
  },
  {
    icon: "💅",
    title: "Manicures & Pedicures",
    desc: "Treat yourself to a relaxing nail session. We offer nail shaping, cuticle care, gel polish, nail art, and premium products for a salon-fresh finish.",
    tag: null,
  },
  {
    icon: "🎨",
    title: "Hair Coloring",
    desc: "From bold ombre and balayage to subtle highlights and full color — our color specialists will help you achieve a shade that perfectly complements you.",
    tag: null,
  },
  {
    icon: "🧘",
    title: "Massage Therapy",
    desc: "De-stress and unwind with our professional massage therapy. Our skilled therapists ease muscle tension, improve circulation, and restore your inner balance.",
    tag: null,
  },
];

export default function Services() {
  return (
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-label">What We Offer</span>
        {/* SEO-Optimized h2 */}
        <h2 className="section-title">Our Premium Salon Services in Nagpur</h2>
        <p className="section-subtitle mx-auto">
          Discover our wide range of beauty treatments tailored to bring out
          your natural beauty and leave you feeling your absolute best.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card relative group">
            {s.tag && (
              <span className="absolute top-4 right-4 text-xs font-semibold text-brand-700 bg-brand-50 border border-brand-200 rounded-full px-2.5 py-0.5">
                {s.tag}
              </span>
            )}
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-brand-sm"
              style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)", border: "1px solid #ffc9e1" }}
            >
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{s.title}</h3>
            <p className="mt-2 text-gray-500 leading-relaxed text-sm">{s.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
              Available Now
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
