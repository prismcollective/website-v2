import type { Metadata } from "next";
import { Geist, Geist_Mono, Azeret_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { customFont } from "./fonts";
import NavigationEvents from '@/components/NavigationEvents'
import { Suspense } from 'react'



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${customFont.variable} ${azeretMono.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFF6ED] text-black h-full overflow-hidden flex flex-col`}
      >
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
        <Header />
      


        {children}

      </body>
    </html>
  );
}
