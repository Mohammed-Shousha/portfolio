import Image from "next/image";
import { motion } from "framer-motion";
import { title, image } from "@/styles/variants";

const About = () => (
  <header id="about" className="mx-auto py-40 sm:py-52 container">
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={title}
      >
        <p className="mb-5 text-m sm:text-l md:text-xl lg:text-2xl font-normal text-accent">
          Hi, my name is
        </p>
        <h1 className="mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Mohammed Shousha.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          I'm a Software Engineer.
        </h2>
      </motion.div>
      <motion.div
        variants={image}
        initial="hide"
        whileInView="show"
        exit="hide"
        className="mx-auto my-auto w-48 sm:w-56 md:w-80 lg:w-96"
      >
        <Image
          src="/profile.jpg"
          alt="my profile picture"
          width={2000}
          height={2000}
          priority
          className="rounded-full border-2 border-dark dark:border-light"
        />
      </motion.div>
    </div>
  </header>
);

export default About;
