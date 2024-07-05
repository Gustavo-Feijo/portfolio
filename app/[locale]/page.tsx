"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className=" min-h-[200vh]">
      <motion.div
        className="w-20 h-20 bg-red-600 absolute top-[2000]"
        initial={{ x: 1500, y: 2000 }}
        whileInView={{ x: 300, y: -500 }}
        transition={{ duration: 1, bounce: 0.2, type: "spring" }}
      >
        Eu gosto de batata
      </motion.div>
    </main>
  );
}
