"use client";
import { motion } from "framer-motion";
function Technologies() {
  return (
    <motion.section
      className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-clip max-lg:flex-col max-lg:justify-center max-lg:gap-8"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="w-96 h-96 bg-black border !border-effect"></div>
    </motion.section>
  );
}

export default Technologies;
