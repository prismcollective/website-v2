import Banner from "@/components/Banner";
import Spline from "@splinetool/react-spline";

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
            <div className="flex-1 flex p-6 items-center border-b-2 border-black bg-[#A3D5F8]">
              KINETIC SCULPTURES / GENERATIVE ART / PROJECTION MAPPING / BIO-ART
              / IMMERSIVE EXPERIENCES / AUGMENTED/VIRTUAL REALTIY / ROBOTS /
              WEARABLE TECHNOLOGY / ANYTHING YOU CAN DREAM OF
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="bg-[#FEE4D4] flex-1 border-b-2 border-black">
              AN INTERDISCIPLINARY DESIGN TEAM TO CHALLENGE THE STATUS QUO AND
              ENCOURAGE NEW FORMS OF EXPRESSION
            </div>
            <div className="flex-1 border-b-2 border-black"></div>
            <div className="bg-[#DFF9F6] flex-1">CONNECT WITH US</div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
