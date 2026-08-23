import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Video from "./components/Video.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Team from "./components/Team.jsx";
import BeforeAfterSlider from "./components/BeforeAfterSlider.jsx";

export default function App() {
  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      <main>
        {/* Hero — white background */}
        <section id="home" className="section bg-hero-gradient">
          <Hero />
        </section>

        {/* Services — light pink alt */}
        <section id="services" className="section section-alt">
          <Services />
        </section>

        {/* Team */}
        <Team />

        {/* Transformations */}
        <section className="bg-hero-gradient py-24" id="transformations">
          <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl text-white tracking-widest uppercase mb-4">Signature Transformations</h2>
              <div className="w-16 h-[1px] bg-brand-500 mx-auto mb-8"></div>
              <p className="text-brand-100/60 font-light text-sm max-w-sm mx-auto">Witness the visible elevation in radiance and confidence.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <BeforeAfterSlider beforeImage="/images/before.JPG" afterImage="/images/after_upscayl_4x.jpg" />
            </div>
          </div>
        </section>

        {/* Gallery — white */}
        <section id="gallery" className="section">
          <Gallery />
        </section>

        {/* Testimonials — light pink alt */}
        <section id="testimonials" className="section section-alt">
          <Testimonials />
        </section>

        {/* Video — white */}
        <section id="video" className="section">
          <Video />
        </section>

        {/* Pricing — light pink alt */}
        <section id="pricing" className="section section-alt">
          <Pricing />
        </section>

        {/* Contact — white */}
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/911234567890?text=Hello%20Glow%20Beauty%21%20I%20would%20like%20to%20book%20a%20session."
        className="whatsapp-float group"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </a>
    </div>
  );
}
