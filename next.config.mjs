/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 사이트맵 설정 추가
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/public/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
