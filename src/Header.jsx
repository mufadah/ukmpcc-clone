import { useState, useEffect } from "react";
import logo from './assets/logopcc.webp';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Tutup mobile menu saat ukuran layar di atas md
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <>
      {/* Jika ingin ada jarak dari tepi seperti pada screenshot, gunakan top-4 left-4 right-4.
          Kalau mau full edge ubah menjadi fixed top-0 left-0 right-0 rounded-none */}
      <header className="fixed top-4 left-4 right-4 z-50">
        <div
          className="shadow-md fixed top-3 md:top-5 left-1/2 z-50 flex h-16 md:h-20 w-[95%] -translate-x-1/2 transform items-center justify-between bg-white/20 px-4 md:px-5 text-white backdrop-blur-md rounded-xl transition-all duration-300"
        >
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="PCC Logo"
              className="h-10 w-10 min-w-10 object-contain rounded"
            />
            <h1 className="text-white text-lg md:text-xl font-semibold tracking-wide">
              POLYTECHNIC COMPUTER CLUB
            </h1>
          </div>

          {/* Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-gray-200">Home</a>
            <a href="#about" className="text-white hover:text-gray-200">About</a>
            <a href="#event" className="text-white hover:text-gray-200">Event</a>
            <a href="#gallery" className="text-white hover:text-gray-200">Gallery</a>
            <a href="#structure" className="text-white hover:text-gray-200">Structure</a>
            <a href="#article" className="text-white hover:text-gray-200">Article</a>
          </nav>

          {/* Right: CTAs & mobile button */}
          <div className="flex items-center gap-3">
            {/* contoh tombol (opsional) */}
            <button className="hidden md:inline-block rounded-md bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
              Join
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10"
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu slide down */}
        <div
          className={`md:hidden mt-2 mx-auto max-w-7xl rounded-b-2xl overflow-hidden transition-all duration-200
                      ${isOpen ? "max-h-96" : "max-h-0"} `}
          aria-hidden={!isOpen}
        >
          <div className="bg-black/50 backdrop-blur-md px-4 py-3 border border-t-0 border-white/10">
            <a href="#" className="block py-2 text-white hover:text-gray-200">Home</a>
            <a href="#about" className="block py-2 text-white hover:text-gray-200">About</a>
            <a href="#event" className="block py-2 text-white hover:text-gray-200">Event</a>
            <a href="#gallery" className="block py-2 text-white hover:text-gray-200">Gallery</a>
            <a href="#structure" className="block py-2 text-white hover:text-gray-200">Structure</a>
            <a href="#article" className="block py-2 text-white hover:text-gray-200">Article</a>
          </div>
        </div>
      </header>
    </>
  );
}
