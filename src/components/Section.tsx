import React from "react";
import { twMerge } from "tailwind-merge";

const Section = ({
  children,
  className,
  divClassName,
}: {
  children: React.ReactNode;
  className?: string;
  divClassName?: string;
}) => {
  return (
    <section
      className={twMerge("border-b border-solid border-neutral-800", className)}
    >
      <div
        className={twMerge(
          "flex flex-col mx-4 mt-20 mb-20 gap-4 md:mx-12 lg:mx-28 md:flex-row",
          divClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
