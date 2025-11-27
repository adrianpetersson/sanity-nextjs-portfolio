"use client";
import Link from "next/link";
import React, { useState } from "react";

function HamburgerMenu(): React.ReactElement {
  const [showMenuNav, setShowMenuNav] = useState(false);

  return (
    <>
      <button
        aria-label="Toggle menu"
        className="relative z-[999] flex h-6 w-6 cursor-pointer flex-col justify-around border-none bg-transparent p-0 focus:outline-none lg:hidden"
        onClick={() => setShowMenuNav(!showMenuNav)}
        type="button"
      >
        <div
          className={`h-[0.2rem] w-6 origin-[1px] rounded-[10px] bg-black transition-all duration-300 dark:bg-white ${
            showMenuNav ? "rotate-45" : "rotate-0"
          }`}
        />
        <div
          className={`h-[0.2rem] w-6 rounded-[10px] bg-black transition-all duration-300 dark:bg-white ${
            showMenuNav ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`h-[0.2rem] w-6 origin-[1px] rounded-[10px] bg-black transition-all duration-300 dark:bg-white ${
            showMenuNav ? "-rotate-45" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`bg-light-container dark:bg-dark-container absolute top-0 right-0 z-[99] flex h-screen w-[50vw] flex-col items-center text-end text-white transition-transform duration-300 ${
          showMenuNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="mx-[30px] my-[60px] list-none text-left text-2xl">
          <Link
            className="mt-4 inline-block w-full text-black dark:text-white"
            href="/#projects"
          ></Link>
          <Link
            className="mt-4 inline-block w-full text-black dark:text-white"
            href="/#about"
          ></Link>
          <Link
            className="mt-4 inline-block w-full text-black dark:text-white"
            href="/#contact"
          ></Link>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
