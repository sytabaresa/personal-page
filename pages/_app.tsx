import { appWithTranslation } from 'next-i18next';
import Head from 'next/head'
import '../styles/index.css';
import '../styles/anim.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    // vh variable for many screen properties
    let update = () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', update);
    update()

  }, [])
  
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
