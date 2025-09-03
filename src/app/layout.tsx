import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "하이테크 감정 평가 법인",
  description: "국세청 제출용 양도·상속·증여 평가 국내 최다 경력",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="1cqk-2_XW1x9dPDkb8iLkciuhgmdiRkYMUJOd5wdH3g"
        />
        <meta
          name="naver-site-verification"
          content="cdb5adc1fdea3cf69c2dc56cb8f2b6bb3af18e01"
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="twitter:image" content="/images/logo.png" />
      </head>
      <body
        className={`${inter.className} relative min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
