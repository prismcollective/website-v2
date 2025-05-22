import ProjectCard from "@/components/ProjectCard";
import { ProjectCardProps } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects - PRISM Collective",
  description:
    "Welcome to PRISM projects - Art Tech at the University of Waterloo",
};

export default function Page() {
  const projects: Array<ProjectCardProps> = [
    {
      title: "MIND GARDEN - 2024-2025",
      image: "/mind-garden.png",
      genres: ["mechanical", "electrical", "embedded"],
      description:
        "Our first piece is a kinetic sculpture is inspired by the human mind… a vibrant, ever-changing ecosystem of thoughts, emotions, and ideas.",
      team: ["Sophie", "Maisha", "Binal", "Olivia"],
      notion:
        "https://prismcollective.notion.site/Mind-Garden-Living-Doc-13d5aba77f188129bd97d9338e06aa5c?pvs=74",
      github: "https://github.com/Waterloo-prism",
    },
    {
      title: "Kinetic Creatures - 2025",
      image: "/jellyfish-sculpture.png",
      genres: ["mechanical", "electrical"],
      description:
        "Kinetic creatures is an installation with custom-designed, motorized creatures and plants that look like they’re flowing in organic motion! ",
      team: ["Angela Wilks Jenkins"],
      notion:
        "https://prismcollective.notion.site/Currents-Kinetic-Creatures-fe5f5d984bbb4f17b8f2103d610c63d5?pvs=73",
      github: "",
    },
    {
      title: "Harmonic forest - 2025",
      image: "/harmonic-forest.png",
      genres: ["mechanical", "electrical", "embedded"],
      description:
        "This unique sound visualizer uses a grid of rods arranged in a semi-circle to respond to an audio output and uses Fast Fourier Transformations/AI to implement different modes of operation. ",
      team: ["Sam Xiao", "gaby jiang", "lucas javier", "arnav goyal"],
      notion:
        "https://prismcollective.notion.site/Orchestra-65272562528c42e4b1b94147c8f3e9ae?pvs=4",
      github: "https://github.com/prismcollective/Harmonic-Forest",
    },
    {
      title: "Lightbending - 2025",
      image: "/lightbending.webp",
      genres: [ "electrical", "embedded"],
      description:
        "This 3D LED cube isn't just a light show—it's an interactive installation where each LED responds to live tracking data from a projector system. Whether you're moving your hand, projecting patterns, or triggering events, the cube translates motion into mesmerizing light animations across its three-dimensional space.",
      team: ["Daphne lai", "vedaant varshney", "Aaditya Chaudhary", "Shireen Rajora"],
      notion:
        "https://prismcollective.notion.site/Waterbending-cb0c5d2abace4c1b989c520e653bb01a?pvs=73",
      github: "",
    },
    {
      title: "bass robot - 2025",
      image: "/bassrobot.webp",
      genres: ["mechanical", "electrical", "embedded"],
      description:
        "Bass Bot is a robotic system designed to autonomously play the bass guitar. We developed a Minimum Viable Product (MVP) at the Bracket Bot Hackathon, integrating mechanical, electrical, and software systems to create a functional bass-playing robot.",
      team: ["Maisha Thasin", "Santiago del solar", "Kenson hui"],
      notion:
        "https://prismcollective.notion.site/Waterbending-cb0c5d2abace4c1b989c520e653bb01a?pvs=73",
      github: "",
    },
    {
      title: "Sound portraits - 2025",
      image: "/sound-portraits.webp",
      genres: ["software"],
      description:
        "Generating sound portraits using AI",
      team: ["aniket srinivasan ashok"],
      notion:
        "",
      github: "",
    },
   
    
  ];

  return (
    <div className="min-h-screen w-full flex flex-col">
    <main className="flex-grow overflow-auto bg-neutral-100">
      <div className="flex flex-wrap justify-center items-start gap-6 px-4 md:px-10 py-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  </div>
  );
}
