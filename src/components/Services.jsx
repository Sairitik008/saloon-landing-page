const services = [
  { title: "Hair Styling", desc: "Elegant cuts and styles tailored to you." },
  { title: "Hair Coloring", desc: "Vibrant colors and subtle highlights." },
  { title: "Facial & Skincare", desc: "Glow-boosting treatments for healthy skin." },
  { title: "Bridal Makeup", desc: "Picture-perfect looks for your big day." },
  { title: "Massage Therapy", desc: "Relaxing massages to de-stress and unwind." }
];

export default function Services() {
  return (
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">Experience premium salon care from experts</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="card">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-brand-100 border border-pink-200 grid place-items-center text-brand-700">
                ✨
              </span>
              <h3 className="text-xl font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
