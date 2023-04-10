import Image from "next/image";
import { skills } from "@/portfolioData";

const Skills = () => (
  <div id="skills" className="mx-auto pt-28 container h-screen">
    <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold">Skills</h2>
    <div className="grid grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
      {skills.map((skill, index) => (
        <Image
          key={index}
          src={skill.icon}
          alt={skill.name}
          width={64}
          height={64}
          className="mb-4 w-10 sm:w-12 md:w-14 lg:w-16 hover:scale-125 duration-700"
          priority={index === 0}
        />
      ))}
    </div>
  </div>
);

export default Skills;
