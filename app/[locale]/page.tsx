"use client";
import About from "@/components/pages/About";
import Introduction from "@/components/pages/Introduction";
import Technologies from "@/components/pages/Technologies";
import usePageScroll from "@/components/hooks/UsePageScroll";
import { useRef } from "react";

// Component that represents the entire page.
export default function Home() {
  const ref = useRef(null);
  usePageScroll(ref);
  return (
    <main
      ref={ref}
      className="min-h-[200vh] transition-all duration-1000 flex flex-col items-center px-72 max-[1700px]:px-40 max-xl:px-20 max-lg:px-6"
    >
      <Introduction />
      <About />
      <Technologies />
    </main>
  );
}
