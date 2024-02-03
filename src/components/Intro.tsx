"use client";

import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { contactIcons } from "../data/Intro";
import SectionHeading from "./SectionHeading";
import GreenButton from "./GreenButton";
import Section from "./Section";

const Intro = () => {
  return (
    <Section
      divClassName="flex flex-col md:flex-row mx-4 mt-6 gap-4 md:mx-12 lg:mx-28"
      className={`${bebasNeue.className} pb-6  border-b border-solid border-neutral-800`}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center gap-10">
        <div>
          <SectionHeading className="uppercase text-4xl md:text-6xl lg:text-8xl">
            Hi, I am <br /> Naveen Kumar
          </SectionHeading>
          <p
            className={`${inter.className} text-stone-300 text-base md:text-md font-normal leading-[27px]`}
          >
            An India based Full Stack developer passionate about building
            accessible and user friendly websites.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <GreenButton href="#contact">Contact Me</GreenButton>

          {/* Contact Icons */}
          {contactIcons.map((icon) => (
            <a
              key={icon.id}
              href={icon.href}
              target="_blank"
              className="text-green-wala bg-[#0A0A0A]"
            >
              {icon.icon}
            </a>
          ))}
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
    </Section>
  );
};

export default Intro;
