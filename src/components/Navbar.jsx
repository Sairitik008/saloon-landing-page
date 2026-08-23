import React, { useState, useEffect } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "gallery", label: "Gallery" },
  { id: "testimonials", label: "Reviews" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-brand-900/95 backdrop-blur-md shadow-md border-b border-brand-500/20"
        : "bg-brand-900/90 backdrop-blur-md border-b border-brand-500/10"
        }`}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group" aria-label="Glow Beauty Salon Home">
          <span className="font-display font-medium text-2xl md:text-3xl tracking-[0.15em] text-white">
            GLOW BEAUTY
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center space-x-8 flex-1" role="navigation" aria-label="Main navigation">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary px-7 py-3">
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden p-2 text-brand-500 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
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
          className="md:hidden border-t border-brand-500/20 bg-brand-900/98 backdrop-blur-md absolute w-full"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="container py-4 flex flex-col gap-2 relative z-50">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="px-4 py-3 text-xs uppercase tracking-[0.15em] font-medium text-brand-100 hover:text-brand-500 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                className="btn-primary w-full text-center"
                onClick={() => setOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
