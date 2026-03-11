import React from "react";
export default function Hero() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="section-title">
            Transform Your Style With Professional Salon Experts
          </h1>
          <p className="section-subtitle">
            Hair | Makeup | Skincare | Bridal Services
          </p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=900&auto=format&fit=crop"
            alt="Salon stylist working with client"
            className="aspect-square w-full rounded-3xl border border-pink-200 object-cover shadow-inner"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur border border-pink-200 rounded-xl px-4 py-2 shadow">
            <span className="text-sm text-gray-700">
              Trusted by 1,000+ clients
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
