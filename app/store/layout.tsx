import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../header";
import Script from "next/script";
import detailScss from "@/app/store/[store_id]/storeDetailPage.module.scss";

export const metadata: Metadata = {
  title: "YumYum 맛집 리스트",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Callback = () => {
    console.log("Callbacks")
  }
  return (
    <>
      {/* <Script strategy='beforeInteractive' src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=nqz0uvnoe5&callback=Callback" /> */}
      <div className={detailScss.mobileHeader}><Header /></div>
      <div>
        {children}
      </div>
    </>
  );
}
