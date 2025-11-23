/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import {
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiFigma,
  SiNextdotjs,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import PortableText from '@sanity/block-content-to-react';
import { IconContext } from 'react-icons';
import { sanityClient } from '../sanity';
import { IconType } from 'react-icons';

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
  body: any[];
  [key: string]: any;
}

interface StackSectionProps {
  about: About[];
}

function StackSection({ about }: StackSectionProps): React.ReactElement {
  const { body } = about[0];
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center mx-auto max-w-[1300px] relative py-10 gap-[50px] lg:grid lg:grid-cols-2"
    >
      <div>
        <h1>About Me</h1>
        <div className="[&_p]:text-[21px] [&_p]:leading-[34px]">
          <PortableText blocks={body} {...sanityClient.config()} />
        </div>
      </div>
      <div className="w-full justify-evenly flex flex-wrap items-center lg:justify-end lg:my-[30px]"></div>
    </section>
  );
}

export default StackSection;
