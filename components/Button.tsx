import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}

function Button({ link, children }: ButtonProps) {
  return (
    <Link
      href={link}
      className="flex items-center justify-center text-[0.9rem] text-center h-10 px-5 bg-primary rounded-md text-white transition-all duration-400 hover:bg-primary-hover hover:-translate-y-[8%] lg:ml-0"
    >
      {children}
    </Link>
  );
}

export default Button;
