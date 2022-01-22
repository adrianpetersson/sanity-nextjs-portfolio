import Logo from "./Logo"
import {useState, useEffect} from "react"
import {Container} from "../styles/theme.config"
import Link from "next/link"
import {HamburgerMenu, Switch} from "../components"
import styled from "styled-components"

const Navbar = ({toggleTheme,theme}) => {
    const [colorChange, setColorChange] = useState(false);

    const handleScroll = () => {
      if(window.scrollY >= 80) return setColorChange(true)
     return setColorChange(false)
   };
   useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

    return (
        <Nav visible={colorChange}>
        <NavContainer>
        <Logo size="60" />
        <HamburgerMenu theme={theme} toggleTheme={toggleTheme} />
        <NavMenu>
        <NavList>
        <ListItem>
        <Link href="/#projects"> 
        <a>Projects</a> 
        </Link>
        </ListItem>
        <ListItem>
        <Link href="/#about"> 
        <a>About</a> 
        </Link>
        </ListItem>
        <ListItem>
        <Link href="/#about"> 
        <a>Contact</a> 
        </Link>
        </ListItem>
      
        <hr />
        
     </NavList>
     <Switch theme={theme} toggleTheme={toggleTheme} />
     </NavMenu>
        </NavContainer> 
        </Nav>
  
    )
}

const Nav = styled.nav`
transition: ease-in-out .3s;
background: ${({ theme, visible }) => visible ? theme.container : ""}; 
z-index:999;
position:fixed;
width:100%;
height: 80px;
display:flex;
align-items:center;
justify-content:center;
`
const NavContainer = styled(Container)`
display:flex;
justify-content: space-between;
align-items:center;
height: 80px;

${Container}
`
const NavMenu = styled.div`
display:none;
@media (min-width: 960px) {
justify-content:flex-end;
display:flex;
align-items:center;
`
const NavList = styled.ul`
list-style-type: none;
margin-right: 1rem;    
}
hr {
  height: .25rem;
  width:100px;
  margin-top: 0.5rem;
  background: #4781ff;
  border: none;
  transition: .3s ease-in-out;
}
a {
  display: inline-block;
  width:100px;
  text-decoration: none;
  color: ${props => props.text};

  &:hover {
 color: #6454ee;
}
}

`
const ListItem = styled.li`
display:inline;
cursor: pointer;
font-weight:700;
text-align:center;
&:hover:nth-child(2) ~ hr {
  margin-left: 100px;
} 
&:hover:nth-child(3) ~ hr {
  margin-left: 200px;
} 
&:not(:last-of-type) {
    }
    `

export default Navbar

