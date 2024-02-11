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

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

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
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="Nov 2023 - present"
            dateClassName="dark:text-white text-black"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="">Full Stack Intern</h3>
            <h4 className="">Rapidoreach,Remote</h4>
            <p>
              Created their Developers API portal, Implemented Salesforce Login,
              Created Landing Pages, Bug Fixes
            </p>
            <p>React, Next.js 14, Typescript, Jotai, MongoDB</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={inView}
            className="text-slate-300"
            contentStyle={{
              backgroundColor: "#0f172a",
            }}
            date="July 2023 - Nov 2023"
            dateClassName="dark:text-white text-black"
            iconStyle={{
              background: "#0f172a",
              color: "#fff",
            }}
            icon={<MdWork />}
          >
            <h3 className="">Foundation Course</h3>
            <h4 className="">CodeQuotient, Mohali (Remote)</h4>
            <p>Learned Javascript,Node.js, Socket.io, MongoDB and Much more</p>
            <p>Created the Ticketing Management Project there</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export default Experience;
