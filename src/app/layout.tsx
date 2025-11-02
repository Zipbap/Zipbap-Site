import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "집밥 - 나만의 가족 레시피북",
  description: "가족의 손맛과 추억을 담은 따뜻한 레시피 플랫폼. 엄마의 비법, 할머니의 손맛, 우리 가족만의 레시피를 영원히 보존하세요.",
  keywords: ["레시피", "가족 레시피", "레시피북", "가족 추억", "손맛", "Zipbap", "집밥", "레시피 앱"],
  authors: [{ name: "Zipbap" }],
  creator: "Zipbap",
  publisher: "Zipbap",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://zipbap.kr",
    siteName: "Zipbap",
    title: "Zipbap - 나만의 가족 레시피북",
    description: "가족의 손맛과 추억을 담은 따뜻한 레시피 플랫폼. 엄마의 비법, 할머니의 손맛, 우리 가족만의 레시피를 영원히 보존하세요.",
    images: [
      {
        url: "/zipbap.svg",
        width: 1200,
        height: 630,
        alt: "Zipbap 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zipbap - 나만의 가족 레시피북",
    description: "가족의 손맛과 추억을 담은 따뜻한 레시피 플랫폼",
    images: ["/zipbap.svg"],
  },
  icons: {
    icon: "/zipbap.svg",
    shortcut: "/zipbap.svg",
    apple: "/zipbap.svg",
  },
  alternates: {
    canonical: "https://zipbap.kr",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans bg-white">{children}</body>
    </html>
  );
}
