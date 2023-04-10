import { useState } from "react";
import { experiences } from "@/portfolioData";

const Experiences = () => {
  const companies = experiences.map((exp) => exp.company);

  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const selectedExperience = experiences.filter(
    (exp) => exp.company === selectedCompany
  );

  return (
    <div id="experience" className="mb-20 py-28 container">
      <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold">
        Experience
      </h2>
      <div className="flex justify-center mx-auto">
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
                        : "border-primary dark:border-secondary"
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
      </div>
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
      {description.map((desc, i) => (
        <p key={i} className="text-sm md:text-base lg:text-lg">
          ⨠ {desc}
        </p>
      ))}
    </div>
  );
};

export default Experiences;
