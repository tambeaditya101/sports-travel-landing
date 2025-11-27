"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[75vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1761312834559-8e5f5c8a12f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1400&q=80"
        fill
        alt="Hero Background"
        className="object-cover opacity-50"
        priority
      />

      <div className="relative z-10 pt-16 flex flex-col items-center max-w-4xl px-6">
        {/* 🔥 Premium Font Applied */}
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl leading-tight tracking-tight">
          Sports Travel Packages for Global Events
        </h1>
        <p className="font-sans mt-4 text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed">
          Curated, hassle-free adventures for passionate sports fans.
        </p>

        {/* 🔥 CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            className="bg-orange-600 px-8 py-3 rounded-full text-white font-heading font-bold text-lg shadow-lg hover:bg-orange-700 transition active:scale-95"
            onClick={() =>
              document?.getElementById("lead-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Plan My Trip
          </button>

          <button className="px-8 py-3 rounded-full border border-white/70 text-white font-heading font-semibold text-lg bg-white/10 hover:bg-white/20 transition active:scale-95">
            Browse Events
          </button>
        </div>
      </div>
    </section>
  );
}
