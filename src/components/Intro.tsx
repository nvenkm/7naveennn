import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Intro = () => {
  return (
    <section
      className={`${bebasNeue.className}  border-b border-solid border-neutral-800`}
    >
      <div className="flex mx-28">
        <div className="w-1/2 flex flex-col justify-center gap-10">
          <div>
            <h1 className="uppercase text-white text-[101px] font-normal leading-[90.90px]">
              hi, i am <br />
              Naveen Kumar.
            </h1>
            <p
              className={`${inter.className} text-stone-300 text-lg font-normal leading-[27px]`}
            >
              An India based Full Stack developer passionate about building
              accessible and user friendly websites.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#D3E97A] text-[#0A0A0A] uppercase py-3 px-6 text-xl rounded-full w-fit">
              Contact Me
            </button>
            <span className="text-[#D3E97A] bg-[#0A0A0A]">
              <FaGithub size={30} />
            </span>
            <span className="text-[#D3E97A] bg-[#0A0A0A]">
              <IoLogoLinkedin size={32} />
            </span>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <Image
            height={1024}
            width={1024}
            className="rounded-3xl w-auto h-4/5"
            src="/portraitt.png"
            alt="Portrait"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
