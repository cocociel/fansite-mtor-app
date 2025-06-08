import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "めておらを応援するステラ",
  description: "めておら-Meteorites-の非公式ファンサイトです。ステラ目線ならではのコンテンツをたくさん作ります",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen bg-gray-100">
        <Navbar /> {/* 全ページ共通のナビバー */}
        <main className="pt-8 min-h-screen">{children}</main> {/* ナビバー高さ分の余白 */}
      </body>
    </html>
  );
}
