"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !isScrolled && isLandingPage;

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
          <Link href="/" className="flex items-center">
            <Image
              src={isTransparent ? "/images/logo_w.png" : "/images/logo.png"}
              alt="로고"
              width={120}
              height={40}
              className="hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/consultation"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              무료 상담 신청
            </Link>
            <Link
              href="/message"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              문자 상담 신청
            </Link>
            <Link
              href="/evaluation"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              정식 평가 신청
            </Link>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-col space-y-2">
              <Link
                href="/consultation"
                className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/message"
                className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                문자 상담 신청
              </Link>
              <Link
                href="/evaluation"
                className="text-gray-600 px-4 py-3 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all"
              >
                정식 평가 신청
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
