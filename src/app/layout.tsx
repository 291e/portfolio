import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { MainLayout } from "@/components/layout/main-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leegyuwon.site"),
  title: {
    default: "포트폴리오 | 개발자 프로필",
    template: "%s | 개발자 포트폴리오",
  },
  description:
    "프론트엔드 개발자 포트폴리오 사이트입니다. React, Next.js, TypeScript 등 다양한 기술 스택을 활용한 프로젝트를 소개합니다.",
  keywords: [
    "프론트엔드 개발자",
    "포트폴리오",
    "React",
    "Next.js",
    "TypeScript",
    "웹 개발",
  ],
  authors: [{ name: "LeeGyuWon" }],
  creator: "LeeGyuWon",
  publisher: "LeeGyuWon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://leegyuwon.site",
    title: "포트폴리오 | 개발자 프로필",
    description:
      "프론트엔드 개발자 포트폴리오 사이트입니다. React, Next.js, TypeScript 등 다양한 기술 스택을 활용한 프로젝트를 소개합니다.",
    siteName: "개발자 포트폴리오",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "포트폴리오 | 개발자 프로필",
    description:
      "프론트엔드 개발자 포트폴리오 사이트입니다. React, Next.js, TypeScript 등 다양한 기술 스택을 활용한 프로젝트를 소개합니다.",
    images: ["/og-image.jpg"],
    creator: "@leegyuwon",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification=1234567890",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://leegyuwon.site" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
