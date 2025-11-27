/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import PortableText from "@sanity/block-content-to-react";
import React from "react";
import { IconType } from "react-icons";
import { FaSass } from "react-icons/fa";
import {
  SiFigma,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

import { sanityClient } from "../sanity";

const icons: IconType[] = [
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiFigma,
  SiNextdotjs,
  FaSass,
];

interface About {
  [key: string]: any;
  body: any[];
}

interface StackSectionProps {
  about: About[];
}

function StackSection({ about }: StackSectionProps): React.ReactElement {
  const { body } = about[0];
  return (
    <section
      className="relative mx-auto flex max-w-[1300px] flex-col items-center justify-center gap-[50px] py-10 lg:grid lg:grid-cols-2"
      id="about"
    >
      <div>
        <h1>About Me</h1>
        <div className="[&_p]:text-[21px] [&_p]:leading-[34px]">
          <PortableText blocks={body} {...sanityClient.config()} />
        </div>
      </div>
      <div className="flex w-full flex-wrap items-center justify-evenly lg:my-[30px] lg:justify-end"></div>
    </section>
  );
}

export default StackSection;
