/* eslint-disable import/prefer-default-export */
import { ThemeProvider } from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

import { Nav, Footer } from '../components';
import {
  Container,
  GlobalStyles,
  darkTheme,
  lightTheme,
} from '../styles/theme.config';

export const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Nav theme={theme} toggleTheme={toggleTheme} />
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};
