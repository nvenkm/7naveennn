import { bebasNeue } from "./Projects";
import { skills } from "../data/Skills";
import Badge from "./Badge";

const Skills = () => {
  return (
    <section className={`border-b border-solid border-neutral-800`}>
      <div className="flex flex-col mx-4 mt-20 mb-10 gap-4 md:mx-12 lg:mx-28 md:flex-row">
        {/* Heading */}
        <div className="md:w-1/2">
          <h1
            className={`${bebasNeue.className} text-white text-5xl md:text-7xl`}
          >
            My Capabilities
          </h1>
        </div>
        {/* Skills */}
        <div className="flex flex-col gap-7 md:w-1/2">
          <p>
            I am always looking to add more skills.Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            veniam eius ad accusantium quae corporis maxime libero distinctio
            itaque dolorem beatae reiciendis atque asperiores blanditiis? Odit,
            corrupti ab vel accusamus magni placeat qui atque facilis facere
            suscipit, nulla, eius nesciunt sint? Sit quae iure qui. purus
            faucibus tristique ut et dolor.{" "}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  title={skill}
                  className="px-7 py-3 bg-transparent text-white border-slate-700 rounded-full "
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
