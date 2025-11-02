"use client";

export default function Navbar() {
  return (
    <nav className="hidden md:flex justify-between items-center w-full px-6 md:px-12 lg:px-24 py-5 bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-zipbap-secondary/30 shadow-sm">
      <h1 className="text-2xl md:text-3xl font-extrabold text-zipbap-primary tracking-tight">Zipbap</h1>
      <a
        href="#download"
        className="bg-zipbap-primary text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:bg-zipbap-accent hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        앱 다운로드
      </a>
    </nav>
  );
}
