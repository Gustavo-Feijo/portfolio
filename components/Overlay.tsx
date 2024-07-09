"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

// Overlay menu.
function Overlay() {
  // Get the overlay global state.
  const { state, toggleOverlay } = useGlobalState();

  // Get the translations for the overlay buttons and create a array with the avaible buttons.
  const t = useTranslations("Overlay");
  const buttonText: string[] = [
    t("about"),
    t("technologies"),
    t("projects"),
    t("contact"),
  ];
  return (
    <AnimatePresence>
      {state.overlayOpen && (
        <motion.div
          className="fixed left-0 top-20 h-[calc(100vh-80px)] w-full bg-zinc-950 bg-opacity-20 z-50 backdrop-blur-md overflow-scroll  "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ scale: 0 }}
          key="Overlay"
        >
          <nav className="flex flex-col gap-16 items-center pt-10 max-lg:gap-12">
            <LocaleSwitcher />
            {buttonText.map((button, index) => (
              <motion.button
                className="p-2 text-5xl hover:text-secondary max-lg:text-3xl"
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.2,
                  },
                }}
                onClick={() => {
                  toggleOverlay();
                  // Scrolls the entire screen by the index position * the height of the window.
                  window.scrollTo({
                    top: window.innerHeight * index + 1,
                    behavior: "smooth",
                  });
                }}
                key={index}
              >
                {button}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
