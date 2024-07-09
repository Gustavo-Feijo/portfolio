"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import { useGlobalState } from "@/context/GlobalStateContext";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

//Function to render the topbar, containing a theme switcher and a simple menu button.
function TopBar() {
  // Get the global state to render the overlay button and to toggle it on.
  const { state, toggleOverlay } = useGlobalState();
  const t = useTranslations("TopBar");
  return (
    <motion.header
      className="h-20 w-[100vw] max-w-full px-10 flex items-center fixed top-0 left-0 right-0 border-b-2 z-10 transition-colors duration-1000 border-secondary bg-black bg-opacity-50 backdrop-blur-md max-[400px]:px-4"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
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
      <p className="text-5xl tracking-wider">{t("portfolio")}</p>
      <div className="flex-1 flex items-center justify-end">
        <ThemeSwitcher />
      </div>
    </motion.header>
  );
}

export default TopBar;
