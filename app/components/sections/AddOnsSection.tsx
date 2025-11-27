"use client";
import Image from "next/image";

const addons = [
  {
    label: "VIP Transfers",
    img: "https://images.unsplash.com/photo-1468436139062-f60a71c5c892?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Bar Experience",
    img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=600&q=80",
  },
  {
    label: "Nightlife",
    img: "https://images.unsplash.com/photo-1519111887837-a48ccf9edc00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    label: "Stadium Access",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AddOnsSection() {
  return (
    <section
      id="add-ons"
      className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/40 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="font-heading text-4xl font-extrabold text-center text-orange-600 mb-14 tracking-tight">
          Add-Ons & VIP Experiences
        </h2>

        <div className="relative">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-20"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-20"></div>

          {/* Scrollable Row */}
          <div
            className="flex gap-10 overflow-x-auto pb-6 px-4 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {addons.map((item, i) => (
              <div
                key={i}
                className="group min-w-[240px] sm:min-w-[280px] bg-white rounded-3xl shadow-lg
                hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-200
                transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>

                {/* Text */}
                <div className="px-6 py-5 text-center">
                  <h3 className="font-heading text-xl font-semibold text-slate-800 mb-2 tracking-tight">
                    {item.label}
                  </h3>

                  {/* Accent underline */}
                  <span className="mx-auto block w-10 h-1.5 bg-orange-500 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
