"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useGlobalState } from "@/context/GlobalStateContext";
import { useTranslations } from "next-intl";
import ThemeSwitcher from "./ThemeSwitcher";

//Function to render the topbar, containing a theme switcher and a simple menu button.
function TopBar() {
  // Get the global state to render the overlay button and to toggle it on.
  const { state, toggleOverlay } = useGlobalState();
  const t = useTranslations("TopBar");
  return (
    <motion.header
      className="h-20 w-[100vw] px-10 flex items-center fixed border-secondary border-b-2 z-50 transition-colors duration-1000  bg-black bg-opacity-50 backdrop-blur-md max-[450px]:px-2"
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
            data-testid="overlay-close"
            onClick={() => toggleOverlay()}
          >
            <FaTimes className="text-4xl cursor-pointer transition-transform hover:scale-150" />
          </motion.div>
        ) : (
          <motion.div
            key="FaBars"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="overlay-open"
            onClick={() => toggleOverlay()}
          >
            <FaBars className="text-4xl cursor-pointer transition-transform hover:scale-150" />
          </motion.div>
        )}
      </div>
      <p className="text-5xl tracking-wider font-mono max-[450px]:tracking-tight ">
        {t("portfolio")}
      </p>
      <div className="flex-1 flex items-center justify-end">
        <ThemeSwitcher />
      </div>
    </motion.header>
  );
}

export default TopBar;
