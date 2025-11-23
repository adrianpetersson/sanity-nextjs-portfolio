'use client';

import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function Switch(): React.ReactElement {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setTheme(theme || 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };
  return (
    <button
      type="button"
      aria-label="Dark mode toggle"
      onClick={toggleTheme}
      className="bg-dark-container dark:bg-white ml-auto mr-5 flex items-center w-[35px] h-[35px] justify-center border-none outline-none rounded cursor-pointer transition-all duration-300"
    >
      <FiMoon
        className={`text-accent ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} text-[25px] absolute transition-all duration-1000 ease-in-out ${theme === 'light' ? '-rotate-[360deg]' : 'rotate-[270deg]'}`}
      />
      <FiSun
        className={`text-accent ${theme === 'light' ? 'opacity-0' : 'opacity-100'} text-[25px] absolute transition-all duration-1000 ease-in-out ${theme === 'light' ? 'rotate-[270deg]' : '-rotate-[270deg]'}`}
      />
    </button>
  );
}

export default Switch;
