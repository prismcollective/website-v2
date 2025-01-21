"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const selectedPage = pathname === "/" ? "home" : pathname.replace("/", "");

  const pages = [
    {
      id: "projects",
      label: "PROJECTS",
      link: "/projects",
    },
    {
      id: "contact",
      label: "CONTACT",
      link: "/contact",
    },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-[#F9D5EB] to-[#E69AFD] px-6 py-2 border-b-2 border-black">
      <style>
        {`
          @keyframes continuous-shine {
            0% {
              transform: translateX(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateX(100%);
              opacity: 0;
            }
          }

          @keyframes sparkle-1 {
            0%, 100% { opacity: 0; transform: scale(0.5) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(10px, -10px); }
          }

          @keyframes sparkle-2 {
            0%, 100% { opacity: 0; transform: scale(0.5) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(-10px, -10px); }
          }

          @keyframes sparkle-3 {
            0%, 100% { opacity: 0; transform: scale(0.5) translate(0, 0); }
            50% { opacity: 1; transform: scale(1) translate(5px, 5px); }
          }
          
          .shine-effect {
            position: relative;
            overflow: hidden;
          }
          
          .shine-effect::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 100%
            );
            border-radius: 9999px;
            pointer-events: none;
          }

          .shine-effect:hover::after {
            animation: continuous-shine 3s infinite;
          }

          .shine-effect::before,
          .shine-effect span::before,
          .shine-effect span::after {
            content: '✦';
            position: absolute;
            font-size: 10px;
            color: white;
            text-shadow: 0 0 2px rgba(255,255,255,0.5);
            pointer-events: none;
            z-index: 1;
          }

          .shine-effect::before {
            top: 20%;
            left: 20%;
            animation: sparkle-1 2s infinite;
          }

          .shine-effect span::before {
            top: 30%;
            right: 25%;
            animation: sparkle-2 2.5s infinite 0.5s;
          }

          .shine-effect span::after {
            bottom: 25%;
            left: 40%;
            animation: sparkle-3 2.2s infinite 1s;
          }
        `}
      </style>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative">
            <Link href="/">
              <Image
                src="/prism-logo.png" // You'll need to add your logo to public folder
                alt="Prism Collective Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="text-black">
            <h1 className="text-2xl font-metro">PRISM</h1>
            <p className="text-sm font-metro">COLLECTIVE</p>
          </div>
        </div>

        <nav className="flex gap-4">
          {pages.map((page) => (
            <Link href={page.link} key={page.id}>
              <Button
                variant={selectedPage === page.id ? "selected" : "default"}
              >
                {page.label}
              </Button>
            </Link>
          ))}

          <Link href="https://discord.gg/EQW8Qu7jA9" target="_blank">
            <Button
              variant="blue"
              className="shine-effect text-black border border-black shadow-[2px_2px_0px_0px_#000] rounded-full px-6 py-2 transition-colors bg-blue-200 hover:bg-blue-300"
            >
              <span className="relative ">JOIN US</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
