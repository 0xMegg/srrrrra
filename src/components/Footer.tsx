import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between">
          {/* 왼쪽: 이용약관 및 개인정보처리방침 */}
          <div>
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/?mode=policy"
                  className="text-gray-600 hover:text-gray-900 font-bold"
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

          {/* 오른쪽: 회사 정보 */}
          <div className="text-gray-600 text-right">
            <p>국세청 제출용 양도·상속· 증여 평가 국내 최다 경력</p>
            <p>하이테크 감정평가법인 주식회사</p>
            <p>대표이사 : 김제프용진 ㅣ 사업자 등록번호 : 491-87-00809</p>
            <p>서울특별시 강남구 영동대로 511 무역센터 13층(삼성역)</p>
            <p>
              이메일:{" "}
              <a
                href="mailto:srrra@hightechmember.com"
                className="hover:text-gray-900"
              >
                srrra@hightechmember.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
