import { ThemeProvider } from "styled-components";
import {Nav, Footer} from "../components";
import { Container } from "../styles/theme.config";
import {useState} from "react";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config";
import {useEffect} from "react"

export const Layout = ({children}) =>  {
const [theme, setTheme] = useState("light") 

useEffect(() => {
 let session = sessionStorage.getItem('darkmode')
  if (session === "dark") return setTheme("dark")
  return setTheme("light")
},[]);

const toggleTheme = () => {
  if (theme === "light") {
    setTheme("dark")
    sessionStorage.setItem('darkmode', 'dark');
  } else {
  setTheme('light')
  sessionStorage.setItem('darkmode', 'light');}
}
  return (
    <>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
    <Nav theme={theme} toggleTheme={toggleTheme}/>
    <Container>
     <main>{children}</main>
    </Container>
    <Footer/>
    </ThemeProvider>
    </>
  )
}
