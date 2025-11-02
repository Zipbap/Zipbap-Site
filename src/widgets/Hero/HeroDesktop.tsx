"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroDesktop() {
  return (
    <section className="hidden md:flex min-h-[90vh] w-full items-center justify-center bg-gradient-to-b from-zipbap-secondary via-[#FFF2E8] to-white px-6 md:px-12 lg:px-24 pt-32 pb-20">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* 왼쪽: 소개글 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 text-left"
        >
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-zipbap-primary to-zipbap-accent text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              🍚 가족 레시피를 영원히 간직하는 방법
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-zipbap-dark block mb-2">가족의 손맛을</span>
            <span className="bg-gradient-to-r from-zipbap-primary to-zipbap-accent bg-clip-text text-transparent block">
              영원히 간직하세요
            </span>
          </h1>
          <p className="text-gray-700 md:text-gray-800 text-lg md:text-xl leading-relaxed font-medium">
            엄마의 비법, 할머니의 손맛, 우리 가족만의 레시피를
            <br />
            한 곳에 모아 영원히 보존하고 나눠보세요.
          </p>
        </motion.div>

        {/* 오른쪽: 이미지 */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <Image
            src="/assets/phone-mockup-main.svg"
            alt="Zipbap 메인"
            width={480}
            height={960}
            className="w-full max-w-[480px] drop-shadow-[0_40px_80px_rgba(255,107,0,0.15)] rounded-[40px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
