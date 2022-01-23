import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSvg from '../assets/images/logo.svg';

const Logo = ({ size }) => {
  return (
    <Link href="/" passHref>
      <a>
        <Image src={LogoSvg} height={size} width={size} alt="Logo" />
      </a>
    </Link>
  );
};
export default Logo;
