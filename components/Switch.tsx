"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function Switch(): React.ReactElement {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme || "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };
  return (
    <button
      aria-label="Dark mode toggle"
      className="bg-dark-container mr-5 ml-auto flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded border-none transition-all duration-300 outline-none dark:bg-white"
      onClick={toggleTheme}
      type="button"
    >
      <FiMoon
        className={`text-accent ${theme === "dark" ? "opacity-0" : "opacity-100"} absolute text-[25px] transition-all duration-1000 ease-in-out ${theme === "light" ? "-rotate-[360deg]" : "rotate-[270deg]"}`}
      />
      <FiSun
        className={`text-accent ${theme === "light" ? "opacity-0" : "opacity-100"} absolute text-[25px] transition-all duration-1000 ease-in-out ${theme === "light" ? "rotate-[270deg]" : "-rotate-[270deg]"}`}
      />
    </button>
  );
}

export default Switch;
