import Banner from "@/components/Banner";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100%-69px)]">
      <div className="flex-auto flex">
        <div className="flex flex-1 border-r-2 border-black">
          <Spline scene="https://prod.spline.design/83p7cqnLefSNPoYy/scene.splinecode" />
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
              AN INTERDISCIPLINARY DESIGN TEAM TO CHALLENGE THE STATUS QUO AND
              ENCOURAGE NEW FORMS OF EXPRESSION
            </div>
            <div className="flex-1 border-b-2 border-black flex items-center justify-center p-6"></div>
            <div className="bg-[#DFF9F6] flex-1 flex flex-col gap-5 items-left justify-center p-6">
              <div className="font-bold">CONNECT WITH US</div>
              <div className="flex gap-6">
                <Link href="mailto:prism@gmail.com" target="_blank">
                  <MdOutlineMail size={"30px"} className="cursor-pointer" />
                </Link>
                <Link href="https://discord.gg/EQW8Qu7jA9" target="_blank">
                  <RxDiscordLogo size={"30px"} className="cursor-pointer" />
                </Link>
                <Link href="https://instagram.com/uwprism" target="_blank">
                  <FaInstagram size={"30px"} className="cursor-pointer" />
                </Link>
                <Link href="https://x.com/uwprism" target="_blank">
                  <RiTwitterXFill size={"30px"} className="cursor-pointer" />
                </Link>
                <Link href="https://github.com/Waterloo-prism" target="_blank">
                  <VscGithubAlt size={"30px"} className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
