const stats = [
  { label: "12,000+", value: "Trips" },
  { label: "68%", value: "Repeat Customers" },
  { label: "4.9/5", value: "Rated Experiences" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Title */}
        <h2 className="font-heading text-4xl font-extrabold text-slate-800 mb-12 tracking-tight">
          Why Choose Us
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 py-8 px-6 border border-orange-100"
            >
              <div className="font-heading text-3xl font-extrabold text-orange-600 mb-1 tracking-tight">
                {s.label}
              </div>
              <div className="font-sans text-slate-600 font-medium text-lg">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-center gap-8 text-slate-700">
          <div className="flex items-center gap-3">
            <span className="text-orange-600 text-2xl">✓</span>
            <span className="font-heading text-lg tracking-tight">
              Choose your event
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-orange-600 text-2xl">✓</span>
            <span className="font-heading text-lg tracking-tight">
              We arrange travel + tickets
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-orange-600 text-2xl">✓</span>
            <span className="font-heading text-lg tracking-tight">
              Enjoy a seamless sports experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
