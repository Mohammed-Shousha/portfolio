import { useState } from "react";
import { experiences } from "@/portfolioData";
import { motion } from "framer-motion";
import { header, experienceContainer } from "@/styles/variants";

const Experiences = () => {
  const companies = experiences.map((exp) => exp.company);

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const selectedExperience = experiences.filter(
    (exp) => exp.company === selectedCompany
  );

  return (
    <div id="experience" className="mb-20 py-28 container">
      <motion.h2
        className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold"
        variants={header}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        Experience
      </motion.h2>
      <motion.div
        className="flex justify-center mx-auto"
        variants={experienceContainer}
        initial="hide"
        whileInView="show"
        exit="hide"
      >
        <div>
          <ul className="w-20 lg:w-32">
            {companies.map((company) => (
              <li key={company}>
                <button
                  type="button"
                  className={`border-l-4 p-2 text-sm md:text-lg lg:text-xl font-semibold text-left hover:text-accent duration-500
                    ${
                      selectedCompany === company
                        ? "text-accent border-accent"
                        : "border-dark dark:border-light"
                    } `}
                  onClick={() => setSelectedCompany(company)}
                >
                  {company}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="pl-5 md:pl-10">
          {selectedExperience.map((exp) => (
            <Experience
              key={exp.company}
              role={exp.role}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface ExperienceProps {
  role: string;
  date: string;
  description: string[];
}

const Experience = ({ role, date, description }: ExperienceProps) => {
  return (
    <div className="flex flex-col justify-start w-64 sm:w-72 md:w-96 lg:w-[30rem]">
      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">{role}</h3>
      <p className="text-gray-500 text-xs md:text-sm lg:text-base">{date}</p>
      <ul>
        {description.map((desc, i) => (
          <li
            key={i}
            className="text-sm md:text-base lg:text-lg before:content-['◆'] before:text-accent before:mr-1"
          >
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
