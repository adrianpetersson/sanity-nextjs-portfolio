/* eslint-disable react/jsx-props-no-spreading */
import { Normalize } from 'styled-normalize';

function App({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <Component {...pageProps} />
    </>
  );
}

export default App;
