"use client";

import { Bebas_Neue } from "next/font/google";
import { useState } from "react";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navItems } from "../data/Navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const possibleClasses = ["block", "hidden", "flex"];
  return (
    <header
      className={`${bebasNeue.className} fixed w-screen md:static bg-opacity-50 backdrop-blur-lg z-50 bg-black-wala p-4 md:w-auto py-6 max-[420px]:px-[20px] px-[40px] md:px-[60px] border-b border-solid border-neutral-800`}
    >
      <nav className="flex justify-between  items-center">
        <div className="text-4xl">Naveen.</div>
        <div>
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
                className={`flex origin-top absolute top-[91px] left-0 flex-col text-6xl bg-black-wala w-screen h-[86vh] items-center overflow-x-hidden overflow-y-hidden md:hidden gap-8`}
              >
                {navItems.map((item) => {
                  return (
                    <a
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      href={item.href}
                      key={item.id}
                      className={`hover:text-green-wala duration-300 hover:scale-105 ${
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
                <a
                  href={item.href}
                  key={item.id}
                  className={`hover:text-green-wala transition duration-300 hover:scale-105`}
                >
                  {item.title}
                </a>
              );
            })}
          </ul>

          {/* Button to toggle navbar at small screens */}
          <button
            className="md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <FaBars size={25} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
