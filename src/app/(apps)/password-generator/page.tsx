import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import React from "react";

import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });
import { Inter } from "next/font/google";
import Image from "next/image";
import GreenButton from "@/components/GreenButton";
import { contactIcons } from "@/data/Intro";
const inter = Inter({ subsets: ["latin"] });
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PasswordGenerator from "@/components/PasswordGenerator";

const PasswordGeneratorPage = () => {
  return (
    <Section
      id="section"
      divClassName="flex flex-col md:flex-row mx-4  pt-[100px] md:p-5 gap-4 md:m-12  lg:mx-28 "
      className={`${bebasNeue.className} border-b border-solid border-neutral-800 pb-6`}
    >
      <div className="flex w-full flex-col justify-center gap-10 rounded-md border-2 border-primary p-10">
        <div>
          <SectionHeading className="text-2xl uppercase md:text-4xl lg:text-6xl">
            Password Generator
          </SectionHeading>
        </div>

        <PasswordGenerator />
      </div>
    </Section>
  );
};

export default PasswordGeneratorPage;
