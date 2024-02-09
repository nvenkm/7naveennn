import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <Section
      className="text-sm"
      divClassName="flex-col md:flex-col gap-4 items-center"
    >
      <p className="text-center w-full ">&copy; Naveen. All rights reserved.</p>
      <p className="w-full text-center">
        <span className="font-medium text-sm w-full text-white">
          About this website :{" "}
        </span>
        Built with React.js & Next.js (App router & Server Actions),
        Typescript,Tailwind CSS, Framer motion, Resend, Hosted on Vercel{"  "}
      </p>
      <a
        href="https://github.com/nvenkm/7naveennn"
        target="_blank"
        className="mt-2 text-green-wala hover:border-b border-solid border-green-wala w-fit"
      >
        Github&nbsp;Link&nbsp;for&nbsp;the&nbsp;repo
      </a>
    </Section>
  );
};

export default Footer;
