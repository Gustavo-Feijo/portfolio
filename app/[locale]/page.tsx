"use client";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Technologies from "@/components/Technologies";
import usePageScroll from "@/components/hooks/UsePageScroll";

// Component that represents the entire page.
export default function Home() {
  usePageScroll();
  return (
    <main className="min-h-[200vh] transition-all duration-1000 flex flex-col items-center px-72 gap-20 max-[1700px]:px-40 max-xl:px-20 max-lg:px-6">
      <Introduction />
      <About />
      <Technologies />
    </main>
  );
}
