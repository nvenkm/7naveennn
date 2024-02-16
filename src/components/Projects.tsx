import React from "react";
import { Bebas_Neue } from "next/font/google";
import Project from "./Project";
export const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { projects } from "../data/Projects";
import SectionHeading from "./SectionHeading";
import Section from "./Section";

const Projects = () => {
  return (
    <Section id="projects" divClassName="md:mx-12 lg:mx-28 md:flex-col">
      <div className="flex flex-col gap-3 md:w-3/4">
        <SectionHeading
          className="text-center md:text-left"
          title="Featured Projects"
        />
        <p className="text-center md:text-left text-black-wala dark:text-[#C7C7C7] text-lg leading-7">
          Here are some of the selected projects that showcase my passion for
          Full Stack development.
        </p>
      </div>
      {/* Projects in this div */}
      <div className="mt-24 flex flex-wrap gap-8 justify-center">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </Section>
  );
};

export default Projects;
