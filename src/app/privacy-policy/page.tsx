import type { Metadata } from "next";
import { Navbar, NavbarMobile } from "@/widgets/Navbar";
import { Footer, FooterMobile } from "@/widgets/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 집밥",
  description: "집밥 서비스의 개인정보처리방침 안내",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#FFF5EF] via-[#FFF8F3] to-[#FFF8F3]">
      {/* Navbar */}
      <Navbar />
      <NavbarMobile />

      <div className="max-w-3xl mx-auto px-6 pt-[110px] md:pt-28 pb-12 md:pb-16">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">개인정보처리방침</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          집밥(이하 "서비스")는 사용자 개인정보를 중요시하며, 「개인정보보호법」 등 관련 법령을 준수합니다. 본 방침은 서비스 이용 시 수집되는 개인정보의 항목, 이용 목적, 보관 기간, 파기 절차에 대해 설명합니다.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">1. 수집하는 개인정보 항목</h2>
            <p className="text-gray-600 leading-relaxed mb-3">서비스는 회원가입 또는 로그인 시 아래의 정보를 수집할 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <span className="font-medium text-gray-700">필수</span>: 이메일, 닉네임, 프로필 정보 (카카오/애플 OAuth 로그인)
              </li>
              <li>
                <span className="font-medium text-gray-700">선택</span>: 프로필 이미지, 알림 설정 정보 (사용자 입력)
              </li>
              <li>
                <span className="font-medium text-gray-700">자동수집</span>: 기기 정보(모델명, OS, 앱 버전), 이용 로그 (앱 실행 시 자동 수집)
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">서비스는 만 14세 미만 아동의 회원가입을 허용하지 않습니다.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">2. 개인정보 이용 목적</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>회원 식별 및 로그인 처리</li>
              <li>서비스 기본 기능 제공</li>
              <li>신고/문의 대응 등 서비스 운영</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">3. 개인정보 보관 기간</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>회원 탈퇴 시 즉시 파기</li>
              <li>단, 관련 법령에 따른 보관이 필요한 경우 해당 기간 동안 보관</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">4. 개인정보 제3자 제공</h2>
            <p className="text-gray-600 leading-relaxed">서비스는 법령에 의거한 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다.</p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">5. 개인정보 처리 위탁</h2>
            <p className="text-gray-600 leading-relaxed mb-2">서비스는 원활한 운영을 위해 다음과 같이 개인정보 처리를 위탁할 수 있습니다.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>
                <span className="font-medium text-gray-700">Kakao Corp., Apple Inc.</span> — 소셜 로그인 인증 (회원 탈퇴 또는 위탁 종료 시까지 보유 및 이용)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">6. 개인정보 파기방법</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>전자 파일 형태: 복구 불가능한 방법으로 삭제</li>
              <li>종이 문서: 분쇄 또는 소각</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">7. 이용자 권리</h2>
            <p className="text-gray-600 leading-relaxed">
              사용자는 언제든지 개인정보 열람, 정정, 삭제, 처리정지를 요청할 수 있습니다. 문의: <a href="mailto:sunwoo11228@gmail.com" className="underline">sunwoo11228@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">8. 개인정보보호 책임자</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>책임자: 김선우</li>
              <li>이메일: <a href="mailto:sunwoo11228@gmail.com" className="underline">sunwoo11228@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">9. 변경 시 고지</h2>
            <p className="text-gray-600 leading-relaxed">본 방침은 변경 시 앱 내 공지 또는 웹 공지로 안내됩니다.</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
      <FooterMobile />
    </main>
  );
}


