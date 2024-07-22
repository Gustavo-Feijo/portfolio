"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type AnimateText = {
  text: string;
  delay?: number;
};

// Main heading for the page. AboutMe  and Courses.
const AnimatedHeading = ({ text, delay = 0 }: AnimateText) => (
  <motion.h1
    initial={{ y: -50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1, transition: { duration: 1, delay } }}
    viewport={{ once: true }}
    className="text-7xl max-[480px]:text-6xl"
  >
    {text}
  </motion.h1>
);

// Main text for the about me.
const AnimatedParagraph = ({ text, delay = 0 }: AnimateText) => (
  <motion.p
    className="text-wrap text-lg text-center [@media(max-height:900px)]:text-sm"
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay } }}
    viewport={{ once: true }}
  >
    {text}
  </motion.p>
);

// Courses
const AnimatedItem = ({
  title,
  desc,
  date,
  delay = 0,
}: {
  title: string;
  desc: string;
  date: string;
  delay: number;
}) => (
  <motion.div
    initial={{ x: 0, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1, transition: { duration: 1, delay } }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-medium text-left max-[480px]:text-2xl">
      {title}
    </h2>
    <div className="flex justify-between [@media(max-height:900px)]:text-xs">
      <span>{desc}</span>
      <span>{date}</span>
    </div>
  </motion.div>
);

function About() {
  // Get the translations and creates a array with the two items to be rendered.
  const t = useTranslations("About");
  const items = [
    {
      title: t("ifsc"),
      desc: t("ifscDesc"),
      date: t("ifscDate"),
      delay: 0.5,
    },
    {
      title: t("ciencias"),
      desc: t("cienciasDesc"),
      date: t("cienciasDate"),
      delay: 0.8,
    },
  ];

  return (
    <section className="w-full min-h-[100dvh] pt-20 flex items-center justify-around max-lg:flex-col max-lg:justify-center max-lg:gap-8">
      <motion.div className="h-fit w-96 flex flex-col gap-4 items-center justify-around max-[480px]:max-w-80">
        <AnimatedHeading text={t("aboutMe")} />
        <AnimatedParagraph text={t("desc")} />
        <AnimatedParagraph text={t("desc2")} delay={1} />
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
        className="h-fit w-96 flex flex-col items-center justify-around gap-12 max-[480px]:max-w-80 [@media(max-height:900px)]:gap-8"
      >
        <AnimatedHeading text={t("studies")} delay={0.5} />
        <div className="flex flex-col gap-14 h-fit [@media(max-height:900px)]:gap-6">
          {items.map((item, index) => (
            <AnimatedItem
              key={index}
              title={item.title}
              desc={item.desc}
              date={item.date}
              delay={item.delay}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
