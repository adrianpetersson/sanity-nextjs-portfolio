import React from 'react';

function Footer() {
  return (
    <footer className="relative bg-light-container dark:bg-dark-container text-black dark:text-white text-center h-[20vh] flex items-center justify-center w-full">
      <p className="text-base leading-[25px] max-w-[50%]">
        Designed and developed by Adrian Petersson {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
