"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import profilepic from "../assets/images/Heroimage.webp";
import { popup, sweepin } from "../utility/animations";

function HeroBanner(): React.ReactElement {
  return (
    <section className="relative z-10 mx-auto flex flex-col items-center justify-center p-0">
      <div className="relative w-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
        <motion.div
          animate="visible"
          className="max-w-[300px] lg:min-w-[350px]"
          initial="hidden"
          variants={popup}
        >
          <Image
            alt="Picture of Adrian Petersson"
            className="rounded-[10px]"
            priority
            src={profilepic}
          />
        </motion.div>
        <motion.div
          animate="visible"
          className="absolute top-[70%] lg:relative"
          initial="hidden"
          variants={sweepin}
        >
          <h1 className="mb-2 text-4xl font-black md:mb-10 md:text-7xl xl:leading-21">
            Hi, Im Adrian Petersson.
          </h1>

          <h2 className="text-base leading-4 font-black whitespace-nowrap md:text-3xl">
            Frontend Developer at Fitness24Seven
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBanner;
