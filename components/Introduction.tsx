import TextAnimation from "./TextAnimation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
function Introduction() {
  // useState and useEffect for delaying the start of the code.
  const [start, setStart] = useState(false);
  const [secondStart, setSecondStart] = useState(false);
  const t = useTranslations("Introduction");

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setStart(true);
    }, 200);

    const secondTimeout = setTimeout(() => {
      setSecondStart(true);
    }, 1500);

    return () => {
      clearTimeout(firstTimeout);
      clearTimeout(secondTimeout);
    };
  }, []);

  return (
    <section className="w-full flex justify-around items-center min-h-[calc(100vh-80px)]">
      <div className="w-4 absolute left-0 top-0 bg-red-700 h-[720px]"></div>
      <div className="w-4 absolute left-50 top-100 bg-red-700">
        {window.innerHeight}
      </div>
      {start && (
        <>
          <div className="max-w-[500px] w-[500px] h-[360px] flex flex-col justify-start max-2xl:w-full max-lg:max-w-[300px]  max-lg:h-[180px]">
            <TextAnimation
              text="Gustavo Feijó"
              className="h-72 text-9xl text-wrap transition-all duration-1000  max-[1100px]:text-8xl max-lg:text-7xl max-lg:h-fit  max-md:text-5xl"
              cursorClassName="text-9xl max-[1100px]:text-8xl max-lg:text-7xl max-md:text-5xl"
            />
            {secondStart && (
              <TextAnimation
                className="h-10"
                speed={50}
                text={t("presentation")}
              />
            )}
          </div>
          <motion.div
            initial={{ rotate: -45, opacity: 0, scale: 0, x: 200 }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            className="aspect-square flex-center max-lg:scale-75"
          >
            <Image
              src="/eu.jpg"
              alt="Eu"
              width={400}
              height={400}
              className="rounded-full flex-1 transition-transform duration-1000 "
            />
          </motion.div>
        </>
      )}
    </section>
  );
}

export default Introduction;
