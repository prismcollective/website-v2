// this footer is only for mobile

import Button from "@/components/Button";
import Socials from "@/components/Socials";


const Footer = () => {
    return (
      <div className="bg-[#DFF9F6] p-8 border-b-2 border-black">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h1 className="text-6xl mb-4 font-metro">PRISM</h1>
            <p className="mb-4">
              MAKE WATERLOO MORE INTERDISCIPLINARY
            </p>
            <Button variant="blue" className="shine-effect w-36 px-4 py-2">
            <span className="relative font-bold flex items-center gap-2">
              Join Us
              <span className="text-lg">→</span>
            </span>
          </Button>
          </div>
          
          <div className="flex flex-col gap-6">
          <Socials email={false} variant="contact" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;