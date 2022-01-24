import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#fff',
  text: '#000',
  container: '#fff',
  link: '#666',
  modeSwitch: 'hsl(223, 14%, 20%, 1)',
  hover: '#0b6ae6',
};

export const darkTheme = {
  // codepen as reference
  body: 'hsl(225, 10%, 8%, 1)',
  text: '#fff',
  container: 'hsl(223, 14%, 20%, 1)',
  link: '#e6e6e6',
  modeSwitch: '#fff',
  hover: 'orange',
};

export const GlobalStyles = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  } 
body, html {
  font-family: 'Source Sans Pro', sans-serif;
  scroll-behavior: smooth;
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
   transition: all 0.50s ease;
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
  font-size:1rem;
  color: ${({ theme }) => theme.link};
  text-decoration:none;
  cursor:pointer;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${({ theme }) => theme.hover};
  }
}
hr {
  border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
input, textarea, button {font-family: inherit}
ul,li{
list-style:none;
display:inline-block;
&:not(:last-child){
  margin-right: 3rem;
}
}`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: ${({ padding }) => padding && '40px'};
  padding-bottom: ${({ padding }) => padding && '20px'};

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
