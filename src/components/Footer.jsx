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
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V1.5c-.32-.04-1.45-.15-2.75-.15-2.71 0-4.75 1.66-4.75 4.75v2.89h-3v4h3V22.5h4V13.5z" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C24.02 5.367 18.637 0 12.017 0z" />
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
