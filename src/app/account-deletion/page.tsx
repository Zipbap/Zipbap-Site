import type { Metadata } from "next";
import { Navbar, NavbarMobile } from "@/widgets/Navbar";
import { Footer, FooterMobile } from "@/widgets/Footer";

export const metadata: Metadata = {
  title: "계정 삭제 안내 - 집밥",
  description: "집밥(Zipbap) 서비스의 계정 및 개인정보 삭제 방법 안내",
  robots: { index: true, follow: true },
};

export default function AccountDeletionPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#FFF5EF] via-[#FFF8F3] to-[#FFF8F3]">
      {/* Navbar */}
      <Navbar />
      <NavbarMobile />

      <div className="max-w-3xl mx-auto px-6 pt-[110px] md:pt-28 pb-12 md:pb-16">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">계정 삭제 안내 (Account Deletion Policy)</h1>
        <p className="text-gray-600 leading-relaxed mb-8">집밥(Zipbap) 서비스의 계정 및 개인정보 삭제 방법을 안내드립니다.</p>

        {/* 1. 계정 삭제 방법 */}
        <section className="space-y-4 mb-8">
          <h2 className="text-lg font-medium text-gray-800">1. 계정 삭제 방법</h2>
          <p className="text-gray-600">집밥은 카카오 및 애플 소셜 로그인 방식을 사용합니다. 계정 삭제를 원하실 경우, 아래 이메일을 통해 요청하실 수 있습니다.</p>
          <div className="bg-white/70 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 font-medium mb-1">📩 계정 삭제 요청 이메일</p>
            <a href="mailto:sunwoo11228@gmail.com" className="text-zipbap-primary underline">sunwoo11228@gmail.com</a>
          </div>
          <div className="bg-white/70 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 font-medium mb-2">이메일 제목 예시</p>
            <p className="text-gray-600">[집밥 계정 삭제 요청] 이름 / 로그인 방식(카카오 또는 애플)</p>
          </div>
          <div className="bg-white/70 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 font-medium mb-2">이메일 내용 예시</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>안녕하세요. 집밥 서비스 계정 삭제 요청드립니다.</li>
              <li>이름: (본인 이름)</li>
              <li>로그인 방식: (카카오 또는 애플)</li>
            </ul>
          </div>
          <div className="bg-white/70 border border-gray-200 rounded-lg p-4">
            <p className="text-gray-700 font-medium mb-1">또는 앱 내 메뉴에서 직접 삭제할 수 있습니다.</p>
            <p className="text-gray-600">앱 경로: 설정 → 계정관리 → 회원탈퇴</p>
          </div>
        </section>

        {/* 2. 삭제되는 데이터 범위 */}
        <section className="space-y-3 mb-8">
          <h2 className="text-lg font-medium text-gray-800">2. 삭제되는 데이터 범위</h2>
          <p className="text-gray-600">계정 삭제 요청이 확인되면 아래 데이터가 삭제됩니다:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>계정 정보: 이메일, 닉네임, 프로필 등</li>
            <li>개인 설정 정보: 앱 설정, 저장 목록 등</li>
            <li>사용자 활동 데이터: 작성 내용 및 사용자 컨텐츠</li>
          </ul>
        </section>

        {/* 3. 보관 예외 데이터 */}
        <section className="space-y-3 mb-8">
          <h2 className="text-lg font-medium text-gray-800">3. 보관 예외 데이터 (법적 보존)</h2>
          <p className="text-gray-600">관련 법령에 따라 아래 데이터는 최대 30일 동안 보관 후 자동 삭제됩니다.</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>접속 로그(IP 등): 서비스 악용 방지 및 분쟁 발생 대비 — 30일</li>
          </ul>
        </section>

        {/* 4. 처리 기간 */}
        <section className="space-y-3 mb-8">
          <h2 className="text-lg font-medium text-gray-800">4. 처리 기간</h2>
          <p className="text-gray-600">계정 삭제 요청은 영업일 기준 7일 이내 처리되며, 처리 완료 시 이메일로 안내드립니다.</p>
        </section>

        {/* 5. 문의 */}
        <section className="space-y-2 mb-10">
          <h2 className="text-lg font-medium text-gray-800">5. 문의</h2>
          <p className="text-gray-600">이메일: <a href="mailto:sunwoo11228@gmail.com" className="underline">sunwoo11228@gmail.com</a></p>
          <p className="text-gray-600">담당자: 김선우</p>
        </section>

        {/* 참고 문구 */}
        <p className="text-[12px] text-gray-500">본 계정 삭제 안내 정책은 관련 법령 및 서비스 정책에 따라 변경될 수 있으며, 변경 시 사전 공지합니다.</p>
      </div>

      {/* Footer */}
      <Footer />
      <FooterMobile />
    </main>
  );
}


