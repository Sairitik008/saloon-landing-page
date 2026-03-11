export default function Hero() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="section-title">
            Transform Your Style With Professional Salon Experts
          </h1>
          <p className="section-subtitle">
            Hair | Makeup | Skincare | Bridal Services
          </p>
          <div className="mt-6">
            <a href="#contact" className="btn-primary">Book Appointment</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-brand-100 via-pink-100 to-white border border-pink-200 shadow-inner" />
          <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur border border-pink-200 rounded-xl px-4 py-2 shadow">
            <span className="text-sm text-gray-700">Trusted by 1,000+ clients</span>
          </div>
        </div>
      </div>
    </div>
  );
}
