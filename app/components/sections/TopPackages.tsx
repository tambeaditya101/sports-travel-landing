import Image from "next/image";

const packages = [
  {
    title: "Wimbledon",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=700&q=80",
    price: "₹120,000",
    cta: "View",
  },
  {
    title: "NBA Finals",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=700&q=80",
    price: "₹150,000",
    cta: "View",
  },
  {
    title: "Athens 2024",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=700&q=80",
    price: "₹100,000",
    cta: "View",
  },
];

export default function TopPackages() {
  return (
    <section
      id="top-packages"
      className="relative max-w-7xl mx-auto py-20 px-4"
    >
      {/* Title */}
      <h2 className="font-heading text-4xl font-extrabold text-center text-slate-800 mb-12 tracking-tight">
        Top Packages
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {packages.map((p, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden rounded-t-2xl">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-slate-800 mb-2 tracking-tight">
                {p.title}
              </h3>

              <p className="font-sans text-orange-600 font-semibold mb-5 text-sm">
                Starting at {p.price}
              </p>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2.5 rounded-lg font-heading font-semibold tracking-tight shadow-md hover:from-orange-600 hover:to-red-700 transition-all active:scale-95">
                {p.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
