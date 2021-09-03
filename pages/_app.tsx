import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import globalStyles from '../styles/globalStyles'
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
