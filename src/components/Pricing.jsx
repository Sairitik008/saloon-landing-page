const items = [
  { name: "Haircut", price: "₹300" },
  { name: "Hair Color", price: "₹1500" },
  { name: "Facial", price: "₹800" },
  { name: "Bridal Makeup", price: "₹5000" }
];

export default function Pricing() {
  return (
    <div className="container">
      <h2 className="section-title">Pricing</h2>
      <p className="section-subtitle">Transparent rates for top-quality services</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.name} className="card flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{it.name}</h3>
            </div>
            <div className="text-brand-700 font-bold">{it.price}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-500">
        Taxes may apply. Custom packages available on request.
      </div>
    </div>
  );
}
