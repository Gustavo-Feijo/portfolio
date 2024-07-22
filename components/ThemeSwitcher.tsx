"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";

// Component for switching the theme.
function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [isDark, setDark] = useState(theme == "dark");

  return (
    <div
      className="w-20 h-10 rounded-full bg-secondary flex justify-around items-center relative cursor-pointer"
      data-testid="change-theme"
      onClick={() => {
        setDark(!isDark);
        theme == "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <motion.div
        animate={{ x: isDark ? 20 : -20 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-1/3 aspect-square rounded-full bg-foreground absolute"
      ></motion.div>
      <FaMoon className="text-xl" />
      <FaSun className="text-xl" />
    </div>
  );
}

export default ThemeSwitcher;
