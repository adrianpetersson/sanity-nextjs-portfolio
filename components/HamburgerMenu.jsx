'use client';
import React, { useState } from 'react';
import Link from 'next/link';

function HamburgerMenu() {
  const [showMenuNav, setShowMenuNav] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        className="relative flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 z-[999] lg:hidden focus:outline-none"
        onClick={() => setShowMenuNav(!showMenuNav)}
      >
        <div
          className={`w-6 h-[0.2rem] bg-black dark:bg-white rounded-[10px] transition-all duration-300 origin-[1px] ${
            showMenuNav ? 'rotate-45' : 'rotate-0'
          }`}
        />
        <div
          className={`w-6 h-[0.2rem] bg-black dark:bg-white rounded-[10px] transition-all duration-300 ${
            showMenuNav ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`w-6 h-[0.2rem] bg-black dark:bg-white rounded-[10px] transition-all duration-300 origin-[1px] ${
            showMenuNav ? '-rotate-45' : 'rotate-0'
          }`}
        />
      </button>
      <div
        className={`z-[99] flex flex-col items-center text-end h-screen bg-light-container dark:bg-dark-container text-white w-[50vw] absolute top-0 right-0 transition-transform duration-300 ${
          showMenuNav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="list-none text-2xl my-[60px] mx-[30px] text-left">
          <Link
            className="mt-4 text-black dark:text-white inline-block w-full"
            href="/#projects"
          ></Link>
          <Link
            className="mt-4 text-black dark:text-white inline-block w-full"
            href="/#about"
          ></Link>
          <Link
            className="mt-4 text-black dark:text-white inline-block w-full"
            href="/#contact"
          ></Link>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
