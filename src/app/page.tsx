"use client";
import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8 items-center text-center">
          <div>
            <Image
              src="/images/logo.png"
              alt="로고"
              className="w-60 mx-auto mb-4"
              width={240}
              height={80}
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

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">가평가(탁상 감정)란?</h2>
            <p className="text-lg">
              현장 조사 없이 탁상에서 감정하는 것을 뜻합니다.
            </p>
            <p className="text-lg">
              정식 감정 평가를 앞두고 대략적인 감정 평가액의
            </p>
            <p className="text-lg">예상 범위를 무료로 파악할 수 있습니다.</p>
          </div>

          <div className="flex gap-12 mt-16">
            <Image
              src="/images/profile.png"
              alt="김용진 평가사"
              className="w-96 h-96 rounded-full"
              width={384}
              height={384}
            />

            <div className="text-left">
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
        </div>
      </main>
    </div>
  );
}
