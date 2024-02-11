"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// types for theme and theme context
type Theme = "dark" | "light";
type ThemeContext = { theme: Theme; toggleTheme: () => void };

const themeContext = createContext<ThemeContext | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  //get the theme from the localStorage on loading
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
    setIsThemeLoaded(true); // Set the flag indicating that the theme has been loaded
  }, []);

  const toggleTheme = function () {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Render nothing until the theme has been loaded
  if (!isThemeLoaded) return null;

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;

export function useTheme() {
  const context = useContext(themeContext);
  if (context === null) {
    throw new Error("useTheme can't be used outside the ThemeProvider!");
  }

  return context;
}
