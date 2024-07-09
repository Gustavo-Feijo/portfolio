"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ReactNode, useEffect, useRef } from "react";
import { SiNextdotjs } from "react-icons/si";

type Technologie = {
  icon: ReactNode;
  name: string;
  delay?: number;
};
const techList: Technologie[] = [
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
  { icon: <SiNextdotjs />, name: "Next.JS" },
];

function IconCard(tech: Technologie) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: tech.delay, duration: 0.2 }}
      className="text-7xl h-40 w-32 bg-[rgba(var(--background),0.5)] border-secondary border-2 rounded-xl flex-center flex-col"
    >
      <span className="text-3xl p-2">{tech.name}</span>
      {tech.icon}
    </motion.div>
  );
}
function Technologies() {
  const cardRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Technologies");
  useEffect(() => {
    const handleOnMouseMove = (e: any) => {
      const { currentTarget: target } = e;
      const cardRect = target.getBoundingClientRect(),
        x = e.clientX - cardRect.left,
        y = e.clientY - cardRect.top;
      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const cardElement = cardRef.current;

    if (cardElement) {
      cardElement.addEventListener("mousemove", handleOnMouseMove);
    }

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
          transition: { duration: 1, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="w-full h-[70dvh] relative border-2 border-secondary bg-[rgba(var(--foreground),0.1)] rounded-2xl shadow-md shadow-secondary flex  justify-around items-center flex-wrap border-effect card-effect dark:border"
        ref={cardRef}
      >
        {techList.map((technologie, index) => {
          return (
            <IconCard
              icon={technologie.icon}
              delay={index}
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
