"use client";
import { MotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Function that returns a span that will be filled on runtime with a typing animation.
function TextAnimation({
  text,
  speed = 150,
  className = "",
  cursorClassName = "",
  motionProps,
}: {
  text: string;
  speed?: number;
  className?: string;
  cursorClassName?: string;
  motionProps?: MotionProps;
}) {
  // The display text, the current letter to be written and a flag for the end of the text.
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textEnd, setTextEnd] = useState(false);

  useEffect(() => {
    // Add a letter to the display letter every x (speed arg) seconds.
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Flag to make the cursor stop blinking.
      setTextEnd(true);
    }
  }, [speed, index, text]);

  return (
    <motion.span className={className} {...motionProps}>
      {displayText}
      {!textEnd && (
        <motion.span
          className={cursorClassName}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
}

export default TextAnimation;
