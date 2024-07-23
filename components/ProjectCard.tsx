"use client";
import { motion } from "framer-motion";
import { ProjectData } from "./pages/Projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

function ProjectCard(project: ProjectData) {
  const t = useTranslations(project.translation);
  return (
    <motion.div
      initial={{ x: -25, opacity: 0, scale: 1.2 }}
      whileInView={{ x: 0, opacity: 1, scale: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className="flex flex-col gap-2"
    >
      <motion.span
        initial={{ x: -20, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
        className="w-full text-4xl text-center"
      >
        {t("name")}
      </motion.span>
      <Dialog>
        <DialogTrigger className="border">
          <Image
            alt={t("name")}
            src={`/projects/${project.projectImage}`}
            width={400}
            height={225}
          />
        </DialogTrigger>
        <DialogContent className="flex-center flex-col w-fit min-w-fit min-h-fit max-[700px]:px-4 ">
          <DialogHeader>
            <DialogTitle className="text-center text-5xl" asChild>
              <motion.h1
                initial={{ y: -10, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
              >
                {t("name")}
              </motion.h1>
            </DialogTitle>
            <DialogDescription
              className="text-center text-wrap min-h-fit max-w-[640px]"
              asChild
            >
              <motion.p
                initial={{ x: -30, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
              >
                {t("description")}
              </motion.p>
            </DialogDescription>
          </DialogHeader>
          <Image
            alt={t("name")}
            src={`/projects/${project.projectImage}`}
            className="border border-secondary max-[700px]:max-w-[320px] min-[700px]:min-w-fit"
            width={640}
            height={360}
            quality={100}
          />
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.8 },
            }}
            className="flex w-full px-8"
          >
            {project.technologies.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Tech</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background">
                  {project.technologies.map((tech, index) => (
                    <DropdownMenuItem
                      className="flex gap-2 text-base text-primary "
                      key={index}
                    >
                      <span> {tech.icon}</span>
                      <span className="text-foreground">{tech.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <div className="flex flex-1 justify-around items-center">
              {project.links?.map((link, index) => (
                <Link
                  key={index}
                  className="flex gap-2 items-center text-lg"
                  href={link.link}
                >
                  {link.icon}
                  <span className="max-[600px]:hidden">{link.text}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export default ProjectCard;
