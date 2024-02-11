import React from "react";
import { twMerge } from "tailwind-merge";
import { bebasNeue } from "./Projects";

const SectionHeading = ({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h1
      className={twMerge(
        `${bebasNeue.className} text-black-wala dark:text-white text-5xl md:text-7xl`,
        className
      )}
    >
      {title}
      {children}
    </h1>
  );
};

export default SectionHeading;
