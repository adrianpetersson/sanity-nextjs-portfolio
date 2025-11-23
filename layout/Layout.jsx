'use client';

import { useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Nav, Footer } from '../components';

export function Layout({ children }) {
  const [theme, toggleTheme] = useDarkMode();

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <div className="z-[1] w-full max-w-[1300px] mx-auto px-[50px] md:px-[30px]">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
