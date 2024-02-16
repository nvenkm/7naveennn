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
    <div className="flex md:max-w-[45%] flex-col gap-5 dark:bg-slate-900 bg-slate-100 py-5 px-3 md:p-5 rounded-2xl">
      {/* Project Image */}
      <div className="dark:bg-slate-800 flex items-center p-3 rounded-lg">
        <Image
          width={1900}
          height={890}
          alt={project.title}
          src={project.imageSrc}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-5">
        {/* Project Title and description */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl dark:text-white text-black-wala">
            {project.title}
          </h3>
          <p>{project.description}</p>
        </div>

        {/* Project Info */}
        <div>
          <h4 className="p-3 border-b border-solid border-zinc-700">
            PROJECT INFO
          </h4>
          <div className="flex justify-between items-center gap-3 p-3 border-b border-solid border-zinc-700">
            <p>Year</p>
            <p>{project.projectYear}</p>
          </div>
          <div className="flex justify-between items-center gap-3 p-3 border-b border-solid border-zinc-700">
            <p>Technologies</p>
            <div className="flex gap-2 flex-wrap">
              {project.projectTechnologies.map((tech) => {
                return <Badge key={tech} title={tech} />;
              })}
            </div>
          </div>
          {/* Live Demo and Github Links */}
        </div>
        <div className="flex gap-5">
          <a
            href={project.liveDeploylink}
            target="_blank"
            className="flex gap-3 items-center dark:text-green-wala underline underline-offset-4"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt size={20} />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="flex gap-3 items-center dark:text-green-wala underline underline-offset-4"
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
