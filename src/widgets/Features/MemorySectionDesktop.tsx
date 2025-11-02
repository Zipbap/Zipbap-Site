"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MemorySectionDesktop() {
  return (
    <section className="hidden md:flex flex-col items-center justify-center text-center py-24 md:py-32 bg-gradient-to-b from-white via-zipbap-secondary via-[#FFF8F3] to-[#FFF8F3] w-full px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zipbap-dark mb-4 leading-tight">
          우리 엄마의 <span className="text-zipbap-primary">손맛</span>이 그리울 때,
          <br />
          가족의 <span className="text-zipbap-primary">추억</span>이 필요할 때
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
          소중한 가족 레시피와 함께 담긴 따뜻한 추억을 한 곳에 모아보세요.
        </p>
      </motion.div>

      {/* 3개의 이미지를 좌우로 배치 */}
      <div className="flex items-center justify-center gap-6 lg:gap-8 w-full max-w-7xl">
        {/* 좌측 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/assets/feature-interfaces1.svg"
            alt="인터페이스 1"
            width={400}
            height={800}
            className="w-full max-w-[400px] drop-shadow-[0_30px_80px_rgba(255,107,0,0.12)] rounded-[32px]"
          />
        </motion.div>

        {/* 중앙 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/assets/feature-interfaces2.svg"
            alt="인터페이스 2"
            width={400}
            height={800}
            className="w-full max-w-[400px] drop-shadow-[0_30px_80px_rgba(255,107,0,0.12)] rounded-[32px]"
          />
        </motion.div>

        {/* 우측 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-50px" }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/assets/feature-interfaces3.svg"
            alt="인터페이스 3"
            width={400}
            height={800}
            className="w-full max-w-[400px] drop-shadow-[0_30px_80px_rgba(255,107,0,0.12)] rounded-[32px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
