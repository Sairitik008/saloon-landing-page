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
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    <section className="bg-brand-900 py-24 border-t border-brand-500/20" id="contact">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl text-white tracking-widest uppercase">Reserve Your Time</h2>
          <div className="w-16 h-[1px] bg-brand-500 mx-auto mt-6"></div>
          <p className="mt-6 text-brand-100/60 font-light max-w-md mx-auto text-sm leading-relaxed">
            Connect with our specialists and let us curate your perfect session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start lg:gap-16">

          {/* ── Left: Contact Info ─────────────────── */}
          <div className="h-full flex flex-col gap-10">
            <div>
              <h3 className="font-display text-2xl text-white tracking-widest uppercase mb-6">Directory</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="text-brand-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" /></svg>
                  </span>
                  <div>
                    <h4 className="text-[0.65rem] font-bold text-brand-500 uppercase tracking-widest mb-1">Our Address</h4>
                    <address className="not-italic text-sm text-brand-100/70 leading-relaxed font-light">
                      123 Beauty Avenue, Near Central Mall,<br />
                      Ramdaspeth, Nagpur, Maharashtra – 440010
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-brand-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </span>
                  <div>
                    <h4 className="text-[0.65rem] font-bold text-brand-500 uppercase tracking-widest mb-1">Phone</h4>
                    <a href="tel:+911234567890" className="text-sm text-brand-100/70 hover:text-brand-500 font-light transition-colors">
                      +91 12345 67890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-brand-500 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </span>
                  <div>
                    <h4 className="text-[0.65rem] font-bold text-brand-500 uppercase tracking-widest mb-1">Email</h4>
                    <a href="mailto:hello@glowbeautysalon.in" className="text-sm text-brand-100/70 hover:text-brand-500 font-light transition-colors">
                      hello@glowbeautysalon.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-none overflow-hidden border border-brand-500/20 shadow-brand-sm mt-auto grayscale filter contrast-75 brightness-75 hover:grayscale-0 hover:contrast-100 transition-all duration-700">
              <iframe
                title="Glow Beauty Salon Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.493125563302!2d79.0882!3d21.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ3LjgiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1623756812934!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ── Right: Booking Form ─────────────────── */}
          <div className="p-8 lg:p-10 bg-brand-800 border border-brand-500/10">
            <h3 className="font-display text-2xl text-white tracking-widest uppercase mb-8">Send Details</h3>

            {status === "success" ? (
              <div className="flex flex-col py-10">
                <h4 className="text-xl font-display text-brand-500 tracking-widest">Received.</h4>
                <p className="mt-4 text-sm text-brand-100/60 font-light leading-relaxed">
                  Your inquiry has been successfully dispatched. Our concierge will be in contact with you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[0.65rem] tracking-widest uppercase font-bold text-brand-500 border-b border-brand-500 pb-1 w-fit hover:text-white transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-[0.65rem] uppercase tracking-widest text-brand-100/50 mb-2">
                    Full Name
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
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[0.65rem] uppercase tracking-widest text-brand-100/50 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[0.65rem] uppercase tracking-widest text-brand-100/50 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[0.65rem] uppercase tracking-widest text-brand-100/50 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="" className="text-gray-900 bg-white">Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="text-gray-900 bg-white">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[0.65rem] uppercase tracking-widest text-brand-100/50 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input resize-none py-2"
                  />
                </div>

                {status === "error" && (
                  <div className="text-red-400 text-xs font-light tracking-wide border-l border-red-400 pl-3">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full mt-4 btn-primary font-bold ${status === "loading" ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {status === "loading" ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
