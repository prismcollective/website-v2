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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen w-full overflow-y-auto flex flex-col">
        <div className="w-full pb-[70px]">
          <div className="relative h-[500px] border-b-2 border-black">
            <HolographicEffect className="w-full h-full absolute inset-0" />
            <div className="absolute top-6 left-6 text-4xl w-64 font-bold text-white [text-shadow:-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_2px_2px_0_#000]">
              ART TECH AT THE UNIVERSITY OF WATERLOO
            </div>
          </div>

          <div className="bg-[#FEE4D4] p-6 border-b-2 border-black">
            PRISM IS AN INTERDISCIPLINARY DESIGN TEAM TO CHALLENGE THE STATUS
            QUO AND ENCOURAGE NEW FORMS OF EXPRESSION
          </div>

          <div className="h-[500px] border-b-2 border-black relative">
            <Image
              src="/mind-garden-cad.png"
              alt="Project showcase 1"
              fill
              className="object-cover w-full h-full"
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
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex">
        <div className="flex flex-1 border-r-2 border-black relative">
          <HolographicEffect className="w-full h-full absolute inset-0" />

          <div className="absolute top-6 left-6 text-6xl w-80 font-bold text-white [text-shadow:-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_2px_2px_0_#000]">
            ART TECH AT THE UNIVERSITY OF WATERLOO
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 border-r-2 border-black">
            <div className="flex-1 border-b-2 border-black relative w-full">
              <Image
                src="/sculpture-mind-garden.webp"
                alt="Project showcase 1"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1 flex flex-col gap-5 items-center justify-center p-6 border-b-2 border-black bg-[#A3D5F8]">
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
            <div className="flex-1 relative w-full">
              <Image
                src="/jellyfish-sculpture.png"
                alt="Project showcase 2"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="h-1/3 bg-[#FEE4D4] flex border-b-2 border-black items-center justify-center p-6">
              PRISM IS AN INTERDISCIPLINARY DESIGN TEAM TO CHALLENGE THE STATUS
              QUO AND ENCOURAGE NEW FORMS OF EXPRESSION
            </div>
            <div className="h-[400px] border-b-2 border-black relative w-full">
              <Image
                src="/mind-garden-cad.png"
                alt="Project showcase 3"
                fill
                style={{ transform: "scale(1)" }}
                className="object-contain w-full h-full "
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="bg-[#DFF9F6] flex-1 flex flex-col gap-5 items-left justify-center p-6">
                <div className="font-bold">CONNECT WITH US</div>
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
