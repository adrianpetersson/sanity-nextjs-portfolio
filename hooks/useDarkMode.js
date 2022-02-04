import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', mode);
      setTheme(mode);
    }
  };
  const toggleTheme = () => {
    if (theme === 'dark') return setMode('light');
    return setMode('dark');
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) return setTheme(localTheme);
    return setMode('dark');
  }, [theme]);

  return [theme, toggleTheme];
}

export default useDarkMode;
