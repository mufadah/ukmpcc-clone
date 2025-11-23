import foto from "./assets/fotbar.JPG";

export default function App() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${foto})` }}
    >
      {/* Overlay gelap opsional agar teks lebih jelas */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten App */}
      <div className="relative z-10 pt-40 text-white">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-right px-6 sm:px-12 md:px-20 lg:px-32">
          POLYTECHNIC<br/> COMPUTER CLUB
        </h1>

        {/* konten lain di sini */}
      </div>
    </div>
  );
}
