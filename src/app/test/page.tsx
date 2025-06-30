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

              {/* 김용진 평가사 - 강조된 카드 */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white rounded-3xl border shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-black to-blue-900 p-8 text-white text-center">
                    <h2 className="text-3xl font-bold mb-2">
                      하이테크 대표 평가사
                    </h2>
                    <p className="text-xl opacity-90">김용진 평가사</p>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="relative">
                        <Image
                          src="/images/profile.png"
                          alt="김용진 평가사"
                          className="w-48 h-48 rounded-full mx-auto flex-shrink-0 ring-4 ring-blue-100 shadow-lg"
                          width={192}
                          height={192}
                        />
                        <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2 shadow-lg">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-grow lg:max-w-3xl ml-10">
                        <h3 className="text-xl font-bold mb-6 text-gray-900">
                          주요 약력
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  a
                                </span>
                              </div>
                              <span className="text-gray-700">
                                감정 평가사 (국토 교통부 인증)
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  b
                                </span>
                              </div>
                              <span className="text-gray-700">
                                기업 기술 가치 평가사 (한국 기업평가원 인증)
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  c
                                </span>
                              </div>
                              <span className="text-gray-700">
                                국가 연구 지원 전문가 (산업통상부 인증)
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  d
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 고양세무사회 고문 감정평가사
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  e
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 부산세무사회 고문 감정평가사
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  f
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 개업세무사회 고문 감정평가사
                              </span>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  g
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 특허법인누리 고문 감정평가사
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  h
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 회계법인창천 고문 감정평가사
                              </span>
                            </div>
                            <div className="flex items-start gap-3 w-full">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  i
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 건국대학교 부동산 아카데미 고문 감정평가사
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  j
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 대한 가맹거래사 협회 고문 감정평가사
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  k
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 하이테크 감정 평가 법인 대표이사
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-blue-600">
                                  l
                                </span>
                              </div>
                              <span className="text-gray-700">
                                현 하이테크 책임 컨설팅 대표이사
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 이돈호 대표변호사 - 일반 카드 */}
              <div className="relative overflow-hidden rounded-xl border bg-white shadow-sm w-3/4 mx-auto">
                <div className="p-6">
                  <div className="flex items-center justify-end mb-4">
                    <div className="text-xs font-medium text-gray-500">
                      업무협약
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="relative ml-12 mr-12">
                      <Image
                        src="/images/profile02.jpeg"
                        alt="이돈호 대표변호사"
                        className="w-42 h-42 rounded-full mx-auto flex-shrink-0 ring-2 ring-gray-200"
                        width={160}
                        height={160}
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gray-600 text-white rounded-full p-2 shadow-lg">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow lg:max-w-xl ml-12">
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 mb-6">
                        이돈호 대표변호사
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-green-600">
                              •
                            </span>
                          </div>
                          <span className="font-semibold text-green-700">
                            23년 하반기/24년 상반기 형사 특정변호사 선정
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-green-600">
                              •
                            </span>
                          </div>
                          <span className="font-semibold text-green-700">
                            형사사건 및 손해배상 사건 상담 1000건 이상
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-gray-600">
                              •
                            </span>
                          </div>
                          <span>現 노바법률사무소 대표변호사</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-gray-600">
                              •
                            </span>
                          </div>
                          <span>現 대법원 국선변호인</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-gray-600">
                              •
                            </span>
                          </div>
                          <span>102만 유튜버 효기심 자문변호사</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-gray-600">
                              •
                            </span>
                          </div>
                          <span>89만 유튜버 1분과학 자문변호사</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="h-4 w-4 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-gray-600">
                              •
                            </span>
                          </div>
                          <span>83만 유튜버 흑자헬스 자문변호사</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-4xl font-bold text-center mb-8 text-gray-900">
                  평가 실적
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        상속증여평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        상속 및 증여 관련 전문 평가 서비스
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        영업권평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        기업 영업권 및 무형자산 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        특허권평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        특허권 및 지적재산권 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        유튜브평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        유튜브 채널 및 콘텐츠 가치 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        저작권평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        저작권 및 창작물 가치 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-teal-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-teal-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        상표권평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        상표권 및 브랜드 가치 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-indigo-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        병원평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        의료기관 및 병원 가치 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-pink-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-pink-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        소송평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        소송 관련 자산 가치 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                          <svg
                            className="h-5 w-5 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium text-gray-500">
                          평가실적
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        특수평가실적
                      </h4>
                      <p className="text-sm text-gray-600">
                        특수한 자산 및 상황별 평가
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
