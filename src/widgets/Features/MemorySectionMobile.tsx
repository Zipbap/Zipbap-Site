"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MemorySectionMobile() {
  return (
    <section className="flex md:hidden flex-col items-center justify-center text-center pt-8 pb-12 bg-gradient-to-b from-[#FFF5EF] via-[#FFF8F3] via-zipbap-secondary via-[#FFF8F3] to-[#FFF8F3] w-full px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zipbap-dark mb-3 leading-tight">
          우리 엄마의 <span className="text-zipbap-primary">손맛</span>이 그리울 때,
          <br />
          가족의 <span className="text-zipbap-primary">추억</span>이 필요할 때
        </h2>
        <p className="text-gray-600 text-sm mt-4 px-2">
          소중한 가족 레시피와 함께 담긴 따뜻한 추억을 한 곳에 모아보세요.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true, margin: "-30px" }}
        className="relative"
      >
        <Image
          src="/assets/feature-interfaces.svg"
          alt="가족의 추억"
          width={360}
          height={720}
          className="w-[320px] sm:w-[360px] drop-shadow-[0_20px_60px_rgba(255,107,0,0.12)] rounded-[28px]"
        />
      </motion.div>
    </section>
  );
}
