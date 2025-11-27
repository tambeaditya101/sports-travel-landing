"use client";
import Image from "next/image";

export default function FeaturedEvent() {
  return (
    <section id="featured-event" className="relative bg-white pt-28 pb-16">
      {/* OVERLAPPING CARD */}
      <div
        className="
          max-w-5xl mx-auto 
          -mt-40 md:-mt-48   /* Stronger overlap on mobile */
          px-7               /* Add breathing space on mobile */
          relative z-20
        "
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="relative w-full md:w-1/2 h-72 md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80"
              alt="F1 Japan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Text */}
          <div className="p-8 flex flex-col justify-center md:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Featured: F1 Japan 2025
            </h2>

            <p className="font-heading text-sm md:text-base text-orange-600 tracking-wide mb-6">
              PIT ACCESS · PADDOCK WALK · PREMIUM GRANDSTAND
            </p>

            <p className="font-sans text-sm md:text-base text-slate-600 mb-5">
              📅 Race Weekend:{" "}
              <span className="font-semibold text-slate-800">
                Aug 16–17, 2025
              </span>
            </p>

            <button className="self-start bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-heading font-semibold shadow-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 active:scale-95 tracking-tight">
              View Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
