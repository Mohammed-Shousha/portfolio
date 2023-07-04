import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { navLinks } from "@/portfolioData";
import MenuIcon from "../public/icons/menu.svg";
import CloseIcon from "../public/icons/close.svg";
import SunIcon from "../public/icons/sun.svg";
import MoonIcon from "../public/icons/moon.svg";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { sidebarContainer, sidebar, sidebarItem } from "@/styles/variants";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [open, cycleOpen] = useCycle(false, true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <nav className="fixed top-0 z-10 w-screen bg-accent">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="hidden md:block">
            <div className="ml-10 flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  target={`${link.name === "Resume" ? "_blank" : ""}`}
                  className="px-7 py-5 text-xl lg:text-2xl font-semibold hover:text-light dark:hover:text-dark duration-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => cycleOpen()}
              type="button"
              className="inline-flex items-center justify-center ml-7 p-1"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {open ? (
                <CloseIcon className="w-8 fill-dark dark:fill-light" />
              ) : (
                <MenuIcon className="w-8 stroke-dark dark:stroke-light" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.aside
            variants={sidebarContainer}
            initial="hide"
            animate="show"
            exit="exit"
            className="fixed top-16 z-50 h-screen bg-accent"
          >
            <motion.div
              className="px-2 py-3"
              initial="hide"
              animate="show"
              exit="hide"
              variants={sidebar}
            >
              {navLinks.map((link) => (
                <motion.a
                  onClick={() => cycleOpen()}
                  key={link.name}
                  href={link.link}
                  className="block px-5 py-5 text-2xl font-semibold"
                  target={`${link.name === "Resume" ? "_blank" : ""}`}
                  variants={sidebarItem}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div
        className="fixed top-4 right-7 md:top-6 lg:top-5 lg:right-10 z-50 cursor-pointer"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme == "dark" ? (
          <SunIcon className="w-8 lg:w-9 fill-light" />
        ) : (
          <MoonIcon className="w-8 lg:w-9 fill-dark" />
        )}
      </div>
    </>
  );
};

export default NavBar;
