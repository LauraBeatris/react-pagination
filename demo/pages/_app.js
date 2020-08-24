import Head from 'next/head';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>React Pagination</title>
        <meta name="description" content="Headless react hook for pagination" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
