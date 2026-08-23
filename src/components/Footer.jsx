import React from "react";

const quickLinks = [
  { label: "Services", id: "services" },
  { label: "Gallery", id: "gallery" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V1.5c-.32-.04-1.45-.15-2.75-.15-2.71 0-4.75 1.66-4.75 4.75v2.89h-3v4h3V22.5h4V13.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-500/20 bg-brand-900">
      {/* Main Footer Grid */}
      <div className="container py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-brand-100/70">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-3 mb-6" aria-label="Glow Beauty Salon">
            <span className="font-display text-2xl text-white tracking-widest uppercase">
              GLOW BEAUTY
            </span>
          </a>
          <p className="text-sm font-light leading-relaxed mb-6">
            Nagpur's premier beauty destination offering bespoke rituals, expert hair styling,
            and flawless elegance.
          </p>
          <address className="not-italic text-sm font-light leading-loose">
            <span className="block text-brand-500 uppercase tracking-widest text-[0.65rem] mb-1 font-bold">Location</span>
            123 Beauty Avenue, Ramdaspeth,<br />
            Nagpur, Maharashtra – 440010<br />
            <br />
            <span className="block text-brand-500 uppercase tracking-widest text-[0.65rem] mb-1 font-bold">Contact</span>
            <a href="tel:+911234567890" className="hover:text-brand-500 transition-colors block">+91 12345 67890</a>
            <a href="mailto:hello@glowbeautysalon.in" className="hover:text-brand-500 transition-colors block">hello@glowbeauty.in</a>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[0.65rem] font-bold text-brand-500 mb-6 uppercase tracking-widest">Directory</h4>
          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm font-light hover:text-brand-500 transition-colors flex items-center gap-2 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Hours */}
        <div>
          <h4 className="text-[0.65rem] font-bold text-brand-500 mb-6 uppercase tracking-widest">Working Hours</h4>
          <ul className="space-y-3 text-sm font-light mb-10">
            <li className="flex justify-between border-b border-brand-500/10 pb-2"><span>Mon – Fri</span><span className="text-brand-100">10:00 AM – 8:00 PM</span></li>
            <li className="flex justify-between border-b border-brand-500/10 pb-2"><span>Saturday</span><span className="text-brand-100">9:00 AM – 9:00 PM</span></li>
            <li className="flex justify-between border-b border-brand-500/10 pb-2"><span>Sunday</span><span className="text-brand-100">10:00 AM – 6:00 PM</span></li>
          </ul>

          <h4 className="text-[0.65rem] font-bold text-brand-500 mb-4 uppercase tracking-widest">Connect</h4>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Follow us on ${s.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-brand-500/30 flex items-center justify-center text-brand-500 hover:text-brand-900 hover:border-brand-500 hover:bg-brand-500 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-500/20 py-8">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.65rem] uppercase tracking-widest text-brand-100/40">
          <p>© {year} GLOW BEAUTY SALON. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
