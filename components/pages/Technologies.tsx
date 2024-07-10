"use client";
import { motion } from "framer-motion";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { useTranslations } from "next-intl";
import { ReactNode, useEffect, useRef } from "react";
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
    <section className=" min-h-[100dvh] pt-20 flex-center flex-col gap-8">
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
        className="flex justify-around flex-wrap max-h-[80dvh] border-2 border-secondary border-opacity-25 rounded-2xl shadow-lg shadow-secondary p-20 gap-28 border-effect card-effect 
        max-[1350px]:p-10 max-[1350px]:gap-14 max-md:gap-4 max-md:p-4"
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
