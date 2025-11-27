import Link from "next/link";
import React from "react";

import LogoSvg from "../assets/images/logo.svg";

interface LogoProps {
  size: number;
}

function Logo({ size }: LogoProps): React.ReactElement {
  return (
    <Link href="/">
      <LogoSvg height={size} width={size} />
    </Link>
  );
}
export default Logo;
