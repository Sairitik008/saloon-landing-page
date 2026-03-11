const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556228724-4b5b04831e5c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc0?q=80&w=800&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <div className="container">
      <h2 className="section-title">Gallery</h2>
      <p className="section-subtitle">A glimpse of our work and ambience</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-pink-200 bg-white/60 backdrop-blur">
            <img
              src={src}
              alt={`Salon gallery ${i + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
