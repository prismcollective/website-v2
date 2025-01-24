"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const selectedPage = pathname === "/" ? "home" : pathname.replace("/", "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const desktopPages = [
    {
      id: "projects",
      label: "PROJECTS",
      link: "/projects",
    },
    {
      id: "contact",
      label: "CONTACT US",
      link: "/contact",
    },
  ];

  const mobilePages = [
    {
      id: "home",
      label: "HOME",
      link: "/",
    },
    ...desktopPages
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
                src="/prism-logo.png"
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

        <nav className="hidden md:flex gap-4">
          {desktopPages.map((page) => (
            <Link href={page.link} key={page.id}>
              <Button
                variant={selectedPage === page.id ? "selected" : "default"}
              >
                {page.label}
              </Button>
            </Link>
          ))}
          <Link href="https://discord.gg/EQW8Qu7jA9" target="_blank">
            <Button variant="blue" className="shine-effect">
              <span className="relative font-bold">JOIN US</span>
            </Button>
          </Link>
        </nav>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {mounted && isMenuOpen && (
        <div className="fixed inset-0 bg-[#E69AFD] z-50 md:hidden">
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-2xl"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {mobilePages.map((page) => (
                <Link 
                  href={page.link} 
                  key={page.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-black font-mono ${
                    selectedPage === page.id ? 'font-bold' : ''
                  }`}
                >
                  {page.label}
                </Link>
              ))}
              <Link 
                href="https://discord.gg/EQW8Qu7jA9" 
                target="_blank"
                className="mt-4"
              >
                <Button variant="blue" className="shine-effect">
                  <span className="relative font-bold">Join Us →</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;