import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 text-gray-800">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="gallery" className="section">
          <Gallery />
        </section>
        <section id="pricing" className="section">
          <Pricing />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
