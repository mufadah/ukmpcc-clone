import React from "react";
import logo from './assets/logopcc.png';

export default function Footer() {
  return (
    // Outer full-width background
    <footer className="fixed bottom-0 left-0 right-0 w-full bg-[#052b50] text-white z-40">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex items-start space-x-4">
            <img
              src={logo}
              alt="PCC Logo"
              className="h-20 w-20 object-contain"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold text-base md:text-lg tracking-wide">
                POLYTECHNIC COMPUTER CLUB (PCC)
              </h2>

              <div className="mt-3 flex space-x-3">
              <a href="https://www.instagram.com/pccpolines/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/instagram-new.png" alt="ig" />
              </a>
              <a href="https://www.facebook.com/ukmpcc" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook--v1.png" alt="fb" />
              </a>
              <a href="https://x.com/ukmpcc" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/x.png" alt="x" />
              </a>
              <a href="https://www.tiktok.com/@pcc.polines" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/tiktok--v1.png" alt="tiktok" />
              </a>
              <a href="https://www.youtube.com/@UKMPCCPOLINES" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/youtube-play.png" alt="yt" />
              </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Website</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Semarang, Indonesia</li>
                <li>Politeknik Negeri Semarang</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Service</h3>
              <ul className="space-y-2 text-sm">
                <li>Maintenance</li>
                <li>Web Project</li>
                <li>Store</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20"></div>

        <div className="mt-6 text-center text-sm text-white/90">
          © 2025 - PCC POLINES.
        </div>
      </div>
    </footer>
  );
}
