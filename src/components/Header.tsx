import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#F9D5EB] to-[#E69AFD] px-6 py-2 border-b-2 border-black">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative">
            <Link href="/">
              <Image
                src="/prism-logo.png" // You'll need to add your logo to public folder
                alt="Prism Collective Logo"
                fill
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
          <Button>
            <Link href="/projects">PROJECTS</Link>
          </Button>
          <Button>
            <Link href="/contact">CONTACT</Link>
          </Button>
          <Button variant="blue">
            <Link href="https://discord.gg/EQW8Qu7jA9" target="_blank">
              JOIN US
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
