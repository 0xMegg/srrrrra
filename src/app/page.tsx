import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 헤더 */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto py-4">
          <Image
            src="/logo.png"
            alt="하이테크 로고"
            width={48} // h-12는 48px와 동일
            height={48}
            priority
          />
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 왼쪽 사이드바 */}
          <div className="space-y-4">
            {/* 상담 버튼들 */}
            <div className="border rounded-lg p-4 space-y-4">
              <div>
                <h3 className="font-bold mb-2">무료 상담 신청</h3>
                <button className="w-full bg-blue-600 text-white py-2 rounded">
                  신청하기
                </button>
              </div>

              <div>
                <h3 className="font-bold mb-2">문자 상담 신청</h3>
                <button className="w-full bg-blue-600 text-white py-2 rounded">
                  신청하기
                </button>
              </div>

              <div>
                <h3 className="font-bold mb-2">정식 평가 의뢰</h3>
                <button className="w-full bg-blue-600 text-white py-2 rounded">
                  신청하기
                </button>
              </div>
            </div>

            {/* 연락처 정보 */}
            <div className="border rounded-lg p-4">
              <h3 className="font-bold mb-2">전화 상담</h3>
              <p>☎ 010-6727-6983</p>
              <p>☎ 02-6401-0706</p>
            </div>

            {/* 소셜 링크 */}
            <div className="space-y-2">
              <button className="w-full border rounded-lg p-4 flex items-center justify-center gap-2">
                <Image src="/kakao.png" alt="카카오톡" width={24} height={24} />
                <span>하이테크 감정평가 채널</span>
              </button>

              <button className="w-full border rounded-lg p-4 flex items-center justify-center gap-2">
                <Image src="/naver.png" alt="네이버" width={24} height={24} />
                <span>하이테크 네이버 블로그</span>
              </button>

              <button className="w-full border rounded-lg p-4 flex items-center justify-center gap-2">
                <Image src="/youtube.png" alt="유튜브" width={24} height={24} />
                <span>하이테크 유튜브 채널</span>
              </button>
            </div>
          </div>

          {/* 메인 컨텐츠 영역 */}
          <div className="md:col-span-2 space-y-8">
            <div className="text-center">
              <Image
                src="/logo-large.png"
                alt="하이테크 로고"
                width={200} // 적절한 크기로 조정 필요
                height={100} // 적절한 크기로 조정 필요
                className="mx-auto mb-8"
              />
              <div className="space-y-4 text-center">
                <h2 className="font-bold">(주)하이테크 감정 평가 법인</h2>
                <p>국세청 채용을 앞둔 상속, 증여 평가 코칭센터 경력</p>
                <p>영업권 특허권 상표권 무형자산 평가</p>
                <p>서울 강남구 영동대로 511 트레이드타워 13층</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">가망가치란 감정인가?</h3>
              <p className="text-gray-600">
                현업 조사 없이 특허에서 감정하는 것을 뜻한다.
                <br />
                모든 감정 평가를 평가고려해야만 감정 평가하의
                <br />
                예상 판매를 무료로 파악할 수 있었다.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">감정된 평가사 자격</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>감정 평가사 (국토 교통부 인증)</li>
                <li>감정 기술 감정 평가사 (한국 감정평가 인증)</li>
                <li>국가 연구 지원 전문가 (산업통상부 인증)</li>
                <li>㈜ 고려세무사회 교육 감정평가사</li>
                <li>전 부산세무사회 교육 감정평가사</li>
                <li>전 개인세무사회 교육 감정평가사</li>
                <li>전 특허법인교수 교육 감정평가사</li>
                <li>전 회계법인전문 교육 감정평가사</li>
                <li>전 각급학교 세무사 사무소내 교육 감정평가사</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
