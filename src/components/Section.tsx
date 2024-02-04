"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({
  children,
  className,
  divClassName,
}: {
  children: React.ReactNode;
  className?: string;
  divClassName?: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6 }}
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
    </motion.section>
  );
};

export default Section;
