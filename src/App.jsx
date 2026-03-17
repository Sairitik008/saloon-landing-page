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
    </div>
  );
}
