/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 사이트맵과 robots.txt 설정 추가
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/public/sitemap.xml",
      },
      {
        source: "/robots.txt",
        destination: "/public/robots.txt",
      },
    ];
  },
};

export default nextConfig;
