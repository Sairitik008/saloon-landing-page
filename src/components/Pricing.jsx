import React, { useState } from "react";

const items = [
  { icon: "✂️", name: "Haircut & Styling",      price: "Starting ₹500",   popular: false },
  { icon: "🎨", name: "Hair Coloring",           price: "Starting ₹2,000", popular: false },
  { icon: "🌿", name: "Skincare Facials",        price: "Starting ₹1,200", popular: false },
  { icon: "👰", name: "Bridal Makeup Package",   price: "Starting ₹10,000",popular: true  },
];

const faqs = [
  {
    q: "Which is the best salon in Nagpur?",
    a: "Glow Beauty Salon is widely recognized as one of the top-rated beauty salons in Nagpur. We're known for our expert stylists, premium products, hygiene standards, and exceptional customer care.",
  },
  {
    q: "Do you offer bridal makeup packages?",
    a: "Yes! We offer comprehensive bridal packages that include full makeup, hair styling, and pre-bridal skincare treatments. Contact us to customize a package that fits your vision and budget.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book via the contact form on this page, call us directly at +91 12345 67890, or send us a WhatsApp message. We typically confirm within 2 hours.",
  },
  {
    q: "What products do you use?",
    a: "We use only premium, internationally recognized brands for all our services — from Schwarzkopf and L'Oréal for hair to Dermalogica and Lakme for skincare and makeup.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-pink-100 rounded-2xl overflow-hidden bg-white transition-shadow duration-300 hover:shadow-brand-sm">
      <button
        className="w-full flex items-center justify-between text-left p-5 font-semibold text-gray-900 hover:text-brand-700 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className={`ml-4 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-brand-600 border border-brand-200 transition-transform duration-300 ${
            open ? "rotate-45 bg-brand-50" : "bg-white"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-pink-50 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-label">💰 Transparent Pricing</span>
        <h2 className="section-title">Our Pricing & FAQs</h2>
        <p className="section-subtitle mx-auto">
          Honest, competitive pricing for our most popular services — no hidden
          charges. Custom packages available on request.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        {/* Price Cards */}
        <div>
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it) => (
              <div
                key={it.name}
                className={`relative card flex flex-col gap-3 ${
                  it.popular ? "border-brand-300 shadow-brand-sm" : ""
                }`}
              >
                {it.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-white bg-brand-600 rounded-full px-3 py-0.5 whitespace-nowrap shadow">
                    ⭐ Most Popular
                  </span>
                )}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)", border: "1px solid #ffc9e1" }}
                >
                  {it.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{it.name}</h3>
                  <p className="mt-1 text-lg font-bold gradient-text">{it.price}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-gray-400">
            * Prices may vary based on hair length and complexity. GST applicable as per government norms. Custom packages available — contact us for a quote.
          </p>
          </div>
        

        {/* FAQ Accordion */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h3>
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </div>
  );
}
