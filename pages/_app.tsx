import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'
import '../styles/index.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
