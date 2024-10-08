"use client";
import About from "@/components/pages/About";
import Introduction from "@/components/pages/Introduction";
import Technologies from "@/components/pages/Technologies";
import usePageScroll from "@/components/hooks/UsePageScroll";
import { useRef } from "react";
import Projects from "@/components/pages/Projects";
import Contact from "@/components/pages/Contact";

// Component that represents the entire page.
export default function Home() {
  const ref = useRef(null);
  usePageScroll(ref);
  return (
    <main
      ref={ref}
      className="transition-all duration-1000 overflow-hidden flex flex-col items-center px-72 max-[1700px]:px-40 max-xl:px-20 max-lg:px-6"
    >
      <Introduction />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
