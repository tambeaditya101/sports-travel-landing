export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        {/* Logo / Brand */}
        <div className="mb-4">
          <span className="font-heading text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent tracking-tight">
            SPORTS TRAVEL
          </span>
        </div>

        {/* Tagline */}
        <p className="font-sans text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
          Seamless sports travel experiences for fans worldwide.
        </p>

        {/* Divider */}
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mx-auto my-7"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          {["📘", "📸", "▶️"].map((icon, i) => (
            <span
              key={i}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg transition-all cursor-pointer
              hover:bg-orange-100 hover:text-orange-600"
            >
              {icon}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 font-sans text-sm text-slate-500">
          <a href="#" className="hover:text-orange-600 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            Terms
          </a>
          <a href="#" className="hover:text-orange-600 transition">
            Support
          </a>
        </div>

        {/* Copyright */}
        <p className="font-sans text-xs text-slate-400 mt-6">
          © {new Date().getFullYear()} Sports Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
