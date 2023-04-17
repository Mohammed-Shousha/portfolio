import { Variants } from "framer-motion";

export const title: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
export const image: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const header: Variants = {
  hide: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const skillsContainer: Variants = {
  hide: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

export const projectsContainer: Variants = {
  hide: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

export const experienceContainer: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const item: Variants = {
  hide: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
};

export const experienceItem: Variants = {
  hide: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};

export const sidebarContainer: Variants = {
  hide: {
    width: 0,
  },
  show: {
    width: "60%",
  },
  exit: {
    width: 0,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

export const sidebar: Variants = {
  hide: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  show: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export const sidebarItem: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
