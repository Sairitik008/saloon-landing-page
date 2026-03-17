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
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < count ? "#facc15" : "#e5e7eb"}
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
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-label">Client Love</span>
        <h2 className="section-title">What Our Happy Clients Say</h2>
        <p className="section-subtitle mx-auto">
          Trusted by hundreds of clients in Nagpur — real reviews from real
          people who experienced the Glow difference.
        </p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="card flex flex-col">
            {/* Quote mark */}
            <span className="text-5xl font-display text-brand-200 leading-none select-none">"</span>

            <p className="mt-2 text-gray-600 leading-relaxed text-sm flex-1">{t.feedback}</p>

            <div className="mt-5 pt-5 border-t border-pink-100 flex items-center gap-3">
              {/* Avatar */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #f53c91 0%, #b41467 100%)" }}
              >
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 truncate">{t.name}</p>
                <p className="text-xs text-gray-400 truncate">{t.location}</p>
                <Stars count={t.rating} />
              </div>
              <div className="ml-auto flex-shrink-0">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 border border-brand-100 rounded-full px-2 py-0.5">
                  {t.service}
                </span>
              </div>
            </div>

            {/* Google Review badge */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" className="text-blue-500">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Verified Google Review</span>
            </div>
          </div>
        ))}
      </div>

      {/* Overall rating summary */}
      <div className="mt-10 text-center p-6 rounded-2xl bg-white border border-pink-100 shadow-sm max-w-md mx-auto">
        <p className="text-5xl font-bold gradient-text">4.9</p>
        <div className="flex justify-center mt-2">
          <Stars count={5} />
        </div>
        <p className="mt-2 text-sm text-gray-500">Based on 120+ Google Reviews</p>
      </div>
    </div>
  );
}
