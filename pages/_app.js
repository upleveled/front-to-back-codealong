import '../styles/styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Soundify</title>
        <meta name="front to back app" content="UpLeveled.io Lecture Example" />
        <link rel="icon" href="/play.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
