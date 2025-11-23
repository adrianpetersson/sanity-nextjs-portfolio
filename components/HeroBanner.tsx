'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import profilepic from '../assets/images/Heroimage.webp';
import { popup, sweepin } from '../utility/animations';

function HeroBanner(): React.ReactElement {
  return (
    <section className="flex flex-col items-center justify-center mx-auto max-w-[1300px] relative p-0 py-20 sm:py-[100px] lg:py-[100px_0_70px_0] z-[11]">
      <div className="w-full relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
        <motion.div
          variants={popup}
          initial="hidden"
          animate="visible"
          className="max-w-[300px] lg:min-w-[350px]"
        >
          <Image
            priority
            src={profilepic}
            alt="Picture of Adrian Petersson"
            className="rounded-[10px]"
          />
        </motion.div>
        <motion.div
          variants={sweepin}
          initial="hidden"
          animate="visible"
          className="absolute top-[70%] lg:relative"
        >
          <h1 className="font-black text-hero-lg m-0">
            Hi, Im Adrian Petersson.
          </h1>
          <hr className="border-4 border-accent rounded-[2px]" />
          <h2 className="font-black text-hero-md">
            Frontend Developer at Fitness24Seven
          </h2>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroBanner;
