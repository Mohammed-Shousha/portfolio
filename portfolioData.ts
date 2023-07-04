import GithubIcon from "./public/icons/github.svg";
import LinkedinIcon from "./public/icons/linkedin.svg";
import EmailIcon from "./public/icons/email.svg";

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
    icon: "icons/html.svg",
  },
  {
    name: "CSS",
    icon: "icons/css.svg",
  },
  {
    name: "JavaScript",
    icon: "icons/javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "icons/typescript.svg",
  },
  {
    name: "React",
    icon: "icons/react.svg",
  },
  {
    name: "Nextjs",
    icon: "icons/nextjs.svg",
  },
  {
    name: "React Native",
    icon: "icons/react-native.svg",
  },
  {
    name: "Expo",
    icon: "icons/expo.svg",
  },
  {
    name: "Dart",
    icon: "icons/dart.svg",
  },
  {
    name: "Flutter",
    icon: "icons/flutter.svg",
  },

  {
    name: "Nodejs",
    icon: "icons/nodejs.svg",
  },
  {
    name: "express",
    icon: "icons/express.svg",
  },
  {
    name: "MongoDB",
    icon: "icons/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    icon: "icons/postgresql.svg",
  },
  {
    name: "GraphQL",
    icon: "icons/graphql.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "icons/tailwindcss.svg",
  },
  {
    name: "styled-components",
    icon: "icons/styledcomponents.svg",
  },

  {
    name: "Python",
    icon: "icons/python.svg",
  },
  {
    name: "FastAPI",
    icon: "icons/fastapi.svg",
  },
  {
    name: "Git",
    icon: "icons/git.svg",
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
      "express",
      "graphql",
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
      "react-native",
      "expo",
      "javascript",
      "styledcomponents",
      "nodejs",
      "express",
      "graphql",
      "postgresql",
    ],
    backendLink: "https://github.com/Mohammed-Shousha/recipes-app-backend",
  },
  {
    title: "SAP (Smart Automated Pharmacy)",
    description:
      "Smart Automated Pharmacy (SAP) is my graduation project, revolutionizing medication access and management.",
    link: "https://github.com/Mohammed-Shousha/graduation-project",
    technologies: [
      "dart",
      "flutter",
      "nodejs",
      "express",
      "graphql",
      "python",
      "fastapi",
      "mongodb",
      "stripe",
      "raspberrypi",
    ],
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
    technologies: ["nextjs", "typescript", "tailwindcss", "framer-motion"],
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
];

export const experiences = [
  {
    role: "Software Engineer Intern",
    company: "alx_africa",
    date: "Feb 2023 - Present",
    description: [
      "Acquired valuable technical and teamwork skills applicable to future software engineering roles.",
      "Engaged in peer learning sessions, received support from technical mentors, and actively contributed to community forums.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "The Sparks Foundation",
    date: "Feb 2023 - Mar 2023",
    description: [
      "Developed a basic banking system for facilitating customer money transfers and providing comprehensive transaction history.",
      "Incorporated a variety of modern technologies such as React, Typescript, Node.js, Express, and MongoDB.",
      "Designed and implemented a responsive user interface to enhance usability.",
    ],
  },
  {
    role: "IoT Intern",
    company: "Information Technology Institute (ITI)",
    date: "Jul 2022 - Sep 2022",
    description: [
      "Designed and developed innovative IoT applications leveraging the Master of Things platform.",
      "Studied IoT application protocols to enhance understanding of IoT application development.",
      "Applied Sens'it and other IoT devices in real-world scenarios, acquiring practical experience.",
    ],
  },
];
