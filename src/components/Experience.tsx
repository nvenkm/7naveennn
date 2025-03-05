"use client";
import React from "react";
import { bebasNeue } from "./Projects";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import SectionHeading from "./SectionHeading";
import Section from "./Section";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/ThemeContext";
import { FaLocationArrow } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

  //Style for black experience cards
  const blackContentStyle = { backgroundColor: "#0f172a", color: "#fff" };
  const blackIconStyle = { background: "#0f172a", color: "#fff" };
  const blackContentArrowStyle = { borderRight: "7px solid  #0f172a" };

  //Style for blue experience cards
  const blueContentStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
  const blueIconStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
  const blueContentArrowStyle = { borderRight: "7px solid  rgb(33, 150, 243)" };
  return (
    <Section id="experience" divClassName="md:flex-col">
      {/* Heading */}
      <SectionHeading title="My Experience" className="text-center" />
      <div ref={ref} className="mt-8">
        <VerticalTimeline
          lineColor={`${theme === "light" ? `black` : "white"}`}
        >
          <VerticalTimelineElement
            className=""
            visible={inView}
            contentStyle={blueContentStyle}
            contentArrowStyle={blueContentArrowStyle}
            date="December 2024 - March 2025"
            dateClassName="text-white md:text-black dark:text-white"
            iconStyle={blueIconStyle}
            icon={<MdWork />}
          >
            <h3 className="">Software Developer</h3>
            <h4 className="flex">
              <a
                className="underline underline-offset-2"
                target="_blank"
                href="https://kognics.ai"
              >
                Kognics.ai
              </a>{" "}
              <span className="flex items-center ml-3">
                <GoLocation className="mr-1" /> Jaipur
              </span>
            </h4>
            <p>
              Worked on their CRM platform, created and Integrated REST APIs,
              Worked on MySQL database
            </p>
            <p>React,Javascript, Node.js, MySQL</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            visible={inView}
            contentStyle={blackContentStyle}
            contentArrowStyle={blackContentArrowStyle}
            date="July 2024 - December 2024"
            dateClassName="text-white md:text-black dark:text-white"
            iconStyle={blackIconStyle}
            icon={<MdWork />}
          >
            <h3 className="">Software Developer Intern</h3>
            <h4 className="flex">
              <a
                className="underline underline-offset-2"
                target="_blank"
                href="https://kognics.ai"
              >
                Kognics.ai
              </a>{" "}
              <span className="flex items-center ml-3">
                <GoLocation className="mr-1" /> Jaipur
              </span>
            </h4>
            <p>
              Worked on their CRM platform, created and Integrated REST APIs,
              Worked on MySQL database
            </p>
            <p>React,Javascript, Node.js, MySQL</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className=""
            visible={inView}
            contentStyle={blueContentStyle}
            date="Nov 2023 - May 2024"
            dateClassName="text-white md:text-black dark:text-white"
            iconStyle={blueIconStyle}
            contentArrowStyle={blueContentArrowStyle}
            icon={<MdWork />}
          >
            <h3 className="">Full Stack Intern</h3>
            <h4 className="flex">
              <a
                className="underline underline-offset-2"
                target="_blank"
                href="https://rapidoform.com"
              >
                Rapidoform
              </a>{" "}
              <span className="flex items-center ml-3">
                <GoLocation className="mr-1" /> Remote
              </span>
            </h4>
            <p>
              Created their Developers API portal, Implemented Salesforce Login,
              Created Landing Pages, Bug Fixes
            </p>
            <p>React, Next.js 14, Typescript, Jotai, MongoDB</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
