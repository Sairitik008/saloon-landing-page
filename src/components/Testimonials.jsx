import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Civil Lines, Nagpur",
    feedback:
      "Glow Beauty Salon is hands down the best salon in Nagpur! The team is incredibly professional and welcoming. I had my hair styled for a wedding and received so many compliments. Will always come back!",
    rating: 5,
    service: "Hair Styling",
  },
  {
    name: "Anjali Mehta",
    location: "Dharampeth, Nagpur",
    feedback:
      "I had my bridal makeup done here and it was absolutely flawless. The artist listened to every detail, understood my style, and made me feel like a queen on my wedding day. Highly recommend!",
    rating: 5,
    service: "Bridal Makeup",
  },
  {
    name: "Rina Kulkarni",
    location: "Ramdaspeth, Nagpur",
    feedback:
      "The skincare facial treatment was amazing. My skin felt refreshed, bright, and so hydrated after just one session. The staff is knowledgeable and caring. One of the best beauty salons in Nagpur!",
    rating: 5,
    service: "Skincare Facial",
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < count ? "#c9a227" : "#2a2622"}
          className="w-4 h-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-brand-800 py-24" id="testimonials">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl text-white tracking-widest uppercase">Words of Praise</h2>
          <div className="w-16 h-[1px] bg-brand-500 mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-glass flex flex-col group">
              <Stars count={t.rating} />
              <p className="mt-6 text-brand-100/70 font-light leading-relaxed text-sm italic flex-1 flex flex-col justify-center">
                "{t.feedback}"
              </p>

              <div className="mt-6 pt-6 border-t border-brand-500/20 flex flex-col">
                <p className="font-display tracking-[0.1em] text-lg text-brand-500">{t.name}</p>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-[0.65rem] uppercase tracking-widest text-brand-100/40">{t.location}</p>
                  <span className="text-[0.6rem] font-medium text-brand-900 bg-brand-500 px-2 py-1 uppercase tracking-widest">
                    {t.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
