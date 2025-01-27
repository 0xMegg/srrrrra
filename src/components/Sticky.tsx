"use client";
import Image from "next/image";

export default function Sticky() {
  return (
    <div className="hidden lg:block fixed right-12 bottom-12 z-50">
      <div className="flex flex-col gap-4">
        <div className="relative group">
          {/* 외부 테두리 효과 */}
          <div className="absolute inset-0 bg-black/80 rounded-[38px] blur-sm"></div>

          {/* 밝은색 아웃라인 */}
          <div className="absolute inset-0 rounded-[38px] bg-gradient-to-b from-white/30 to-white/10"></div>

          {/* 메인 스마트폰 프레임 */}
          <div className="relative backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white rounded-[30px] transition-all duration-300 border-[6px] border-black/80 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]">
            <div className="flex flex-col items-center w-32 h-56 relative">
              {/* 스마트폰 상단 노치 */}
              <div className="absolute top-2.5 w-12 h-2 bg-black rounded-xl"></div>

              {/* 콘텐츠 영역 */}
              <div className="flex flex-col items-center justify-between h-full py-10">
                {/* 상단 아이콘 섹션 */}
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-2 opacity-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-base font-medium opacity-90">
                    전화 상담
                  </span>
                </div>

                {/* 하단 전화번호 섹션 */}
                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-base font-medium">0507-1362-5983</span>
                </div>
              </div>

              {/* 스마트폰 하단 홈 버튼 */}
              <div className="absolute bottom-2.5 w-12 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
