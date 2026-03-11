import React from "react";
import { useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-pink-100">
      <div className="container flex items-center justify-between py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-brand-600 text-white grid place-items-center font-bold">G</span>
          <span className="text-lg md:text-xl font-bold text-gray-900">Glow Beauty Salon</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-gray-700 hover:text-brand-700 transition"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary">Book Appointment</a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg border border-pink-200 text-gray-700"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            {open ? (
              <path d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11 10.59 13.41 4.29 19.71 5.7 21.12 12 14.82 18.3 21.12 19.71 19.71 13.41 13.41 19.71 7.11z"/>
            ) : (
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-pink-100 bg-white/90">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-gray-700 hover:text-brand-700 transition"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" onClick={() => setOpen(false)}>Book Appointment</a>
          </div>
        </div>
      )}
    </header>
  );
}
