"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReactNode, useEffect, useRef } from "react";
import {
  SiCss3,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiTypescript,
} from "react-icons/si";
import IconCard from "../IconCard";

// Type to be passed to the Icon Card.
type Technology = {
  icon: ReactNode;
  name: string;
  delay?: number;
};

// List of the iconCards.
const techList: Technology[] = [
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiNodedotjs />, name: "Node.JS" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiReact />, name: "React.JS" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiPrisma />, name: "Prisma" },
];

// Function to return the page of the technologies.
function Technologies() {
  // Ref to the main card.
  const cardRef = useRef<HTMLDivElement>(null);

  // Translation for the title.
  const t = useTranslations("Technologies");

  // useEffect for adding the hover effect to the card;
  useEffect(() => {
    // Mouse move listner.
    const handleOnMouseMove = (e: any) => {
      // Get the bounding of the card and calculate the mouse position relative to the element.
      const { currentTarget: target } = e;
      const cardRect = target.getBoundingClientRect(),
        x = e.clientX - cardRect.left,
        y = e.clientY - cardRect.top;
      // Add the properties for handling the css movement.
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    // Add the event listner.
    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("mousemove", handleOnMouseMove);
    }

    //Cleanup
    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mousemove", handleOnMouseMove);
      }
    };
  }, []);

  return (
    <section className="w-full min-h-[100dvh] pt-20 flex flex-col gap-8 items-center justify-center overflow-clip max-lg:flex-col max-lg:justify-center max-lg:gap-8">
      <motion.span
        initial={{ y: -25, x: 25, opacity: 0 }}
        whileInView={{
          y: 0,
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="text-7xl max-sm:text-5xl"
      >
        {t("title")}
      </motion.span>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="w-full h-fit max-h-[70dvh] relative border-2 border-secondary bg-[rgba(var(--foreground),0.1)] rounded-2xl shadow-md shadow-secondary flex justify-around flex-wrap p-20 gap-28 border-effect card-effect max-[1200px]:p-10 max-[1200px]:gap-14 max-md:gap-8 max-md:p-4 dark:border"
        ref={cardRef}
      >
        {techList.map((technologie, index) => {
          return (
            <IconCard
              icon={technologie.icon}
              delay={0.5 + index / 10}
              name={technologie.name}
              key={index}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

export default Technologies;
