"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import Socials from "@/components/Socials";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Image from "next/image";
import HolographicEffect from "@/components/Holograph";

export default function Home() {
  const [isMobile, setIsMobile] = useState<null | boolean>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === null) {
    return null;
  }

  const TopBanner = () => (
    <div className="w-full bg-black text-white py-2 px-4 flex justify-center items-center border-b-2 border-black">
      <a
        href="https://prismcollective.notion.site/w25-projects?pvs=74"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:underline"
      >
        <span className="mr-2">Check out our W25 projects list </span>
        <span className="text-xl">→</span>
      </a>
    </div>
  );

  if (isMobile) {
    return (
      <div className="w-full h-full flex flex-col">
        <TopBanner />
        <div className="w-full">
          <div className="relative h-[500px] border-b-2 border-black">
            <HolographicEffect className="w-full h-full absolute inset-0" />
            <div className="absolute top-6 left-6 text-4xl w-64 font-bold text-white [text-shadow:-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_2px_2px_0_#000]">
              ART TECH AT THE UNIVERSITY OF WATERLOO
            </div>
          </div>

          <div className="bg-[#FEE4D4] p-6 border-b-2 border-black">
            PRISM IS A BOUNDARY-BREAKING DESIGN TEAM TO CHALLENGE THE STATUS QUO
            AND ENCOURAGE NEW FORMS OF EXPRESSION
          </div>

          <div className="h-[400px] border-b-2 border-black relative">
            <Image
              src="/mind-garden-cad.png"
              alt="Project showcase 1"
              fill
              className="object-contain w-full h-full"
            />
          </div>

          <div className="bg-[#A3D5F8] p-6 border-b-2 border-black">
            <div className="text-sm mb-4">
              KINETIC SCULPTURES / GENERATIVE ART / PROJECTION MAPPING / BIO-ART
              / IMMERSIVE EXPERIENCES / AUGMENTED/VIRTUAL REALTIY / ROBOTS /
              WEARABLE TECHNOLOGY / ANYTHING YOU CAN DREAM OF
            </div>
            <Link href="/projects">
              <div className="text-right font-bold hover:underline cursor-pointer">
                EXPLORE →
              </div>
            </Link>
          </div>

          <div className="h-[400px] border-b-2 border-black relative">
            <Image
              src="/sculpture-mind-garden.webp"
              alt="Project showcase 2"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <Banner />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex-1 flex flex-col">
      <TopBanner />
      <div className="flex-1 flex min-h-0">
        <div className="min-w-0 flex-1 border-r-2 border-black relative">
          <HolographicEffect className="w-full h-full absolute inset-0" />

          <div className="absolute top-6 left-6 text-6xl w-80 font-bold text-white [text-shadow:-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_2px_2px_0_#000]">
            ART TECH AT THE UNIVERSITY OF WATERLOO
          </div>
        </div>
        <div className="w-[768px] flex-shrink-0 flex flex-col min-h-0">
          <div className="flex flex-1 border-b-2 border-black">
            <div className="relative w-1/2">
              <Image
                src="/sculpture-mind-garden.webp"
                alt="Project showcase 1"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 bg-[#FEE4D4] flex border-l-2 border-black  items-center justify-center p-6">
              PRISM IS A BOUNDARY-BREAKING DESIGN TEAM TO CHALLENGE THE STATUS
              QUO AND ENCOURAGE NEW FORMS OF EXPRESSION
            </div>
          </div>
          <div className="flex flex-1 border-b-2 border-black min-h-0">
            <div className="w-1/2 relative flex flex-col gap-5 items-center justify-center p-6 bg-[#A3D5F8]">
              <div>
                KINETIC SCULPTURES / GENERATIVE ART / PROJECTION MAPPING /
                BIO-ART / IMMERSIVE EXPERIENCES / AUGMENTED/VIRTUAL REALTIY /
                ROBOTS / WEARABLE TECHNOLOGY / ANYTHING YOU CAN DREAM OF
              </div>
              <Link href="/projects" className="w-full">
                <div className="text-right font-bold hover:underline cursor-pointer">
                  EXPLORE →
                </div>
              </Link>
            </div>
            <div className="relative w-1/2 border-l-2 border-black">
              <Image
                src="/mind-garden-cad.png"
                alt="Project showcase 3"
                fill
                style={{ transform: "scale(1)" }}
                className="object-contain w-full h-full "
              />
            </div>
          </div>

          <div className="flex flex-1 min-h-0">
            <div className="relative w-1/2 p-2">
              <Image
                src="/jellyfish.gif"
                alt="Project showcase 2"
                fill
                className="object-cover w-full h-full object-[center_15%]"
                priority={false}
                unoptimized={true}
                loading="lazy"
                style={{
                  imageRendering: 'auto',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)',
                }}
              />
            </div>
            <div className="bg-[#DFF9F6] w-1/2 flex flex-col gap-5 justify-center p-6 border-l-2 border-black">
              <h1 className="text-6xl font-metro">PRISM</h1>
              <p>MAKE WATERLOO MORE INTERDISCIPLINARY</p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
