import React from "react";

const quickLinks = [
  { label: "Services",     id: "services" },
  { label: "Gallery",      id: "gallery" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Pricing",      id: "pricing" },
  { label: "Contact",      id: "contact" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M13 3h3a1 1 0 0 1 1 1v3h-3v3h3v10h-4v-6h-3v6H6V10h3V7a4 4 0 0 1 4-4z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M23 7s-.3-1.9-1.1-2.7c-1.1-1.1-2.3-1.1-2.8-1.2C16.2 3 12 3 12 3s-4.2 0-7.1.1c-.5.1-1.7.1-2.8 1.2C1.3 5.1 1 7 1 7S.7 9.2.7 11.3v1.9c0 2.1.3 4.2.3 4.2s.3 1.9 1.1 2.7c1.1 1.1 2.5 1 3.1 1.1C7.2 21.1 12 21 12 21s4.2 0 7.1-.1c.5-.1 1.7-.1 2.8-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.2v-1.9C23.3 9.2 23 7 23 7zM9.7 14.8V9l6.2 2.9-6.2 2.9z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-pink-100 bg-white">
      {/* CTA Band */}
      <div
        className="py-12"
        style={{ background: "linear-gradient(135deg, #f53c91 0%, #b41467 100%)" }}
      >
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Ready for Your Glow Up? ✨
          </h2>
          <p className="mt-2 text-pink-100 text-sm md:text-base max-w-md mx-auto">
            Experience the glow you deserve. Visit us for expert care and stunning results.
          </p>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2.5" aria-label="Glow Beauty Salon">
            <span
              className="inline-flex w-9 h-9 rounded-xl items-center justify-center font-bold text-white text-lg"
              style={{ background: "linear-gradient(135deg, #f53c91 0%, #b41467 100%)" }}
            >
              G
            </span>
            <span className="font-bold text-gray-900">
              Glow <span className="gradient-text">Beauty</span> Salon
            </span>
          </a>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Nagpur's premier beauty destination offering expert hair styling,
            bridal makeup, skincare treatments, and more. Your beauty and
            confidence are our top priority.
          </p>
          <address className="not-italic mt-4 text-sm text-gray-500">
            📍 123 Beauty Avenue, Ramdaspeth,<br />
            Nagpur, Maharashtra – 440010<br />
            📞 <a href="tel:+911234567890" className="hover:text-brand-600 transition-colors">+91 12345 67890</a>
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-gray-900 mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-gray-500 hover:text-brand-600 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-400 inline-block" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Hours */}
        <div>
          <h4 className="font-bold text-gray-900 mb-5">Follow Us</h4>
          <div className="flex items-center gap-3 mb-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={`Follow Glow Beauty Salon on ${s.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-pink-200 flex items-center justify-center text-gray-500 hover:text-brand-700 hover:border-brand-400 hover:bg-brand-50 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <h4 className="font-bold text-gray-900 mb-3">Working Hours</h4>
          <ul className="space-y-1 text-sm text-gray-500">
            <li className="flex justify-between"><span>Mon – Fri</span><span className="font-medium text-gray-700">10:00 AM – 8:00 PM</span></li>
            <li className="flex justify-between"><span>Saturday</span><span className="font-medium text-gray-700">9:00 AM – 9:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span><span className="font-medium text-gray-700">10:00 AM – 6:00 PM</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-100 py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {year} Glow Beauty Salon, Nagpur. All rights reserved.</p>
          <p>Made with ❤️ for beauty lovers in Nagpur</p>
        </div>
      </div>
    </footer>
  );
}
