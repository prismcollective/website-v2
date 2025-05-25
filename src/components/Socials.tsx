import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

interface SocialsProps {
  email?: boolean;
  variant?: "default" | "contact";
}

export default function Socials({
  email = true,
  variant = "default",
}: SocialsProps) {
  const links = [
    {
      href: "https://discord.gg/EQW8Qu7jA9",
      icon: RxDiscordLogo,
      label: "Discord",
    },
    {
      href: "https://instagram.com/uwprism",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://x.com/uwprism",
      icon: RiTwitterXFill,
      label: "Twitter",
    },
    {
      href: "https://github.com/Waterloo-prism",
      icon: VscGithubAlt,
      label: "Github",
    },
  ];

  if (email) {
    links.unshift({
      href: "mailto:uwprism@gmail.com",
      icon: MdOutlineMail,
      label: "Email",
    });
  }

  return (
    <div
      className={`flex ${
        variant === "contact" ? "flex-col xl:flex-row" : ""
      } gap-6 justify-between`}
    >
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          className="flex items-center gap-2 font-mono"
        >
          <Icon size={"30px"} className="cursor-pointer" />
          {variant === "contact" && (
            <span className="hover:underline">{label}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
