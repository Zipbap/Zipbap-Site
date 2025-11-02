"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zipbap-secondary px-6 py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* 로고 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <Image
            src="/assets/zipbap-logo2.svg"
            alt="Zipbap"
            width={200}
            height={80}
            className="h-16 sm:h-20 md:h-24 w-auto mx-auto"
            priority
          />
        </motion.div>

        {/* 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#60594E] mb-4 md:mb-6 leading-tight px-4">
            서비스 오픈을 위해
            <br />
            열심히 준비하고 있어요! 🍚
          </h1>
          <p className="text-[#60594E] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 px-4">
            곧 만나뵐 수 있도록 최선을 다하고 있습니다.
            <br className="hidden sm:block" />
            조금만 기다려주세요!
          </p>
        </motion.div>

        {/* 홈으로 가기 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link
            href="/"
            className="inline-block bg-zipbap-primary text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            홈으로 돌아가기
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

