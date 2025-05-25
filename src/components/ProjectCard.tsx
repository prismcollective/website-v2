import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { VscGithubAlt } from "react-icons/vsc";

export type ProjectCardProps = {
  title: string;
  image: string;
  genres: Array<"mechanical" | "electrical" | "embedded" | "software">;
  description: string;
  team: Array<string>;
  notion: string;
  github: string;
};

export default function ProjectCard({
  title,
  image,
  genres,
  description,
  team,
  notion,
  github,
}: ProjectCardProps) {
  const genreMapping = {
    mechanical: "bg-[#F3C1E4]",
    electrical: "bg-[#FDD6BF]",
    embedded: "bg-[#D7F7F4]",
    software: "bg-[#E0E8FF]",
  };

  return (
    <div className="w-full sm:w-[645px] border-2 border-black shadow-[3px_3px_0px_0px_#CCC] bg-white flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 md:h-64 border-b-2 border-black">
        <Image src={image} alt="Project Logo" fill className="object-cover" />
      </div>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row min-h-0 flex-1">
        {/* Left Section */}
        <div className="flex flex-col flex-1 border-black h-full">
          {/* Title */}
          <div className="p-4 border-b-2 md:border-r-2 text-xl md:text-2xl border-black">
            {title}
          </div>

          {/* Genres */}
          <div className="flex flex-row border-t-2 md:border-r-2 border-black">
            {genres.map((genre, index) => (
              <div
                key={genre}
                className={`py-2 flex-auto text-xs flex justify-center items-center ${
                  genreMapping[genre]
                } ${
                  index !== genres.length - 1
                    ? "border-r-2 border-black"
                    : ""
                }`}
              >
                {genre.toUpperCase()}
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="p-4 border-t-2 md:border-r-2 border-black flex-1">
            {description}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex md:basis-1/3 flex-col p-4 md:p-6 border-t-2 md:border-t-0 border-black gap-5">
          {/* Team */}
          <div className="text-xs md:border-2 md:border-black md:p-3 flex-1">
            <div className="font-mono">
              <span className="font-bold">Team Leads: </span>
              <span className="md:hidden">{team.join(", ")}</span>
            </div>
            <div className="hidden md:block font-normal">
              {team.map((member) => (
                <div key={member}>{member}</div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-1">
            <Link href={notion} target="_blank" className="flex-1 md:flex-none">
              <Button variant="purple" className="w-full md:w-auto text-center">
                Learn More
              </Button>
            </Link>
            <Link href={github} target="_blank">
              <button className="border-black border-2 shadow-[2px_2px_0px_0px_#000] rounded-md px-1 h-7 bg-white hover:bg-gray-200 transition-colors">
                <VscGithubAlt />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}