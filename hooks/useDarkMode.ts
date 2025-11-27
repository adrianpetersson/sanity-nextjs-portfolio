import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function useDarkMode(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("dark");

  const setMode = (mode: Theme): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", mode);
      setTheme(mode);
    }
  };
  const toggleTheme = () => {
    if (theme === "dark") return setMode("light");
    return setMode("dark");
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme && (localTheme === "light" || localTheme === "dark")) {
      return setTheme(localTheme as Theme);
    }
    return setMode("dark");
  }, [theme]);

  return [theme, toggleTheme];
}

export default useDarkMode;
