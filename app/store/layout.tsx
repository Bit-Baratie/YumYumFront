import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "YumYum 맛집 리스트",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script strategy='afterInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5?autoload=false" />
      <Header />
      <div>
        {children}
      </div>
    </>
  );
}
