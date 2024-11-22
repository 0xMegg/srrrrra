"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            회사로고
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/consultation/free"
              className="text-gray-600 hover:text-blue-600"
            >
              무료 상담
            </Link>
            <Link
              href="/consultation/message"
              className="text-gray-600 hover:text-blue-600"
            >
              문자 상담
            </Link>
            <Link
              href="/consultation/evaluation"
              className="text-gray-600 hover:text-blue-600"
            >
              정식 평가
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden"
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

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              href="/consultation/free"
              className="block text-gray-600 hover:text-blue-600"
            >
              무료 상담
            </Link>
            <Link
              href="/consultation/message"
              className="block text-gray-600 hover:text-blue-600"
            >
              문자 상담
            </Link>
            <Link
              href="/consultation/evaluation"
              className="block text-gray-600 hover:text-blue-600"
            >
              정식 평가
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
