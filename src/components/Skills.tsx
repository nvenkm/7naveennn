"use client";

import { bebasNeue } from "./Projects";
import { skills } from "../data/Skills";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Section from "./Section";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures the animation runs only once when the element is in view
  });

  return (
    <Section id="skills">
      {/* Heading */}
      <div className="md:w-1/2">
        <SectionHeading
          className="text-center md:text-left "
          title="My Capabilities"
        />
      </div>
      {/* Skills */}
      <div className="flex flex-col gap-7 md:w-1/2">
        <p className="text-center md:text-left">
          I am always looking to add more skills. With a passion for innovation
          and a dedication to delivering high-quality solutions, I am committed
          to staying updated with the latest technologies and best practices in
          software development to provide clients with cutting-edge solutions
          that meet their unique needs and requirements.{" "}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, i) => {
            return (
              <motion.span
                ref={ref}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: i / 10,
                }}
                key={skill}
                className="p-2 px-4 md:px-7 md:py-3 bg-transparent dark:dark:text-white border border-solid border-slate-950 dark:border-slate-700 rounded-full dark:hover:bg-zinc-900"
              >
                {skill}
              </motion.span>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
