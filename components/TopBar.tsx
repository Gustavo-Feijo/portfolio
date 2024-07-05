"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import { useGlobalState } from "@/context/GlobalStateContext";
import { motion } from "framer-motion";

function TopBar({ portfolio }: { portfolio: string }) {
  const { state, toggleOverlay } = useGlobalState();
  return (
    <motion.nav
      className="h-20 flex items-center justify-between border-b-2 border-secondary fixed top-0 left-0 right-0 p-10"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
    >
      <div className="flex-1">
        {state.overlayOpen ? (
          <motion.div
            key="FaTimes"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleOverlay()}
          >
            <FaTimes className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-150" />
          </motion.div>
        ) : (
          <motion.div
            key="FaBars"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => toggleOverlay()}
          >
            <FaBars className="text-4xl cursor-pointer transition-transform duration-200 hover:scale-150" />
          </motion.div>
        )}
      </div>
      <p className="text-5xl tracking-wider">{portfolio}</p>
      <div className="flex-1 flex items-center justify-end">
        <ThemeSwitcher />
      </div>
    </motion.nav>
  );
}

export default TopBar;
