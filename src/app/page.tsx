import Banner from "@/components/Banner";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex">
        <div className="flex flex-1 border-r-2 border-black relative">
          <Spline scene="https://prod.spline.design/83p7cqnLefSNPoYy/scene.splinecode" />
          <div className="absolute top-6 left-6 text-6xl w-80 font-bold text-white [text-shadow:-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_2px_2px_0_#000]">
            ART TECH AT THE UNIVERSITY OF WATERLOO
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 border-r-2 border-black">
            <div className="flex-1 border-b-2 border-black"></div>
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
            <div className="flex-1"></div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="bg-[#FEE4D4] flex flex-1 border-b-2 border-black items-center justify-center p-6">
              PRISM IS AN INTERDISCIPLINARY DESIGN TEAM TO CHALLENGE THE STATUS
              QUO AND ENCOURAGE NEW FORMS OF EXPRESSION
            </div>
            <div className="flex-1 border-b-2 border-black flex items-center justify-center p-6"></div>
            <div className="bg-[#DFF9F6] flex-1 flex flex-col gap-5 items-left justify-center p-6">
              <div className="font-bold">CONNECT WITH US</div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
