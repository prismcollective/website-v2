import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { VscGithubAlt } from "react-icons/vsc";

export default function Socials() {
  return (
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
  );
}
