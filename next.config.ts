import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/new-path",
        permanent: true, // true = 301 리디렉션, false = 302 리디렉션
      },
      // 필요한 만큼 리디렉션 규칙을 추가할 수 있습니다
    ];
  },
};

export default nextConfig;
