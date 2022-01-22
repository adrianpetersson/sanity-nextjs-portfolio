import styled, { createGlobalStyle } from "styled-components";


export const lightTheme = {
 body: "#fff",
 text:"#000",
 container:"#fff",
 link:  "blue",
 modeSwitch: "hsl(223, 14%, 20%, 1)"
};

export const darkTheme = {
  //codepen as reference
  body: "hsl(225, 10%, 8%, 1)",
  text:"#fff",
  container:"hsl(223, 14%, 20%, 1)",
  link: "orange",
  modeSwitch: "#fff"
 };


export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
   font-family: 'Source Sans Pro', sans-serif;
}
body, html {
  scroll-behavior: smooth;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   transition: all 0.50s linear;
   overflow-x:hidden;
}
h1,h2,h3,h4,h5,h6{
  font-family: 'Heebo', sans-serif;
  color: ${({ theme }) => theme.text};
}
p {
font-size:21px;
line-height:34px;
}
a {
  color: ${({ theme }) => theme.link};
}
input, textarea, button {font-family: inherit}`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: ${({padding}) => padding && "40px"};
  padding-bottom: ${({padding}) => padding && "20px"};

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
