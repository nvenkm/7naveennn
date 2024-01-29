import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Intro = () => {
  return (
    <section
      className={`${bebasNeue.className}  border-b border-solid border-neutral-800`}
    >
      <div className="flex flex-col md:flex-row mx-4 mt-6 gap-4 md:mx-12 lg:mx-28">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
          <div>
            <h1 className="uppercase text-white text-4xl md:text-6xl lg:text-8xl font-normal">
              hi, i am <br />
              Naveen Kumar.
            </h1>
            <p
              className={`${inter.className} text-stone-300 text-base md:text-md font-normal leading-[27px]`}
            >
              An India based Full Stack developer passionate about building
              accessible and user friendly websites.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-green-wala text-[#0A0A0A] uppercase py-3 px-6 text-xl rounded-full w-fit">
              Contact Me
            </button>

            {/* Github Icon */}
            <span className="text-green-wala bg-[#0A0A0A]">
              <FaGithub size={30} />
            </span>

            {/* Linkedin Icon */}
            <span className="text-green-wala bg-[#0A0A0A]">
              <IoLogoLinkedin size={32} />
            </span>

            {/* Instagram */}
            <span className="text-green-wala bg-[#0A0A0A]">
              <FaInstagram size={32} />
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
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
