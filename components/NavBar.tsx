import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { navLinks } from "@/portfolioData";
import MenuIcon from "../public/menu.svg";
import CloseIcon from "../public/close.svg";
import SunIcon from "../public/sun.svg";
import MoonIcon from "../public/moon.svg";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav>
      <div className="fixed top-0 z-50 min-w-full bg-accent">
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center ml-7 p-1"
              aria-label="Main menu"
              aria-expanded="false"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="w-8 fill-dark dark:fill-light" />
              ) : (
                <MenuIcon className="w-8 stroke-dark dark:stroke-light" />
              )}
            </button>
          </div>

          <div
            className="cursor-pointer absolute top-4 right-7 md:top-6 lg:top-5 lg:right-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme == "dark" ? (
              <SunIcon className="w-7 lg:w-9 fill-light" />
            ) : (
              <MoonIcon className="w-7 lg:w-9 fill-dark" />
            )}
          </div>
        </div>

        <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className=" block px-4 py-2 text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
