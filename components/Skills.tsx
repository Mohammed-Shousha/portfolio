import Image from "next/image";
import { skills } from "@/portfolioData";
import { motion } from "framer-motion";
import { header, skillsContainer, item } from "@/styles/variants";

const Skills = () => (
  <div id="skills" className="mx-auto pt-28 container h-screen">
    <motion.h2
      className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold"
      variants={header}
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      Skills
    </motion.h2>
    <motion.div
      className="grid grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
      variants={skillsContainer}
      initial="hide"
      whileInView="show"
      exit="hide"
    >
      {skills.map((skill, index) => (
        <motion.div variants={item} key={index}>
          <Image
            src={skill.icon}
            alt={skill.name}
            width={64}
            height={64}
            className="mb-4 w-10 sm:w-12 md:w-14 lg:w-16 hover:scale-125 duration-700"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default Skills;
