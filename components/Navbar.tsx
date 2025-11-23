'use client';

import Logo from './Logo';
import Switch from './Switch';
import HamburgerMenu from './HamburgerMenu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

export const Navbar = () => {
  return (
    <nav
      className="transition-all duration-300 ease-in-out 
     
       z-[999] fixed w-full h-20 flex items-center justify-center"
    >
      <div className="z-[1] w-full max-w-[1300px] mx-auto px-[50px] md:px-[30px] flex justify-between items-center h-20">
        <Logo size={60} />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#projects"
                className={navigationMenuTriggerStyle()}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/#about"
                className={navigationMenuTriggerStyle()}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Switch />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
