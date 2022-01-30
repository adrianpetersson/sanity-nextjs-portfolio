/* eslint-disable import/prefer-default-export */
import { ThemeProvider } from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

import { Nav, Footer } from '../components';
import { GlobalStyles, darkTheme, lightTheme } from '../styles/theme.config';
import { Container } from '../styles/GlobalComponents';

export function Layout({ children }) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
