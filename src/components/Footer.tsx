import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/?mode=policy"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    이용약관
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?mode=privacy"
                    className="text-gray-600 hover:text-gray-900 font-bold"
                  >
                    개인정보처리방침
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-gray-600">
              <p>국세청 제출용 양도·상속· 증여 평가 국내 최다 경력</p>
              <p>하이테크 감정평가법인 주식회사</p>
              <p>대표이사 : 김제프용진 ㅣ 사업자 등록번호 : 491-87-00809</p>
              <p>서울특별시 강남구 영동대로 511 무역센터 13층(삼성역)</p>
              <p>
                이메일 :{" "}
                <a
                  href="mailto:hightechapp@naver.com"
                  className="hover:text-gray-900"
                >
                  hightechapp@naver.com high_srrra@daum.net
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-end gap-4">
              <a
                href="http://pf.kakao.com/_TyCXG"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                카카오톡
              </a>
              <a
                href="https://m.blog.naver.com/hightech_app"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                네이버 블로그
              </a>
              <a
                href="https://www.youtube.com/channel/UCSAzxNNKAcuVJa1cBzoE2Tg"
                target="_blank"
                className="text-gray-600 hover:text-gray-900"
              >
                유튜브
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
