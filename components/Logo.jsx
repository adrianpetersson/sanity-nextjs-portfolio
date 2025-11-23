import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoSvg from '../assets/images/logo.svg';

function Logo({ size }) {
  return (
    <Link href="/">
      <Image src={LogoSvg} height={size} width={size} alt="Logo" />
    </Link>
  );
}
export default Logo;
