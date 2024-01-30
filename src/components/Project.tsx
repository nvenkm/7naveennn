import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Badge from "./Badge";
interface ProjectInterface {
  id: Number;
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  liveDeploylink: string;
  projectYear: string;
  projectTechnologies: string[];
}

const Project = ({ project }: { project: ProjectInterface }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="bg-[#1a1a1a] flex items-center px-7 py-12 rounded-lg md:w-1/2">
        <Image
          width={1900}
          height={890}
          alt={project.title}
          src={project.imageSrc}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-5 justify-center md:w-1/2">
        {/* Project Title and description */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl text-white">{project.title}</h3>
          <p>{project.description}</p>
        </div>
        {/* Project Info */}
        <h4 className="p-2 border-b border-solid border-zinc-700">
          PROJECT INFO
        </h4>
        <div className="flex justify-between items-center gap-3 p-2 border-b border-solid border-zinc-700">
          <p>Year</p>
          <p>{project.projectYear}</p>
        </div>
        <div className="flex justify-between items-center gap-3 p-2 border-b border-solid border-zinc-700">
          <p>Technologies</p>
          <div className="flex gap-2 flex-wrap">
            {project.projectTechnologies.map((tech) => {
              return <Badge key={tech} title={tech} />;
            })}
          </div>
        </div>
        {/* Live Demo and Github Links */}
        <div className="flex gap-5">
          <a
            href={project.liveDeploylink}
            target="_blank"
            className="flex gap-3 items-center text-green-wala underline underline-offset-4"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt size={20} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="flex gap-3 items-center text-green-wala underline underline-offset-4"
          >
            <span>Github Link</span>
            <FaGithub size={23} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
