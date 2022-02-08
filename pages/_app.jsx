/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { Normalize } from 'styled-normalize';

function App({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <Head>
        <title>Adrian Petersson portfolio</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="Frontend and UX portfolio of Adrian Petersson"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="hsl(225, 10%, 8%, 1)" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
