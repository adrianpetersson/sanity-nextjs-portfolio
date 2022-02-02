/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { Normalize } from 'styled-normalize';

function App({ Component, pageProps }) {
  return (
    <>
      <Normalize />
      <Head>
        <title>Adrian Petersson portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
