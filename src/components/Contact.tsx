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
    <Section divClassName="mt-14">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <SectionHeading title="Contact Me" />
        <div className="flex flex-col gap-10">
          {/* Email and resume */}
          <div className="flex flex-col gap-2">
            <p>
              Say Hello at{" "}
              <a
                href=""
                className="text-green-wala border-b pb-[1px] border-solid border-green-wala"
              >
                7naveennn@gmail.com
              </a>
            </p>
            <p>
              For more info, here&apos;s my{" "}
              <a
                className="text-green-wala border-b pb-[1px] border-solid border-green-wala"
                href=""
              >
                Resume
              </a>
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex gap-8 text-3xl text-green-wala">
            <IoLogoLinkedin />
            <FaGithub />
            <FaXTwitter />
            <FaInstagram />
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
