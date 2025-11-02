export default function FooterMobile() {
  return (
    <footer className="flex md:hidden w-full py-8 bg-white border-t border-zipbap-secondary/30">
      <div className="w-full px-6">
        {/* 사업자 정보 */}
        <div className="space-y-5 mb-6">
          <div className="space-y-1">
            <p className="text-gray-500 text-[11px] mb-0.5">상호명</p>
            <p className="text-gray-600 text-sm">집밥</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-[11px] mb-0.5">대표자명</p>
            <p className="text-gray-600 text-sm">김선우</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-[11px] mb-0.5">사업자등록번호</p>
            <p className="text-gray-600 text-sm">508-13-64056</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-[11px] mb-0.5">사업장 주소</p>
            <p className="text-gray-600 text-sm leading-relaxed">경기도 남양주시 와부읍 덕소로 286-1, 107동 503호</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500 text-[11px] mb-0.5">이메일</p>
            <p className="text-gray-600 text-sm">sunwoo11228@gmail.com</p>
          </div>
        </div>
        
        {/* 저작권 정보 - 가운데 정렬 */}
        <div className="flex items-end justify-center">
          <p className="text-gray-400 text-[11px]">© 2025 Zipbap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
