import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { VscGithubAlt } from "react-icons/vsc";

export type ProjectCardProps = {
  title: string;
  image: string;
  genres: Array<"mechanical" | "electrical" | "embedded">;
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
  };

  return (
    <div
      key={title}
      className="flex flex-col border-2 border-black shadow-[3px_3px_0px_0px_#CCC] w-full max-w-[645px] bg-white"
    >
      <div className="relative w-full h-48 md:h-64 border-b-2 border-black">
        <Image src={image} alt="Project Logo" fill className="object-cover" />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col flex-1 border-black">
          <div className="p-4 border-b-2 md:border-r-2 text-xl md:text-2xl border-black">
            {title}
          </div>
          <div className="flex flex-row">
            {genres.map((genre) => {
              return (
                <div
                  key={genre}
                  className={`py-2 flex-auto text-xs flex justify-center items-center ${
                    genreMapping[genre]
                  } ${
                    genre !== genres[genres.length - 1]
                      ? "border-r-2 border-black"
                      : "md:border-r-2 md:border-black"
                  }`}
                >
                  {genre.toUpperCase()}
                </div>
              );
            })}
          </div>
          <div className="flex-auto p-4 md:border-r-2 border-t-2 border-black">
            {description}
          </div>
        </div>

        <div className="flex md:basis-1/3 flex-col p-4 md:p-6 border-t-2 md:border-t-0 border-black gap-2">
          <div className="p-3 border-2 border-black text-xs flex-auto">
            <div className="font-bold">Team Leads</div>
            {team.map((member) => {
              return <div key={member}>{member}</div>;
            })}
          </div>
          <div className="flex justify-between gap-1">
            <Link href={notion} target="_blank" className="flex-1 md:flex-none">
            <Button variant="purple"   className="w-full md:w-auto text-center">Learn More</Button>                         </Link>
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