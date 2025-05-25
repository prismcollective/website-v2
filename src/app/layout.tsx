import type { Metadata } from "next";
import { Geist, Geist_Mono, Azeret_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { customFont } from "./fonts";
import NavigationEvents from "@/components/NavigationEvents";
import { Suspense } from "react";

export const metadata = {
  icons: {
    icon: "/prism-logo.png",
    apple: "/prism-logo.png",
    shortcut: "/prism-logo.png",
  },
};

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

// Create a client-side only footer wrapper
/*
function MobileFooter() {
  'use client'
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;
  
  return <Footer />;
}
*/

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
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/*<ClientOnly>
          <MobileFooter />
        </ClientOnly>*/}
      </body>
    </html>
  );
}
