import React from "react";
import { Bebas_Neue } from "next/font/google";
import Project from "./Project";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { projects } from "../data/Projects";

const Projects = () => {
  return (
    <section className={`border-b border-solid border-neutral-800`}>
      <div className="flex flex-col mx-4 mt-20 mb-10 gap-4 md:mx-12 lg:mx-28">
        <div className="flex flex-col gap-3 md:w-3/4">
          <h1
            className={`${bebasNeue.className} text-white text-5xl md:text-7xl`}
          >
            Featured Projects
          </h1>
          <p className="font- text-[#C7C7C7] text-lg leading-7">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        {/* Projects in this div */}
        <div className="mt-24 flex flex-col gap-24 md:gap-32">
          {projects.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
