import Image from "next/image";
import { skills } from "@/portfolioData";
import { motion } from "framer-motion";
import { header, skillsContainer, item } from "@/styles/variants";

const Skills = () => (
  <section id="skills" className="mx-auto py-20 sm:py-28 container">
    <motion.h2
      className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold"
      variants={header}
      initial="hide"
      whileInView="show"
    >
      Skills
    </motion.h2>
    <motion.div
      className="grid grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center"
      variants={skillsContainer}
      initial="hide"
      whileInView="show"
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
  </section>
);

export default Skills;
