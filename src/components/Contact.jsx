export default function Contact() {
  return (
    <div className="container">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-subtitle">We’d love to hear from you</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 grid place-items-center rounded-full bg-brand-100 border border-pink-200">📞</span>
              <a href="tel:+911234567890" className="text-gray-800 hover:text-brand-700">+91 12345 67890</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 grid place-items-center rounded-full bg-brand-100 border border-pink-200">✉️</span>
              <a href="mailto:hello@glowsalon.example" className="text-gray-800 hover:text-brand-700">hello@glowsalon.example</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 grid place-items-center rounded-full bg-brand-100 border border-pink-200">📍</span>
              <div>
                Glow Beauty Salon, MG Road, Bengaluru, India
              </div>
            </div>
            <div className="mt-6">
              <a href="#home" className="btn-primary">Back to Top</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="w-full h-64 grid place-items-center bg-pink-50 border border-pink-200 rounded-xl text-gray-600">
            Google Maps placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
