import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import { Container } from '../styles/GlobalComponents';
import { HamburgerMenu, Switch } from '.';
import breakpoint from '../utility/breakpoints';

function Navbar({ toggleTheme, theme }) {
  const [colorChange, setColorChange] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) return setColorChange(true);
    return setColorChange(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Nav visible={colorChange}>
      <NavContainer>
        <Logo size="60" />
        <Switch theme={theme} toggleTheme={toggleTheme} />
        <HamburgerMenu />
        <NavMenu>
          <ul>
            <NavLinks>
              <Link href="/#projects">
                <a>Projects</a>
              </Link>
            </NavLinks>
            <NavLinks>
              <Link href="/#about">
                <a>About</a>
              </Link>
            </NavLinks>
            <NavLinks>
              <Link href="/#about">
                <a>Contact</a>
              </Link>
            </NavLinks>
          </ul>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  transition: ease-in-out 0.3s;
  background: ${({ theme, visible }) => (visible ? theme.container : '')};
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  ${Container}
`;
const NavLinks = styled.li`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;
const NavMenu = styled.div`
display:none;
@media only screen and ${breakpoint.device.lg} {
justify-content:flex-end;
display:flex;
align-items:center;
`;

export default Navbar;
