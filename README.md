# UKM PCC Website Clone --- React + Vite + Tailwind CSS

## 1. Pendahuluan

Proyek ini bertujuan membuat ulang tampilan dan beberapa fitur dasar
dari website **ukmpcc.org** menggunakan React, Vite, dan Tailwind CSS.

## 2. Persiapan Awal

Pastikan Node.js 18+ terinstal:

    node -v
    npm -v

## 3. Instalasi React + Vite

    npm create vite@latest pcc-clone --template react
    cd pcc-clone
    npm install

## 4. Instalasi Tailwind CSS

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

### Konfigurasi `tailwind.config.js`

    export default {
      content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
      theme: { extend: {} },
      plugins: [],
    }

### Tambahkan pada `src/index.css`

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## 5. Struktur Folder

    src/
     ├── assets/
     ├── components/
     ├── pages/
     ├── App.jsx
     ├── main.jsx
     └── index.css

## 6. Routing Dasar

Install:

    npm install react-router-dom

Contoh `App.jsx`:

    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import Home from "./pages/Home";
    import Profile from "./pages/Profile";
    import Kegiatan from "./pages/Kegiatan";
    import Kontak from "./pages/Kontak";

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/kegiatan" element={<Kegiatan />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </Router>
      );
    }
    export default App;

## 7. Contoh Komponen

### `Navbar.jsx`

    export default function Navbar() {
      return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow">
          <h1 className="text-xl font-bold text-blue-600">UKM PCC</h1>
          <ul className="flex gap-6 text-gray-700">
            <li><a href="/" className="hover:text-blue-600">Beranda</a></li>
            <li><a href="/profil" className="hover:text-blue-600">Profil</a></li>
            <li><a href="/kegiatan" className="hover:text-blue-600">Kegiatan</a></li>
            <li><a href="/kontak" className="hover:text-blue-600">Kontak</a></li>
          </ul>
        </nav>
      );
    }

### `Hero.jsx`

    export default function Hero() {
      return (
        <section className="h-[500px] flex flex-col items-center justify-center bg-linear-to-br from-blue-600 to-purple-600 text-white">
          <h2 className="text-4xl font-bold">Unit Kegiatan Mahasiswa PCC</h2>
          <p className="text-lg mt-4">Politeknik Negeri Semarang</p>
        </section>
      );
    }

## 8. Menjalankan Proyek

    npm run dev

## 9. Build Produksi

    npm run build
    npm run preview

## 10. Tips Pengembangan

-   Gunakan utility Tailwind (flex, grid, padding, margin).
-   Buat komponen reusable seperti Card Kegiatan.
-   Simpan aset pada `/src/assets`.

## 11. Penutup

Dokumentasi ini berfungsi sebagai panduan lengkap membangun clone
website UKM PCC menggunakan React, Vite, dan Tailwind CSS.
