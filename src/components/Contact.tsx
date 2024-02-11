import React from "react";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import ContactForm from "./ContactForm";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <Section id="contact" divClassName="">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <SectionHeading
          className="text-center md:text-left"
          title="Contact Me"
        />
        <div className="flex flex-col gap-10">
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
                href=""
              >
                Resume
              </a>
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex gap-8 text-3xl justify-center md:justify-start dark:text-green-wala">
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
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
