import React from "react";

export default function Footer() {
  const socials = [
    {
      label: "Instagram",
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M13 3h3a1 1 0 0 1 1 1v3h-3v3h3v10h-4v-6h-3v6H6V10h3V7a4 4 0 0 1 4-4z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M22 5.94a7.59 7.59 0 0 1-2.17.6A3.78 3.78 0 0 0 21.4 4a7.57 7.57 0 0 1-2.4.92A3.78 3.78 0 0 0 12 8.37a10.74 10.74 0 0 1-8-4.06 3.78 3.78 0 0 0 1.17 5.04A3.75 3.75 0 0 1 3 9v.05a3.78 3.78 0 0 0 3.03 3.7 3.77 3.77 0 0 1-1 .13c-.24 0-.48-.02-.71-.06a3.78 3.78 0 0 0 3.52 2.62A7.58 7.58 0 0 1 2 17.54a10.7 10.7 0 0 0 5.8 1.7c6.97 0 10.78-5.77 10.78-10.78v-.5A7.67 7.67 0 0 0 22 5.94z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-pink-100 bg-white/80 backdrop-blur">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full bg-brand-600 text-white grid place-items-center font-bold">
            G
          </span>
          <span className="font-semibold">Glow Beauty Salon</span>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-gray-600 hover:text-brand-700 transition"
            >
              {s.svg}
            </a>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Glow Beauty Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
