import React, { useState } from "react";

// Pexels CDN URLs — publicly accessible, no auth required, reliable CDN
const images = [
  {
    src: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Professional hair styling service at Glow Beauty Salon Nagpur",
    label: "Hair Styling",
  },
  {
    src: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Expert bridal makeup artist in Nagpur",
    label: "Bridal Makeup",
  },
  {
    src: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Advanced skincare facial treatment at beauty salon in Nagpur",
    label: "Skincare Facial",
  },
  {
    src: "https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Premium nail art manicure service in Nagpur",
    label: "Nail Art",
  },
  {
    src: "https://images.pexels.com/photos/3738358/pexels-photo-3738358.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Professional hair coloring balayage service in Nagpur",
    label: "Hair Coloring",
  },
  {
    src: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Relaxing spa massage therapy at Glow Beauty Salon Nagpur",
    label: "Spa & Massage",
  },
];

// Fallback placeholder when image fails to load
const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23fff0f6' width='800' height='600'/%3E%3Ctext fill='%23f53c91' font-family='sans-serif' font-size='32' text-anchor='middle' x='400' y='310'%3E✨ Glow Beauty Salon%3C/text%3E%3C/svg%3E";

export default function Gallery() {
  const [failed, setFailed] = useState({});

  const handleError = (i) => setFailed((prev) => ({ ...prev, [i]: true }));

  return (
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-label">Our Work</span>
        <h2 className="section-title">Gallery — Transformations & Ambiance</h2>
        <p className="section-subtitle mx-auto">
          A glimpse into our salon where every client leaves with a smile. See
          the magic our stylists create every day.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image, i) => (
          <div key={i} className="gallery-img-wrapper group shadow-sm hover:shadow-brand-md transition-shadow duration-300">
            <img
              src={failed[i] ? FALLBACK : image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              onError={() => handleError(i)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Dark overlay on hover */}
            <div className="gallery-overlay">
              <div>
                <span className="inline-block text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">
                  Service
                </span>
                <p className="text-white font-bold text-lg leading-tight">{image.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="#services" className="btn-secondary">
          Explore Our Services →
        </a>
      </div>
    </div>
  );
}
