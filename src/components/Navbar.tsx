"use client";

import { Bebas_Neue } from "next/font/google";
import { useState } from "react";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { apps, navItems } from "../data/Navbar";
import { GrClose } from "react-icons/gr";
import ThemeSwitch from "./ThemeSwitch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiDownArrow } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const possibleClasses = ["block", "hidden", "flex"];
  return (
    <header
      className={`${bebasNeue.className} fixed w-screen md:static dark:bg-opacity-50 dark:backdrop-blur-lg z-50 bg-white dark:bg-black-wala p-4 md:w-auto py-6 max-[420px]:px-[20px] px-[40px] md:px-[60px] lg:px-24 border-b border-solid dark:border-neutral-800`}
    >
      <nav className="flex justify-between  items-center">
        <a href="#" className="text-4xl">
          Naveen.
        </a>
        <div className="flex gap-5">
          <ThemeSwitch />
          {/* Navbar for small screens */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1, transition: { duration: 0.3 } }}
                exit={{
                  scaleY: 0,
                  transition: { duration: 0.3 },
                }}
                className={`flex  origin-top absolute top-[89px] left-0 flex-col dark:text-white-wala text-6xl bg-white dark:bg-black-wala w-screen h-screen items-center overflow-x-hidden overflow-y-hidden md:hidden gap-8`}
              >
                {navItems.map((item) => {
                  return (
                    <a
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      href={item.href}
                      key={item.id}
                      className={`dark:hover:text-green-wala duration-300 hover:scale-105 ${
                        item.additionalStyles ? `${item.additionalStyles}` : ""
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Navbar for large screens */}
          <ul
            className={`hidden md:flex md:static md:h-auto md:flex-row md:text-2xl md:w-auto gap-8 md:items-start`}
          >
            {navItems.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`hover:text-green-wala transition duration-300 hover:scale-105`}
                >
                  {item.title}
                </Link>
              );
            })}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 bg-green-wala px-2 text-black-text rounded-sm">
                Apps <FaChevronDown size={15} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Some Extra Apps</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {apps.map((app) => {
                  return (
                    <DropdownMenuItem key={app.id}>
                      <Link href={app.href}>{app.title}</Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>

          {/* Button to toggle navbar at small screens */}
          <button
            className="md:hidden transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <span>
                <FaTimes
                  size={25}
                  className="transition duration-300 ease-in-out transform hover:scale-110"
                />
              </span>
            ) : (
              <span>
                <FaBars
                  size={25}
                  className="transition duration-300 ease-in-out transform hover:scale-110"
                />
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
