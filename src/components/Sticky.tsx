"use client";
import Image from "next/image";

export default function Sticky() {
  return (
    <div className={`sticky top-0 w-full bg-white shadow-md z-50`}>
      <div className="hidden lg:flex flex-col gap-6 fixed right-20 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center w-32 h-32 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
          <span className="text-sm mb-2">전화 상담</span>
          <span className="text-sm font-bold">010-6727-5983</span>
          <span className="text-sm font-bold">02-6401-0706</span>
        </div>

        <a
          href="https://open.kakao.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-32 h-32 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-colors"
        >
          <span className="text-sm mb-2 font-bold">카카오톡 상담하기</span>
          <Image src="/images/kakao.png" alt="kakao" width={50} height={50} />
        </a>

        <a
          href="https://blog.naver.com/hightech_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-32 h-32 bg-[#03C75A] text-white rounded-lg shadow-lg hover:bg-[#02b050] transition-colors"
        >
          <span className="font-bold">하이테크 블로그</span>
          <Image src="/images/blog.png" alt="naver" width={50} height={50} />
        </a>

        <a
          href="https://www.instagram.com/hightech_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-32 h-32 bg-[#FF9999] text-white rounded-lg shadow-lg hover:bg-[#FF8080] transition-colors"
        >
          <span className="font-bold mb-2">하이테크 유튜브</span>
          <Image
            src="/images/youtube.png"
            alt="youtube"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  );
}
