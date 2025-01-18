"use client";
import Image from "next/image";
import Sticky from "@/components/Sticky";
import { useEffect, useRef, useState } from "react";

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }

    const handleScrollVisibility = () => {
      setShowScrollButton(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 배경 비디오 */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ minHeight: "100vh" }}
        >
          <source src="/videos/cut.mp4" type="video/mp4" />
        </video>
        {/* 오버레이 */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      </div>

      {/* 스크롤 버튼 */}
      {showScrollButton && (
        <button
          onClick={handleScroll}
          className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 text-white animate-pulse"
          aria-label="스크롤 다운"
        >
          <div className="flex flex-col items-center gap-2 opacity-70">
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white"></div>
            <div className="w-1 h-1 rounded-full bg-white mb-2"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 opacity-70 hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      )}

      {/* 메인 콘텐츠 */}
      <div className="relative z-20">
        <Sticky />
        {/* 비디오 섹션 */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-white text-center">
            <Image
              src="/images/logo_w.png"
              alt="로고"
              className="w-[400px] mx-auto mb-4"
              width={400}
              height={133}
              priority
            />
            <h1 className="text-2xl font-bold mb-2">
              (주)하이테크 감정 평가 법인
            </h1>
            <p className="text-xl font-bold">
              국세청 제출용 양도·상속·증여 평가 국내 최다 경력
            </p>
            <p className="text-xl font-bold">
              영업권·특허권·상표권 무형 자산 평가
            </p>
            <p className="text-xl font-bold">
              서울 강남구 영동대로 511 트레이드 타워 13층
            </p>
          </div>
        </div>

        {/* 실제 콘텐츠 섹션 */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col gap-32">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-8">
                  가평가(탁상 감정)란?
                </h2>
                <p className="text-lg">
                  현장 조사 없이 탁상에서 감정하는 것을 뜻합니다.
                </p>
                <p className="text-lg">
                  정식 감정 평가를 앞두고 대략적인 감정 평가액의
                </p>
                <p className="text-lg">
                  예상 범위를 무료로 파악할 수 있습니다.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                <Image
                  src="/images/profile.png"
                  alt="김용진 평가사"
                  className="w-96 h-96 rounded-full mx-auto flex-shrink-0"
                  width={384}
                  height={384}
                />

                <div className="text-left flex-grow lg:max-w-xl">
                  <h2 className="text-2xl font-bold mb-2">
                    하이테크 대표 평가사
                  </h2>
                  <h2 className="text-xl font-bold mb-8">김용진 평가사 약력</h2>
                  <ul className="text-lg space-y-2">
                    <li>a. 감정 평가사 (국토 교통부 인증)</li>
                    <li>b. 기업 기술 가치 평가사 (한국 기업평가원 인증)</li>
                    <li>c. 국가 연구 지원 전문가 (산업통상부 인증)</li>
                    <li>d. 현 고양세무사회 고문 감정평가사</li>
                    <li>e. 현 부산세무사회 고문 감정평가사</li>
                    <li>f. 현 개업세무사회 고문 감정평가사</li>
                    <li>g. 현 특허법인누리 고문 감정평가사</li>
                    <li>h. 현 회계법인창천 고문 감정평가사</li>
                    <li>i. 현 건국대학교 부동산 아카데미 고문 감정평가사</li>
                    <li>j. 현 대한 가맹거래사 협회 고문 감정평가사</li>
                    <li>k. 현 하이테크 감정 평가 법인 대표이사</li>
                    <li>l. 현 하이테크 책임 컨설팅 대표이사</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                <Image
                  src="/images/profile02.jpeg"
                  alt="이돈호 대표변호사"
                  className="w-72 h-72 rounded-full mx-auto flex-shrink-0"
                  width={288}
                  height={288}
                />

                <div className="text-left flex-grow lg:max-w-xl">
                  <h3 className="text-lg mb-1">업무협약</h3>
                  <h2 className="text-lg font-bold mb-4 text-gray-700">
                    이돈호 대표변호사 약력
                  </h2>
                  <ul className="text-base space-y-1.5 text-gray-600">
                    <li className="font-bold">
                      • 23년 하반기/24년 상반기 형사 특정변호사 선정
                    </li>
                    <li className="font-bold">
                      • 형사사건 및 손해배상 사건 상담 1000건 이상
                    </li>
                    <li>• 現 노바법률사무소 대표변호사</li>
                    <li>• 現 대법원 국선변호인</li>
                    <li>• 102만 유튜버 효기심 자문변호사</li>
                    <li>• 89만 유튜버 1분과학 자문변호사</li>
                    <li>• 83만 유튜버 흑자헬스 자문변호사</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
