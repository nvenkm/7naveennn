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

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "../data/Testimonials";
import Image from "next/image";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <Section id="testimonials" divClassName="md:flex-col">
      {/* Heading */}
      <SectionHeading title="Testimonials" className="text-center" />
      <div ref={ref} className="mt-8 flex justify-center">
        <Carousel className="w-full max-w-[70vw] md:max-w-[50vw]">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="p-0">
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        width={1280}
                        height={720}
                        alt="Testimonial"
                        src={testimonial.image}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;
