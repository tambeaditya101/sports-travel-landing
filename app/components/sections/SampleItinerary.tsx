"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const itinerary = [
  {
    label: "Shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Photos",
  },
  {
    label: "Meet & Greet",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80",
    tag: "Photos",
  },
  {
    label: "Exclusive Live Treats",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
    tag: "Instagram",
  },
  {
    label: "City Tour",
    img: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?auto=format&fit=crop&w=600&q=80",
    tag: "Review",
  },
];

export default function SampleItinerary() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateFadeVisibility = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.offsetWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    updateFadeVisibility();
    el.addEventListener("scroll", updateFadeVisibility);
    window.addEventListener("resize", updateFadeVisibility);

    return () => {
      el.removeEventListener("scroll", updateFadeVisibility);
      window.removeEventListener("resize", updateFadeVisibility);
    };
  }, []);

  return (
    <section
      id="sample-itinerary"
      className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="font-heading text-4xl font-extrabold text-center text-orange-600 mb-12 tracking-tight">
          Sample Itinerary
        </h2>

        <div className="relative">
          {/* Left Fade */}
          <div
            className={`absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-20 transition-all duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Right Fade */}
          <div
            className={`absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-20 transition-all duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Scrollable Row */}
          <div
            ref={rowRef}
            className="flex gap-10 overflow-x-auto px-4 pb-6 scroll-smooth"
          >
            {itinerary.map((item, i) => (
              <div
                key={i}
                className={`
                  min-w-[240px] sm:min-w-[280px]
                  bg-white shadow-lg rounded-3xl overflow-hidden 
                  transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-200
                  cursor-pointer
                  ${i % 2 ? "mt-8" : "mt-0"}
                `}
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>

                {/* Text */}
                <div className="px-6 py-5 text-center">
                  <h3 className="font-heading text-lg font-bold text-slate-800 mb-1 tracking-tight">
                    {item.label}
                  </h3>

                  <span className="font-sans text-sm font-semibold text-orange-600 tracking-wide">
                    {item.tag}
                  </span>

                  {/* Underline */}
                  <span className="w-10 h-1.5 bg-orange-500 rounded-full mx-auto mt-3 block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
