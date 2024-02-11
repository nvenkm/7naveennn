import React from "react";
import { twMerge } from "tailwind-merge";

const GreenButton = ({
  children,
  href,
  className,
  type,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: string;
}) => {
  return (
    <a
      type={type}
      href={href}
      className={twMerge(
        "dark:bg-green-wala dark:text-black-wala border border-solid border-black-wala uppercase py-3 px-6 text-xl rounded-full w-fit",
        className
      )}
    >
      {children}
    </a>
  );
};

export default GreenButton;
