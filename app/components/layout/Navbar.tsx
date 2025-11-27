"use client";

import { useEffect, useState, useRef } from "react";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "top-packages", label: "Top Packages" },
  { id: "how-it-works", label: "How It Works" },
  { id: "add-ons", label: "Add-Ons" },
  { id: "lead-form", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const isScrollingRef = useRef(false);

  const MOBILE_NAV_HEIGHT = 80;
  const DESKTOP_NAV_HEIGHT = 92;

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isScrollingRef.current = true;
    setActiveId(id);

    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isMobile = window.innerWidth < 768;
    const NAV_HEIGHT = isMobile ? MOBILE_NAV_HEIGHT : DESKTOP_NAV_HEIGHT;
    const targetY = rect.top + scrollTop - NAV_HEIGHT;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setIsOpen(false);

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.4 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 h-16 md:h-20 bg-white/70 backdrop-blur-lg shadow-lg border-b border-orange-100/40">
      <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-3">
        {/* LOGO */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2 group h-full"
        >
          <img
            src="/logo.png"
            alt="Sports Event Travel Logo"
            className="max-h-[120%] w-auto select-none transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 font-sans font-medium text-slate-700">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative group transition-all duration-300 cursor-pointer font-heading text-md tracking-tight ${
                activeId === item.id ? "text-orange-600" : "text-slate-700"
              }`}
            >
              {item.label}

              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  activeId === item.id ? "scale-x-100" : ""
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => handleNavClick("lead-form")}
            className="ml-2 px-6 py-2 rounded-full font-heading font-bold shadow-lg text-white tracking-tight bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-300 hover:shadow-xl active:scale-95"
          >
            Plan My Trip
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden">
          <button
            className="p-2 text-3xl font-bold text-orange-600"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`
    md:hidden bg-orange-50 backdrop-blur-md border-t border-orange-100 shadow-inner overflow-hidden
    transition-[max-height,opacity] duration-300 ease-out
    ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
  `}
      >
        <div className="flex flex-col px-6 py-16 space-y-12 font-heading text-md tracking-tight">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`py-1 transition-all ${
                activeId === item.id
                  ? "text-orange-600 font-bold"
                  : "text-slate-700"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* CTA Button — now visible again */}
          <button
            onClick={() => handleNavClick("lead-form")}
            className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-heading font-bold shadow-lg hover:from-orange-600 hover:to-red-700 transition-all"
          >
            Plan My Trip
          </button>
        </div>
      </div>
    </nav>
  );
}
