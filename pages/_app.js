import React from 'react';
import Head from 'next/head';
import '../static/css/style.css';
import '../static/css/base.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='../static/images/fav.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <title>AAMP - Becoming-Local</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
