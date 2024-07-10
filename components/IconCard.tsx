"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

// Icon card for each technology.
function IconCard(tech: { icon: ReactNode; name: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: { delay: tech.delay },
      }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.2 }}
      viewport={{ once: true }}
      className="h-40 w-32  bg-foreground bg-opacity-15 shadow-primary shadow-md border-2 border-secondary rounded-xl flex-center flex-col  z-20 transition-colors text-7xl
      max-lg:h-32 max-lg:w-24 max-lg:text-5xl hover:text-primary hover:border-primary hover:border-opacity-20 "
    >
      <span className="text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] max-lg:text-lg">
        {tech.name}
      </span>
      {tech.icon}
    </motion.div>
  );
}
export default IconCard;
