import foto from "./assets/fotbar.webp";

export default function App() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${foto})` }}
    >
      {/* Overlay gelap opsional agar teks lebih jelas */}
      {/* <div className="absolute inset-0 bg-[#063a8e]/40"></div> */}
      <div className="absolute inset-0 bg-linear-to-t from-[#063a8e] to-[#063a8e]/10"></div>

      {/* Konten App */}
      <div className="relative z-10 pt-50 text-white">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-bold lg:text-right px-6 sm:px-12 md:px-20 lg:px-20 text-center">
          POLYTECHNIC
          <br /> COMPUTER CLUB
        </h1>
      </div>
      <div>
        <div className="relative z-10 mt-6 text-white px-6 sm:px-12 md:px-20 lg:px-20x lg:text-right text-center">
          <p className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
            2025/2026
          </p>
        </div>
      </div>
    </div>
  );
}
