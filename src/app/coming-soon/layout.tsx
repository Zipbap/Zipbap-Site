import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 준비 중 - Zipbap",
  description: "Zipbap 서비스 오픈을 위해 열심히 준비하고 있습니다. 조금만 기다려주세요!",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

