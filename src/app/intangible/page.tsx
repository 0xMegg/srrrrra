"use client";

import Image from "next/image";
import Link from "next/link";
import Sticky from "@/components/Sticky";
import { useEffect, useRef, useState } from "react";

export default function IntangibleLandingPage() {
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
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
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
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
      </div>

      {showScrollButton && (
        <button
          onClick={handleScroll}
          className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 text-white animate-pulse focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
          aria-label="스크롤 다운"
        >
          <div className="flex flex-col items-center gap-2 opacity-70">
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
            <div className="w-1 h-1 rounded-full bg-white mb-2" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 opacity-70 hover:opacity-100 transition-opacity"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}

      <div className="relative z-20">
        <Sticky />
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
              무형자산 평가
            </p>
            <p className="text-xl font-bold">
              영업권 · 특허권 · 상표권
            </p>
            <p className="text-xl font-bold">
              서울 강남구 영동대로 511 트레이드 타워 13층
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col gap-32">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-8">
                  무형자산 평가란?
                </h2>
                <p className="text-lg">
                  영업권, 특허권, 상표권 등 무형의 자산을
                </p>
                <p className="text-lg">
                  객관적 기준에 따라 금전적 가치로 평가합니다.
                </p>
                <p className="text-lg">
                  M&amp;A, 회계·세무, 손해배상 등에 활용됩니다.
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
                  <h2 className="text-2xl font-bold mb-2">하이테크 대표 평가사</h2>
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

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/intangible/consultation"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  무료 상담 신청
                </Link>
                <Link
                  href="/intangible/message"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  문자 상담 신청
                </Link>
                <Link
                  href="/intangible/evaluation"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  정식 평가 신청
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
