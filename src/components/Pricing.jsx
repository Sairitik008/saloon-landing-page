import React, { useState } from "react";

const items = [
  { icon: "✂️", name: "Haircut & Styling", price: "Starting ₹500", popular: false },
  { icon: "🎨", name: "Hair Coloring", price: "Starting ₹2,000", popular: false },
  { icon: "🌿", name: "Skincare Facials", price: "Starting ₹1,200", popular: false },
  { icon: "👰", name: "Bridal Makeup Package", price: "Starting ₹10,000", popular: true },
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
    <div className="border border-brand-500/20 bg-brand-800 transition-shadow duration-300">
      <button
        className="w-full flex items-center justify-between text-left p-6 font-display text-lg text-brand-100 hover:text-brand-500 transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-brand-500 border border-brand-500/30 transition-transform duration-300 ${open ? "rotate-45 bg-brand-500/10" : "bg-transparent"
            }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-brand-100/60 text-sm leading-relaxed border-t border-brand-500/10 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="bg-brand-900 py-24" id="pricing">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl text-white tracking-widest uppercase">Pricing & Policies</h2>
          <div className="w-16 h-[1px] bg-brand-500 mx-auto mt-6"></div>
          <p className="mt-6 text-brand-100/60 font-light max-w-md mx-auto text-sm leading-relaxed">
            Honest, competitive pricing for our signature collections — no hidden charges.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Price Cards */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((it) => (
                <div
                  key={it.name}
                  className={`relative p-6 bg-brand-800 border flex flex-col gap-4 transition-all duration-300 ${it.popular ? "border-brand-500 shadow-brand-sm" : "border-brand-500/20 hover:border-brand-500/50"
                    }`}
                >
                  {it.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-widest font-bold text-brand-900 bg-brand-500 uppercase px-3 py-1 shadow">
                      Signature
                    </span>
                  )}
                  <div className="text-2xl text-brand-500">
                    {it.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white tracking-wide">{it.name}</h3>
                    <p className="mt-2 text-sm font-semibold text-brand-500 tracking-widest uppercase">{it.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[0.7rem] text-brand-100/40 uppercase tracking-widest">
              * Prices may vary based on exact service requirements. GST applicable as per government norms. Custom packages available.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-brand-500 mb-6 uppercase tracking-widest">Frequently Asked Questions</h3>
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
