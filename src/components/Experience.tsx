"use client";
import React from "react";
import { bebasNeue } from "./Projects";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <section className={`border-b border-solid border-neutral-800`}>
      <div className="flex flex-col mx-4 mt-20 mb-10 gap-4 md:mx-12 lg:mx-28 text-neutral-900">
        {/* Heading */}
        <div>
          <h1
            className={`${bebasNeue.className} text-white text-center text-5xl md:text-7xl`}
          >
            My Experience
          </h1>
        </div>
        <div className="mt-8">
          <VerticalTimeline>
            <VerticalTimelineElement
              className=""
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Nov 2023 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="">Full Stack Intern</h3>
              <h4 className="">Rapidoreach,Remote</h4>
              <p>
                Created their Developers API portal, Implemented Salesforce
                Login, Created Landing Pages, Bug Fixes
              </p>
              <p>React, Next.js 14, Typescript, Jotai, MongoDB</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="text-slate-300"
              contentStyle={{
                backgroundColor: "#0f172a",
              }}
              date="July 2023 - Nov 2023"
              iconStyle={{
                background: "#0f172a",
                color: "#fff",
              }}
              icon={<MdWork />}
            >
              <h3 className="">Foundation Course</h3>
              <h4 className="">CodeQuotient, Mohali (Remote)</h4>
              <p>
                Learned Javascript,Node.js, Socket.io, MongoDB and Much more
              </p>
              <p>Created the Ticketing Management Project there</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
