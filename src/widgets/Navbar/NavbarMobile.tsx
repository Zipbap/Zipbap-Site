"use client";

export default function NavbarMobile() {
  return (
    <nav className="flex md:hidden justify-between items-center w-full px-6 py-4 bg-white/95 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-zipbap-secondary/30 shadow-sm">
      <h1 className="text-xl font-extrabold text-zipbap-primary tracking-tight">
        <a href="/">Zipbap</a>
      </h1>
      <a
        href="#download"
        className="bg-zipbap-primary text-white font-semibold px-4 py-2 rounded-full text-sm shadow-md hover:bg-zipbap-accent hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        앱 다운로드
      </a>
    </nav>
  );
}
