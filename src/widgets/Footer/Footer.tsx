export default function Footer() {
  return (
    <footer className="hidden md:flex w-full py-12 bg-white border-t border-zipbap-secondary/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
          {/* 사업자 정보 */}
          <div className="flex-1">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              <div className="space-y-1">
                <p className="text-gray-500 text-xs mb-1">상호명</p>
                <p className="text-gray-600 text-sm">집밥</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs mb-1">대표자명</p>
                <p className="text-gray-600 text-sm">김선우</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs mb-1">사업자등록번호</p>
                <p className="text-gray-600 text-sm">508-13-64056</p>
              </div>
              <div className="space-y-1 lg:col-span-2">
                <p className="text-gray-500 text-xs mb-1">사업장 주소</p>
                <p className="text-gray-600 text-sm">경기도 남양주시 와부읍 덕소로 286-1, 107동 503호</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-500 text-xs mb-1">이메일</p>
                <p className="text-gray-600 text-sm">sunwoo11228@gmail.com</p>
              </div>
            </div>
          </div>
          {/* About 섹션 (오른쪽) */}
          <div className="min-w-[160px]">
            <p className="text-gray-500 text-xs mb-2">About</p>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-gray-600 text-sm hover:underline">개인정보처리방침</a>
              </li>
              <li>
                <a href="/account-deletion" className="text-gray-600 text-sm hover:underline">계정 삭제 안내</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 저작권 정보 - 맨 아래 중앙 정렬 */}
        <div className="mt-8 flex items-end justify-center">
          <p className="text-gray-400 text-xs">© 2025 Zipbap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
