import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // admin 페이지 접근 시
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // 여기에 추가적인 인증 로직을 구현할 수 있습니다
    // 예: 특정 IP만 허용, 토큰 체크 등

    // 현재는 기본적인 인증만 구현
    const basicAuth = request.headers.get("authorization");

    if (!basicAuth) {
      return new NextResponse(null, {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }

    // 기본 인증 정보 확인 (사용자: admin, 비밀번호: hitech2024)
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user !== "admin" || pwd !== "hitech2024") {
      return new NextResponse(null, {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return NextResponse.next();
}
