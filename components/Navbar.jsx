'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { HamburgerMenu, Switch } from '.';

function Navbar({ toggleTheme, theme }) {
  const [colorChange, setColorChange] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) return setColorChange(true);
    return setColorChange(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <nav
      className={`transition-all duration-300 ease-in-out ${
        colorChange ? 'bg-light-container dark:bg-dark-container' : ''
      } z-[999] fixed w-full h-20 flex items-center justify-center`}
    >
      <div className="z-[1] w-full max-w-[1300px] mx-auto px-[50px] md:px-[30px] flex justify-between items-center h-20">
        <Logo size="60" />
        <Switch theme={theme} toggleTheme={toggleTheme} />
        <HamburgerMenu />
        <div className="hidden lg:flex lg:justify-end lg:items-center">
          <ul>
            <li className="inline-block mr-12 last:mr-0">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="inline-block mr-12 last:mr-0">
              <Link href="/#about">About</Link>
            </li>
            <li className="inline-block mr-12 last:mr-0">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
