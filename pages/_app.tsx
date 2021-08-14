import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import globalStyles from '../styles/globalStyles'

function App({ Component, pageProps }) {
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
