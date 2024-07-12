"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { FaPhone } from "react-icons/fa6";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import Link from "next/link";

function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  return (
    <section className="w-full flex justify-around items-center min-h-[100dvh] pt-20 max-md:flex-col-reverse">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        <h1 className="text-6xl text-center mb-8">INFO</h1>
        <motion.p
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-wrap text-2xl max-w-80 text-center max-[500px]:text-lg"
        >
          {t("info")}
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-4 items-center"
      >
        <h1 className="text-6xl text-center">{t("title")}</h1>
        <div className="flex flex-col gap-4">
          <span className="flex items-center text-2xl gap-2">
            <SiGmail />
            gustavofeijo.dev@gmail.com
          </span>
          <span className="flex items-center text-2xl gap-2">
            <FaPhone />
            (48) 99154-6078
          </span>
          <Link
            className="flex items-center text-2xl gap-2"
            href="https://www.linkedin.com/in/gustavo-feij%C3%B3-0767ab1b0"
          >
            <SiLinkedin />
            Gustavo Feijó
          </Link>
          <Link
            className="flex items-center text-2xl gap-2"
            href="https://github.com/Gustavo-Feijo"
          >
            <SiGithub />
            Gustavo-Feijo
          </Link>
        </div>
        <a
          href={locale == "br" ? "/curriculoBr.pdf" : "/curriculoEn.pdf"}
          download="Curriculum_GustavoFeijo.pdf"
          className=" max-w-fit"
        >
          <button className="px-4 py-2 bg-primary text-foreground rounded">
            {locale == "br" ? "Baixar Curriculo" : "Download Curriculum"}
          </button>
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
