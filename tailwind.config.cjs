/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        zipbap: {
          primary: "#FF6B00", // 주 브랜드 컬러 (주황)
          secondary: "#FFF5EF", // 부드러운 배경색
          dark: "#1E1E1E", // 텍스트용 진한 컬러
          accent: "#FFA559", // 포인트 컬러 (hover용)
          light: "#FFF9F5", // 중간톤 배경
        },
      },
      fontFamily: {
        pretendard: ["'Pretendard Variable'", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.1)", // 기본 그림자
        strong: "0 40px 80px rgba(0,0,0,0.25)", // Hero / 이미지용
      },
      dropShadow: {
        card: "0 10px 20px rgba(0,0,0,0.15)",
        image: "0 40px 80px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        "zipbap-gradient": "linear-gradient(to bottom, #FFF3EA, #FFFFFF, #FFF5EF)",
      },
    },
  },
  plugins: [],
};
