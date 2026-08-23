import React from "react";

const images = [
  { src: "/images/gallery-1_upscayl_4x.jpg", alt: "Hair Styling", label: "Hair Styling" },
  { src: "/images/gallery-2_upscayl_4x.jpg", alt: "Bridal Makeup", label: "Bridal Makeup" },
  { src: "/images/gallery-3.JPG", alt: "Skincare Facial", label: "Skincare Facial" },
  { src: "/images/gallery-4_upscayl_4x.jpg", alt: "Nail Art", label: "Nail Art" },
  { src: "/images/gallery-5_upscayl_4x.jpg", alt: "Hair Coloring", label: "Hair Coloring" },
  { src: "/images/gallery-6_upscayl_4x.jpg", alt: "Spa & Massage", label: "Spa & Massage" },
];

export default function Gallery() {
  return (
    <section className="bg-brand-900 py-24" id="gallery">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl text-white tracking-widest uppercase">Curated Portfolio</h2>
          <div className="w-16 h-[1px] bg-brand-500 mx-auto mt-6"></div>
          <p className="mt-6 text-brand-100/60 font-light max-w-md mx-auto text-sm leading-relaxed">
            A glimpse into our sanctuary. Witness the mastery our artisans create daily.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-brand-500/30">
          {images.map((image, i) => (
            <div key={i} className="gallery-img-wrapper group relative border border-brand-500/10">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => { e.target.src = "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=800"; }}
              />
              <div className="gallery-overlay">
                <div>
                  <p className="text-brand-500 font-display text-2xl mb-1">{image.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
