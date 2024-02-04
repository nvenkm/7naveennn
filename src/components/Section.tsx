"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Section = ({
  children,
  className,
  divClassName,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  divClassName?: string;
  id?: string;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section
      id={id}
      className={twMerge(
        "border-b  scroll-mt-24 md:scroll-mt-10  border-solid border-neutral-800",
        className
      )}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
        className={twMerge(
          "flex flex-col mx-4 pt-12 md:pt-14 mb-12 gap-4 md:mx-12 lg:mx-28 md:flex-row",
          divClassName
        )}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section;
