"use client";
import { ReactNode, useEffect, useRef } from "react";
import {
  SiGithub,
  SiJest,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiYoutube,
} from "react-icons/si";
import { TbBrandFramerMotion, TbWorld } from "react-icons/tb";
import ProjectCard from "../ProjectCard";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type ProjectTech = {
  icon: ReactNode;
  name: string;
};

type Links = {
  icon: ReactNode;
  link: string;
  text: string;
};
export type ProjectData = {
  translation: string;
  projectImage: string;
  links?: Links[];
  technologies: ProjectTech[];
};
const projectList: ProjectData[] = [
  {
    translation: "ProjectPortfolio",
    projectImage: "Portfolio.png",
    technologies: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <TbBrandFramerMotion />, name: "Motion" },
      { icon: <SiJest />, name: "Jest" },
    ],
    links: [
      {
        icon: <SiGithub />,
        link: "https://github.com/Gustavo-Feijo/portfolio",
        text: "GitHub",
      },
      { icon: <SiYoutube />, link: "https://www.youtube.com", text: "Youtube" },
      { icon: <TbWorld />, link: "https://www.google.com", text: "Website" },
    ],
  },
  {
    translation: "ToDo",
    projectImage: "Todo.png",
    technologies: [],
    links: [
      {
        icon: <SiGithub />,
        link: "https://github.com/Gustavo-Feijo",
        text: "GitHub",
      },
      {
        icon: <SiLinkedin />,
        link: "https://www.linkedin.com/in/gustavo-feij%C3%B3-0767ab1b0/",
        text: "Linkedin",
      },
      { icon: <SiYoutube />, link: "https://www.youtube.com", text: "Youtube" },
      { icon: <TbWorld />, link: "https://www.google.com", text: "Website" },
    ],
  },
];
function Projects() {
  const t = useTranslations("Projects");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function enableDivScrolling(event: any) {
      event.stopPropagation();
    }
    let element: HTMLDivElement;
    if (ref.current) {
      element = ref.current;
      element.addEventListener("wheel", enableDivScrolling);
      element.addEventListener("touchmove", enableDivScrolling);
      element.addEventListener("touchstart", enableDivScrolling);
      element.addEventListener("touchend", enableDivScrolling);
    }
    return () => {
      if (element) {
        element.removeEventListener("wheel", enableDivScrolling);
        element.removeEventListener("touchmove", enableDivScrolling);
        element.removeEventListener("touchstart", enableDivScrolling);
        element.removeEventListener("touchend", enableDivScrolling);
      }
    };
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center gap-8 min-h-[100dvh] pt-20 ">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-7xl"
      >
        {t("title")}
      </motion.h1>
      <div
        className="flex items-start justify-around flex-wrap gap-8 w-full border border-secondary border-opacity-30 pt-4 shadow-lg shadow-secondary rounded-xl h-[60dvh] max-h-[60dvh] overflow-y-scroll overflow-x-hidden"
        ref={ref}
      >
        {projectList.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
