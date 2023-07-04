import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/portfolioData";
import LinkIcon from "../public/icons/link.svg";
import { motion } from "framer-motion";
import { header, projectsContainer, item } from "@/styles/variants";

const Projects = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section id="projects" className="mx-auto py-20 sm:py-28 container">
      <motion.h2
        className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold"
        variants={header}
        initial="hide"
        whileInView="show"
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        variants={projectsContainer}
        initial="hide"
        whileInView="show"
        viewport={{ margin: width <= 640 ? "60%" : "" }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Project
              title={project.title}
              description={project.description}
              link={project.link}
              technologies={project.technologies}
              backendLink={project.backendLink}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  backendLink?: string;
}

const Project = ({
  title,
  description,
  technologies,
  link,
  backendLink,
}: ProjectProps) => (
  <div className="relative hover:-translate-y-3 duration-500 ease-in-out">
    <div className="flex flex-col justify-between p-5 border-2 rounded-lg border-dark hover:border-accent dark:border-light dark:hover:border-accent w-80 sm:w-full h-80 lg:h-96 group/card">
      <div>
        <h3 className="mb-5 text-lg md:text-xl lg:text-2xl font-bold group-hover/card:text-accent">
          {title}
        </h3>
        <p className="pb-2 text-sm md:text-base">{description}</p>
      </div>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-4 group/link"
      >
        <div className="flex justify-items-center">
          {backendLink && (
            <p className="mr-1 sm:text-xs md:text-sm lg:text-base font-thin group-hover/link:text-accent duration-300">
              Frontend
            </p>
          )}
          <LinkIcon className="w-5 lg:w-6 fill-dark dark:fill-light group-hover/link:fill-accent duration-300" />
        </div>
      </Link>
      {backendLink && (
        <Link
          href={backendLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-12 right-4 group/backend-link"
        >
          <div className="flex justify-items-center">
            <p className="mr-1 sm:text-xs md:text-sm lg:text-base font-thin group-hover/backend-link:text-accent duration-300">
              Backend
            </p>
            <LinkIcon className="w-5 lg:w-6 fill-dark dark:fill-light group-hover/backend-link:fill-accent duration-300" />
          </div>
        </Link>
      )}
      <div className="mt-4 flex flex-wrap">
        {technologies.map((technology, index) => (
          <div key={index} className="mr-3 mb-3">
            <Image
              src={`icons/${technology}.svg`}
              alt={technology}
              width={24}
              height={24}
              className="w-7 lg:w-9"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
