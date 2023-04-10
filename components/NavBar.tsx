import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/portfolioData";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeIcon = theme === "dark" ? "sun.svg" : "moon.svg";
  const menuIcon = theme === "dark" ? "menu.svg" : "menu-dark.svg";
  const closeIcon = theme === "dark" ? "close.svg" : "close-dark.svg";
  const navIcon = isMobileMenuOpen ? closeIcon : menuIcon;

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
                  className="px-7 py-5 text-xl lg:text-2xl font-semibold hover:text-secondary dark:hover:text-primary duration-500"
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
              <Image
                src={navIcon}
                alt="Menu"
                width={24}
                height={24}
                className="h-8 w-8"
              />
            </button>
          </div>

          <Image
            src={themeIcon}
            alt="Theme"
            width={30}
            height={30}
            className="cursor-pointer absolute top-4 right-7 md:top-6 md:right-10 "
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
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
