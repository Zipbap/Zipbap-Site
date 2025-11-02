"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroMobile() {
  return (
    <section className="flex md:hidden min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#FF8C42] via-[#FFB685] via-[#FFD4B3] via-[#FFE8D6] via-[#FFF0E5] to-[#FFF5EF] text-center px-0 pt-[0px] pb-8 relative overflow-x-visible">
      {/* 배경 장식 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* 상단 타이틀 영역 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-6 sm:mb-8 px-4"
      >
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white mb-3 sm:mb-4 px-2">
          언제든 꺼내볼 수 있는
          <br />
          나만의 가족 레시피북
        </h1>
        <div className="mt-3 sm:mt-4">
          <Image
            src="/assets/zipbap-logo2.svg"
            alt="Zipbap"
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto mx-auto"
            priority
          />
        </div>
      </motion.div>

      {/* 중앙 정렬된 폰 이미지 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-center w-full"
      >
        <div className="relative">
          <Image
            src="/assets/phone-mockup-main.svg"
            alt="Zipbap 모바일 메인"
            width={560}
            height={1120}
            className="w-[420px] sm:w-[480px] drop-shadow-[0_40px_100px_rgba(255,107,0,0.15)] rounded-[40px]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
