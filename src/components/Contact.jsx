import React, { useState } from "react";

const SERVICES = [
  "Bridal Makeup",
  "Hair Styling",
  "Skincare & Facials",
  "Hair Coloring",
  "Nail Art & Manicure",
  "Massage Therapy",
  "General Inquiry",
];

const INITIAL = { name: "", email: "", phone: "", service: "", message: "" };

export default function Contact() {
  const [formData, setFormData]     = useState(INITIAL);
  const [status, setStatus]         = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(formData),
      });

      // 1. Check for local dev 404 (Vite dev server doesn't host /api)
      if (response.status === 404 && window.location.hostname === "localhost") {
        setStatus("error");
        setErrorMsg("Local Test Info: The contact API only works on Vercel. Push to GitHub or run 'vercel dev' to test sending.");
        return;
      }

      // 2. Safely parse JSON
      let data = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (response.status === 200) {
        setStatus("success");
        setFormData(INITIAL);
      } else {
        setStatus("error");
        setErrorMsg(data.message || `Error ${response.status}: Failed to send message.`);
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
      setErrorMsg("Connection failed. Please check your internet or try again.");
    }
  };

  return (
    <div className="container">
      <div className="text-center max-w-2xl mx-auto">
        <span className="section-label">📅 Get in Touch</span>
        <h2 className="section-title">Book an Appointment at Glow Beauty Salon, Nagpur</h2>
        <p className="section-subtitle mx-auto">
          Ready for a transformation? Fill in the form and we'll confirm your
          appointment within 2 hours!
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">

        {/* ── Left: Contact Info ─────────────────── */}
        <div className="card h-full flex flex-col gap-6">
          <h3 className="text-xl font-bold text-gray-900">Visit or Call Us</h3>

          {/* Address */}
          <div className="flex items-start gap-4">
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)", border: "1px solid #ffc9e1" }}
            >
              📍
            </span>
            <div>
              <h4 className="font-semibold text-gray-900">Our Address</h4>
              <address className="not-italic text-sm text-gray-500 mt-0.5 leading-relaxed">
                123 Beauty Avenue, Near Central Mall,<br />
                Ramdaspeth, Nagpur, Maharashtra – 440010
              </address>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)", border: "1px solid #ffc9e1" }}
            >
              📞
            </span>
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <a
                href="tel:+911234567890"
                className="text-sm text-brand-600 hover:text-brand-800 font-medium transition-colors"
              >
                +91 12345 67890
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)", border: "1px solid #ffc9e1" }}
            >
              ✉️
            </span>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <a
                href="mailto:hello@glowbeautysalon.in"
                className="text-sm text-brand-600 hover:text-brand-800 font-medium transition-colors"
              >
                hello@glowbeautysalon.in
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-4">
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)", border: "1px solid #ffc9e1" }}
            >
              🕐
            </span>
            <div>
              <h4 className="font-semibold text-gray-900">Working Hours</h4>
              <p className="text-sm text-gray-500 mt-0.5">Mon – Sun: 10:00 AM – 8:00 PM</p>
            </div>
          </div>

          {/* CTA Links */}
          <div className="flex items-center gap-6 pt-2">
            <a href="tel:+911234567890" className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors flex items-center gap-1.5">
              <span>📞 Call Us Directly</span>
            </a>
            <a
              href="https://wa.me/911234567890?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors flex items-center gap-1.5"
            >
              <span>💬 Message on WhatsApp</span>
            </a>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-pink-100 shadow-sm mt-auto">
            <iframe
              title="Glow Beauty Salon Location – Ramdaspeth, Nagpur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.493125563302!2d79.0882!3d21.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ3LjgiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1623756812934!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Glow Beauty Salon location in Nagpur"
            />
          </div>
        </div>

        {/* ── Right: Booking Form ─────────────────── */}
        <div className="card">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Book an Appointment</h3>

          {status === "success" ? (
            /* ── Success State ── */
            <div className="flex flex-col items-center text-center py-8 px-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 shadow-brand-sm"
                style={{ background: "linear-gradient(135deg, #fff0f6 0%, #ffe4f0 100%)" }}
              >
                ✨
              </div>
              <h4 className="text-xl font-bold text-gray-900">Appointment Request Sent!</h4>
              <p className="mt-2 text-sm text-gray-500 max-w-xs">
                Thank you, we've received your enquiry. Our team will confirm
                your booking within 2 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 btn-primary text-sm"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-brand-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Priya Sharma"
                  autoComplete="name"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email Address <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 98765 XXXXX"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Message <span className="text-brand-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input resize-none"
                  placeholder="Tell us how we can help you, preferred date/time, etc."
                />
              </div>

              {/* Error Banner */}
              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-2 p-3.5 bg-red-50 text-red-600 text-sm rounded-xl border border-red-200"
                >
                  <span className="mt-0.5">⚠️</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full btn-primary ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending…
                  </span>
                ) : (
                  "Send Enquiry & Book Appointment"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                🔒 Your details are safe. We reply within 2 hours during working hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
