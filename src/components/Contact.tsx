import React from "react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import ContactForm from "./ContactForm";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import Link from "next/link";

const Contact = () => {
  return (
    <Section id="contact" divClassName="">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <SectionHeading
          className="text-center md:text-left"
          title="Contact Me"
        />
        <div className="flex flex-col gap-10 items-center md:items-start">
          {/* Email and resume */}
          <div className="flex flex-col text-center md:text-left gap-2">
            <p>
              Say Hello at{" "}
              <a
                href=""
                className="dark:text-green-wala border-b pb-[1px] border-solid dark:border-green-wala border-black-wala"
              >
                7naveennn@gmail.com
              </a>
            </p>
            <p>
              For more info, here&apos;s my{" "}
              <a
                className="dark:text-green-wala border-b pb-[1px] border-solid dark:border-green-wala border-black-wala"
                href="/Naveen_Resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex gap-8 text-3xl justify-center md:justify-start dark:text-green-wala items-center md:items-start">
            <a href="https://www.linkedin.com/in/7naveennn/" target="_blank">
              <IoLogoLinkedin />
            </a>

            <a href="https://github.com/nvenkm" target="_blank">
              <FaGithub />
            </a>
            <a href="https://twitter.com/7naveennn" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/7naveennn" target="_blank">
              <FaInstagram />
            </a>
          </div>

          {/* Freelancing */}
          <div className="w-fit color-black-wala dark:text-black-wala bg-green-wala px-4 py-2 rounded-md">
            <span className="text-center md:text-left flex items-center gap-2">
              <span className="text-sm font-semibold">Find me on</span>
              <Link href={"https://www.fiverr.com/naveennn7"} target="_blank">
                {" "}
                <SiFiverr color="#1dbf73" size={60} />
              </Link>
              <span className="text-sm font-semibold"> and </span>
              <Link
                target="_blank"
                href={"https://www.upwork.com/freelancers/~014af9fb5c88d36360"}
              >
                <SiUpwork color="#14a800" className="mt-2 ml-1" size={30} />
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
