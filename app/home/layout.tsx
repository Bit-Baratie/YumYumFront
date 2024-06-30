import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <Header/>
        {children}
      </div>
    );
  }