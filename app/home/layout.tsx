import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Header/>
          {children}
        </body>
      </html>
    );
  }