"use client";
import Image from "next/image";
import Sticky from "@/components/Sticky";
import { useEffect, useRef, useState } from "react";
import { ChevronsDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
      <div className="absolute w-full h-screen z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ minHeight: "100vh" }}
        >
          <source src="/videos/cut.mp4" type="video/mp4" />
        </video>
        {/* 오버레이 */}
        <div className="absolute w-full h-full bg-black/50 z-10"></div>
      </div>

      {/* 스크롤 버튼 */}
      {showScrollButton && (
        <button
          onClick={handleScroll}
          className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 text-white animate-pulse"
          aria-label="스크롤 다운"
        >
          <ChevronsDown className="w-12 h-12" />
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
        <div className="bg-white w-full h-screen flex flex-col">
          {/* 김용진 소개 */}
          <div className="flex items-center pt-[65px] justify-center">
            {/* 이름 & 이미지 */}
            <div className="flex flex-col gap-4 mx-10">
              <p className="text-5xl font-bold">김용진 평가사</p>
              <Image
                src="/images/profile.png"
                alt="김용진 평가사"
                className="rounded-[100px] flex-shrink-0"
                width={350}
                height={350}
              />
            </div>
            {/* 소개 */}
            <div className="w-1/2 h-full flex flex-col gap-4 pt-[64px]">
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 감정 평가사 (국토 교통부 인증)</p>
                <p className="w-1/2">
                  ⚫ 기업 기술 가치 평가사 (한국 기업평가원 인증)
                </p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">
                  ⚫ 국가 연구 지원 전문가 (산업통상부 인증)
                </p>
                <p className="w-1/2">⚫ 현 고양세무사회 고문 감정평가사</p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 현 부산세무사회 고문 감정평가사</p>
                <p className="w-1/2">⚫ 현 개업세무사회 고문 감정평가사</p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 현 특허법인누리 고문 감정평가사</p>
                <p className="w-1/2">⚫ 현 회계법인창천 고문 감정평가사</p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">
                  ⚫ 현 건국대학교 부동산 아카데미 고문 감정평가사
                </p>
                <p className="w-1/2">
                  ⚫ 현 대한 가맹거래사 협회 고문 감정평가사
                </p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 현 하이테크 감정 평가 법인 대표이사</p>
                <p className="w-1/2">⚫ 현 하이테크 책임 컨설팅 대표이사</p>
              </div>
            </div>
          </div>
          {/* 이돈호 소개 */}
          <div className="flex justify-center items-center pt-[65px]">
            {/* 이름 & 이미지 */}
            <div>
              <p className="text-4xl font-bold">이돈호 대표변호사</p>
              <Image
                src="/images/profile02.jpeg"
                alt="이돈호 대표변호사"
                className="w-72 h-72 rounded-[60px] mx-auto flex-shrink-0"
                width={288}
                height={288}
              />
            </div>
            {/* 소개 */}
            <div className="w-1/2 h-full flex flex-col gap-4">
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 감정 평가사 (국토 교통부 인증)</p>
                <p className="w-1/2">
                  ⚫ 기업 기술 가치 평가사 (한국 기업평가원 인증)
                </p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">
                  ⚫ 국가 연구 지원 전문가 (산업통상부 인증)
                </p>
                <p className="w-1/2">⚫ 현 고양세무사회 고문 감정평가사</p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 현 부산세무사회 고문 감정평가사</p>
                <p className="w-1/2">⚫ 현 개업세무사회 고문 감정평가사</p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 현 특허법인누리 고문 감정평가사</p>
                <p className="w-1/2">⚫ 현 회계법인창천 고문 감정평가사</p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">
                  ⚫ 현 건국대학교 부동산 아카데미 고문 감정평가사
                </p>
                <p className="w-1/2">
                  ⚫ 현 대한 가맹거래사 협회 고문 감정평가사
                </p>
              </div>
              <Separator className="bg-black " />
              <div className="flex gap-4 items-center justify-center px-10">
                <p className="w-1/2">⚫ 현 하이테크 감정 평가 법인 대표이사</p>
                <p className="w-1/2">⚫ 현 하이테크 책임 컨설팅 대표이사</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}
