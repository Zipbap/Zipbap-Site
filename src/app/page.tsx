// src/app/page.tsx
import { HeroDesktop, HeroMobile } from "@/widgets/Hero";
import {
  MemorySectionDesktop,
  MemorySectionMobile,
} from "@/widgets/Features";
import DownloadSection from "@/widgets/Download/DownloadSection";
import { Navbar, NavbarMobile } from "@/widgets/Navbar";
import { Footer, FooterMobile } from "@/widgets/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden">
      {/* 🧭 Navbar */}
      <Navbar />
      <NavbarMobile />

      {/* 🌅 Hero Section */}
      <HeroDesktop />
      <HeroMobile />

      {/* 🍚 Feature Sections */}
      <MemorySectionDesktop />
      <MemorySectionMobile />

      {/* 📱 Download CTA */}
      <DownloadSection />

      {/* ⚓ Footer */}
      <Footer />
      <FooterMobile />
    </main>
  );
}
