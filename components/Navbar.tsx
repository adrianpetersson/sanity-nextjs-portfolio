"use client";

import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import Switch from "./Switch";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export const Navbar = () => {
  return (
    <nav className="fixed z-[999] flex h-20 w-full items-center justify-center transition-all duration-300 ease-in-out">
      <div className="z-[1] mx-auto flex h-20 w-full max-w-[1300px] items-center justify-between px-[50px] md:px-[30px]">
        <Logo size={60} />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/#projects"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/#about"
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
