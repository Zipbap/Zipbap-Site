"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <section id="download" className="w-full py-16 md:py-32 bg-gradient-to-b from-[#FFF8F3] via-zipbap-secondary via-[#FFF8F3] to-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center justify-center gap-4 md:gap-6 max-w-3xl mx-auto px-6"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-zipbap-dark leading-tight">
          지금 <span className="text-zipbap-primary">Zipbap</span> 앱을 만나보세요
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg md:text-xl">따뜻한 이야기의 시작, 가족의 레시피북</p>

        {/* 앱스토어 & 플레이스토어 버튼 */}
        <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center gap-2 md:gap-4 mt-4 md:mt-8 w-full md:w-auto max-w-md md:max-w-none mx-auto px-2 md:px-0">
          <motion.a
            href="/coming-soon"
            // TODO: 링크로 변경 예정 - 실제 앱스토어 링크로 교체
            // href="https://apps.apple.com/app/zipbap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1 md:gap-2 bg-black text-white px-2 py-2.5 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto justify-center md:justify-start min-w-0"
          >
            <svg className="w-4 h-4 md:w-7 md:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.08.41-2.22 1.05-3.11z"/>
            </svg>
            <div className="text-left min-w-0">
              <div className="hidden md:block">
                <span className="text-xs md:text-sm">Download on the </span>
                <span className="text-base md:text-lg font-semibold">App Store</span>
              </div>
              <div className="md:hidden text-[10px] sm:text-xs font-semibold truncate">App Store</div>
            </div>
          </motion.a>

          <motion.a
            href="/coming-soon"
            // TODO: 링크로 변경 예정 - 실제 플레이스토어 링크로 교체
            // href="https://play.google.com/store/apps/details?id=com.zipbap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-1 md:gap-2 bg-white text-gray-800 border border-gray-200 px-2 py-2.5 md:px-8 md:py-4 rounded-xl shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-300 w-full md:w-auto justify-center md:justify-start min-w-0"
          >
            <svg className="w-4 h-4 md:w-7 md:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.05L13.69,12L3.84,21.95C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.94C20.5,11.34 20.5,11.67 20.16,12.06L14.54,17.68L13.69,16.83L19.31,11.21L13.69,5.58L14.54,4.73L20.16,10.94M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left min-w-0">
              <div className="hidden md:block">
                <span className="text-xs md:text-sm">GET IT ON </span>
                <span className="text-base md:text-lg font-semibold">Google Play</span>
              </div>
              <div className="md:hidden text-[10px] sm:text-xs font-semibold truncate">Google Play</div>
            </div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
