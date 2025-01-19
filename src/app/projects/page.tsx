import ProjectCard from "@/components/ProjectCard";
import { ProjectCardProps } from "@/components/ProjectCard";

export default function Page() {
  const projects: Array<ProjectCardProps> = [
    {
      title: "MIND GARDEN - 2024-2025",
      image: "/mind-garden.png",
      genres: ["mechanical", "electrical", "embedded"],
      description: "A bit about the super cool mind garden",
      team: ["Sophie", "Maisha", "Binal", "Olivia"],
      notion:
        "https://prismcollective.notion.site/Mind-Garden-Living-Doc-13d5aba77f188129bd97d9338e06aa5c?pvs=74",
      github: "https://github.com/Waterloo-prism",
    },
  ];

  return (
    <div className="flex px-10 py-12 flex-wrap gap-10">
      {projects.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </div>
  );
}
