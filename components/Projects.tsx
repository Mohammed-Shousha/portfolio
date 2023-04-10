import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/portfolioData";

const Projects = () => (
  <div id="projects" className="mx-auto py-28 container">
    <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold">
      Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
          technologies={project.technologies}
        />
      ))}
    </div>
  </div>
);

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const Project = ({ title, description, technologies, link }: ProjectProps) => {
  const { theme } = useTheme();

  const src = theme === "dark" ? "link.svg" : "link-dark.svg";

  return (
    <div className="relative hover:-translate-y-3 duration-500 ease-in-out">
      <div className="flex flex-col justify-between p-5 border-2 rounded-lg border-primary hover:border-accent dark:border-secondary dark:hover:border-accent w-80 sm:w-full h-80 lg:h-96 group">
        <div>
          <h3 className="mb-5 text-lg md:text-xl lg:text-2xl font-bold group-hover:text-accent">
            {title}
          </h3>
          <p className="pb-2 text-sm md:text-base">{description}</p>
        </div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-4 "
        >
          <Image
            src={src}
            alt="Project Link"
            width={24}
            height={24}
            className="w-5 lg:w-6"
          />
        </Link>
        <div className="mt-4 flex flex-wrap">
          {technologies.map((technology, index) => (
            <div key={index} className="mr-3 mb-3">
              <Image
                src={`${technology}.svg`}
                alt={technology}
                width={24}
                height={24}
                className="w-8 lg:w-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
