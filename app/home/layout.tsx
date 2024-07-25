import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../header";
import Footer from "../Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}