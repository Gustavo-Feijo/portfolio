"use client";
import { useGlobalState } from "@/context/GlobalStateContext";
import { AnimatePresence, motion } from "framer-motion";

function Overlay() {
  const { state } = useGlobalState();
  return (
    <AnimatePresence>
      {state.overlayOpen && (
        <motion.div
          className="fixed left-0 top-20 h-[calc(100vh-80px)] w-full bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-start  "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ scale: 0 }}
          key="Overlay"
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 2000, behavior: "smooth" });
            }}
          >
            wafawf
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Overlay;
