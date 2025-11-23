import { FiSun, FiMoon } from 'react-icons/fi';

function Switch({ theme, toggleTheme }) {
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
