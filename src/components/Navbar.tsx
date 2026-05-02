"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isDevPage = pathname === "/dev";
  const isIntangibleLanding = pathname === "/intangible";
  const isIntangibleDomain = pathname.startsWith("/intangible");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent =
    !isScrolled && (isLandingPage || isDevPage || isIntangibleLanding);

  const linkStyle = (active?: boolean) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
      isTransparent
        ? "text-white hover:bg-white/10 focus-visible:ring-white"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 focus-visible:ring-blue-500"
    } ${active ? "font-semibold" : ""}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "backdrop-blur-md bg-white/80 border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link
            href="/"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
          >
            <Image
              src={isTransparent ? "/images/logo_w.png" : "/images/logo.png"}
              alt="하이테크 감정 평가 법인 로고"
              width={120}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* 데스크톱 메뉴: 도메인별로 세 가지 신청이 별도로 고정 */}
          <div className="hidden md:flex items-center gap-1">
            {/* 감정평가 도메인: 랜딩 + 무료/문자/정식 3개 */}
            <Link href="/" className={linkStyle(!isIntangibleDomain)}>
              감정평가
            </Link>
            <Link href="/consultation" className={linkStyle()}>
              무료 상담
            </Link>
            <Link href="/message" className={linkStyle()}>
              문자 상담
            </Link>
            <Link href="/evaluation" className={linkStyle()}>
              정식 평가
            </Link>
            <span className="text-gray-300 mx-1" aria-hidden>|</span>
            {/* 무형자산평가 도메인: 랜딩 + 무료/문자/정식 3개 */}
            <Link href="/intangible" className={linkStyle(isIntangibleDomain)}>
              무형자산평가
            </Link>
            <Link href="/intangible/consultation" className={linkStyle()}>
              무료 상담
            </Link>
            <Link href="/intangible/message" className={linkStyle()}>
              문자 상담
            </Link>
            <Link href="/intangible/evaluation" className={linkStyle()}>
              정식 평가
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 — 항상 햄버거 아이콘으로 메뉴 열기 명확히 */}
          <button
            type="button"
            className={`md:hidden px-4 py-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isTransparent
                ? "text-white hover:bg-white/10 focus-visible:ring-white"
                : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 focus-visible:ring-blue-500"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        id="nav-menu"
        className={`absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden transition-all duration-200 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col space-y-1">
            <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              감정평가
            </p>
            <Link
              href="/"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              감정평가 홈
            </Link>
            <Link
              href="/consultation"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              무료 상담 신청
            </Link>
            <Link
              href="/message"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              문자 상담 신청
            </Link>
            <Link
              href="/evaluation"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              정식 평가 신청
            </Link>
            <p className="px-4 py-2 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              무형자산평가
            </p>
            <Link
              href="/intangible"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              무형자산평가 홈
            </Link>
            <Link
              href="/intangible/consultation"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              무료 상담 신청
            </Link>
            <Link
              href="/intangible/message"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              문자 상담 신청
            </Link>
            <Link
              href="/intangible/evaluation"
              className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              정식 평가 신청
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
