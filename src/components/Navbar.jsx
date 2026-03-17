import React, { useState, useEffect } from "react";

const links = [
  { id: "home",         label: "Home" },
  { id: "services",     label: "Services" },
  { id: "gallery",      label: "Gallery" },
  { id: "testimonials", label: "Reviews" },
  { id: "pricing",      label: "Pricing" },
  { id: "contact",      label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-pink-100"
          : "bg-white/80 backdrop-blur border-b border-pink-50"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group" aria-label="Glow Beauty Salon Home">
          <span
            className="inline-flex w-9 h-9 rounded-xl items-center justify-center font-bold text-white text-lg shadow-brand-sm"
            style={{ background: "linear-gradient(135deg, #f53c91 0%, #b41467 100%)" }}
          >
            G
          </span>
          <span className="text-lg font-bold text-gray-900 leading-tight">
            Glow <span className="gradient-text">Beauty</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-brand-700 hover:bg-brand-50 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-3 btn-primary text-sm px-5 py-2.5">
            Book Appointment
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden p-2 rounded-xl border border-pink-200 text-gray-700 hover:bg-brand-50 transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            {open ? (
              <path d="M18.3 5.71 12 12.01 5.7 5.7 4.29 7.11 10.59 13.41 4.29 19.71 5.7 21.12 12 14.82 18.3 21.12 19.71 19.71 13.41 13.41 19.71 7.11z" />
            ) : (
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="md:hidden border-t border-pink-100 bg-white/98 backdrop-blur-md"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="px-4 py-3 rounded-xl text-gray-700 hover:text-brand-700 hover:bg-brand-50 font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 btn-primary text-center"
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
