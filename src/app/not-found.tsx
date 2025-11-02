"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
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

        {/* 404 텍스트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-extrabold text-[#60594E] mb-4 md:mb-6 leading-none">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#60594E] mb-3 md:mb-4">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-[#60594E] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4">
            요청하신 페이지가 존재하지 않거나
            <br className="hidden sm:block" />
            이동되었을 수 있습니다.
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

