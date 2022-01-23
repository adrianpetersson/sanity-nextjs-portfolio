import React, {useState}  from 'react'
import styled from "styled-components"
import { Switch } from './index'
import Link from 'next/link';



const HamburgerMenu = () => {
  const [showMenuNav, setShowMenuNav] = useState(false)

    return (
      <>
      <MenuIcon nav={showMenuNav} onClick={() => setShowMenuNav(!showMenuNav)}>
      <div />
      <div />
      <div />
    </MenuIcon>
      <MobileNav nav={showMenuNav}>
      <ul>
      <Link href="/#projects">
        <li>
        <a onClick={() => setShowMenuNav(false)}>Projects</a> 
        </li>
        </Link>
        <Link href="/#about">
        <li>
        <a onClick={() => setShowMenuNav(false)}>About</a> 
        </li>
        </Link>
        <Link href="/#contact">
        <li>
        <a onClick={() => setShowMenuNav(false)}>Contact</a> 
        </li>
        </Link>
      </ul>
      </MobileNav>
      </>
    )
}


const MenuIcon = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 999;

  @media (min-width: 960px) {
    display:none;
  }
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
        transform: ${({nav}) => nav ? "rotate(45deg)" : "rotate(0)" }
    }
    :nth-child(2) {
    opacity: ${({nav}) => nav ? "0" : "1"};
    }
    :nth-child(3) {
        transform: ${({nav}) => nav ? "rotate(-45deg)" : "rotate(0)" }
    }
  }
`;


const MobileNav = styled.div`
z-index: 99;
display:flex;
flex-direction:column;
align-items:center;
text-align: end;
height: 100vh;
background: ${({ theme }) => theme.container};
color:white;
width:200px;
position:absolute;
top: 0;
right:0;
transition: transform 300ms;
transform: ${ ({nav}) => (nav ? "translateX(0)" : "translateX(100%)") };
ul{
list-style-type:none;
font-size: 1.5rem;
margin: 60px 30px;
text-align: left;
}

li{
margin-top: 1rem;
color: ${({ theme }) => theme.text};
display:inline-block;
width:100%;
}

`

export default HamburgerMenu
