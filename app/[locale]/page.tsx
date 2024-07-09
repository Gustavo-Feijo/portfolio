"use client";
import About from "@/app/[locale]/About";
import usePageScroll from "@/components/hooks/UsePageScroll";
import { useRef } from "react";
import Technologies from "./Technologies";
import Introduction from "./Introduction";

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
