import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import AppProvider from '../utils/ContextProviderTemplate';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Head>
        <title>Title</title>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
