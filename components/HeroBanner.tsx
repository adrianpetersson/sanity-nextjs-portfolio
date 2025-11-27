"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import profilepic from "../assets/images/Heroimage.webp";
import { popup, sweepin } from "../utility/animations";

function HeroBanner(): React.ReactElement {
  return (
    <section className="relative z-[11] mx-auto flex max-w-[1300px] flex-col items-center justify-center p-0 py-20 sm:py-[100px] lg:py-[100px_0_70px_0]">
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
          <h1 className="text-hero-lg m-0 font-black">
            Hi, Im Adrian Petersson.
          </h1>

          <h2 className="text-hero-md font-black">
            Frontend Developer at Fitness24Seven
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBanner;
