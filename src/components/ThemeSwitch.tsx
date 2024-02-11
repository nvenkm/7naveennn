import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="border border-solid border-gray-600 p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
    >
      {theme === "light" ? <BsSun size={17} /> : <BsMoon size={17} />}
    </button>
  );
};

export default ThemeSwitch;
