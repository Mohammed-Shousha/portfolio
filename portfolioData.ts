import GithubIcon from "./public/github.svg";
import LinkedinIcon from "./public/linkedin.svg";
import EmailIcon from "./public/email.svg";

export const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Resume",
    link: "/resume.pdf",
  },
];

export const contacts = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohammed-m-shousha/",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    link: "https://github.com/Mohammed-Shousha",
    icon: GithubIcon,
  },
  {
    name: "Email",
    link: "mailto:mshoush29@gmail.com",
    icon: EmailIcon,
  },
];

export const skills = [
  {
    name: "HTML",
    icon: "html.svg",
  },
  {
    name: "CSS",
    icon: "css.svg",
  },
  {
    name: "JavaScript",
    icon: "javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "typescript.svg",
  },
  {
    name: "React",
    icon: "react.svg",
  },
  {
    name: "Nodejs",
    icon: "nodejs.svg",
  },
  {
    name: "express",
    icon: "express.svg",
  },
  {
    name: "MongoDB",
    icon: "mongodb.svg",
  },
  {
    name: "PostgreSQL",
    icon: "postgresql.svg",
  },
  {
    name: "GraphQL",
    icon: "graphql.svg",
  },
  {
    name: "Dart",
    icon: "dart.svg",
  },
  {
    name: "Flutter",
    icon: "flutter.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwindcss.svg",
  },
  {
    name: "styled-components",
    icon: "styledcomponents.svg",
  },
  {
    name: "Nextjs",
    icon: "nextjs.svg",
  },
  {
    name: "Python",
    icon: "python.svg",
  },
  {
    name: "scikit-learn",
    icon: "scikitlearn.svg",
  },
  {
    name: "Tensorflow",
    icon: "tensorflow.svg",
  },
  {
    name: "Git",
    icon: "git.svg",
  },
  {
    name: "Power BI",
    icon: "powerbi.svg",
  },
];

export const projects = [
  {
    title: "Online Store",
    description:
      "An online store website that offers a seamless shopping experience to its users.",
    link: "https://github.com/Mohammed-Shousha/online-store",
    technologies: [
      "react",
      "javascript",
      "styledcomponents",
      "nodejs",
      "graphql",
      "express",
      "mongodb",
      "stripe",
    ],
    backendLink: "https://github.com/Mohammed-Shousha/online-store-backend",
  },
  {
    title: "Recipes App",
    description:
      "An easy-to-use recipes app that offers the user a variety of delicious recipes to choose from.",
    link: "https://github.com/Mohammed-Shousha/recipes-app",
    technologies: [
      "react",
      "javascript",
      "styledcomponents",
      "graphql",
      "nodejs",
      "express",
      "postgresql",
    ],
    backendLink: "https://github.com/Mohammed-Shousha/recipes-app-backend",
  },
  {
    title: "Smart Shopping Cart",
    description:
      "A full-stack website that acts as a user interface on a smart shopping cart using computer vision.",
    link: "https://github.com/Mohammed-Shousha/smart-shopping-cart",
    technologies: [
      "react",
      "javascript",
      "styledcomponents",
      "python",
      "fastapi",
      "docker",
      "stripe",
    ],
  },
  {
    title: "Portfolio",
    description:
      "My portfolio website that showcases my skills, projects and experiences.",
    link: "https://github.com/Mohammed-Shousha/portfolio",
    technologies: ["nextjs", "typescript", "tailwindcss"],
  },
  {
    title: "Basic Banking System",
    description:
      "A full-stack basic banking website that enables transferring money between customers and viewing all customers and their previous transfers.",
    link: "https://github.com/Mohammed-Shousha/basic-banking-system",
    technologies: [
      "react",
      "typescript",
      "css",
      "nodejs",
      "express",
      "mongodb",
    ],
  },
  {
    title: "Finding Donors for CharityML",
    description:
      "A notebook to predict whether an individual makes more than $50,000 using data collected from the 1994 U.S Census",
    link: "https://github.com/Mohammed-Shousha/finding-donors-project",
    technologies: ["python", "scikitlearn"],
  },
];

export const experiences = [
  {
    role: "Software Engineer Intern",
    company: "alx_africa",
    date: "Feb 2023 - Present",
    description: [
      "Acquired valuable technical and teamwork skills that I will continue to apply in my future career as a software engineer.",
      "Participated in peer learning days, received guidance from technical mentors, and contributed to community forums.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "The Sparks Foundation",
    date: "Feb 2023 - Mar 2023",
    description: [
      "Tasked to create a basic banking system that enables transferring money between customers andviewing all customers and their previous transfers.",
      "Incorporated a variety of modern technologies such as React, Vite, Typescript, Node.js, Express, and MongoDB.",
      "Designed and implemented a responsive user interface to optimize usability.",
    ],
  },
  {
    role: "IoT Intern",
    company: "Information Technology Institute (ITI)",
    date: "Jul 2022 - Sep 2022",
    description: [
      "Created IoT applications using the Master of Things platform.",
      "Learned about IoT application protocols.",
      "Used IoT devices such as Sens'it.",
    ],
  },
];
