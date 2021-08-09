import Link from 'next/link'
import { useEffect } from 'react';
import Layout from '../components/Layout'
import Rellax from 'rellax'

const IndexPage = () => {
  useEffect(() => {
    const rellax = new Rellax('.rellax');

    return () => {
    }
  }, [])

  return (
    <Layout title="syta.co">
      <h2 className="text-8xl font-semibold font-sans text-right
       text-primary absolute top-0 right-0 mr-32 tracking-tighter"
        style={{ top: '40%' }}
      >
        Sebastian<br />Tabares
      </h2>

      <div className="text-7xl font-bold text-primary absolute left-0 top-0" style={{ lineHeight: 0.75, top: '40%' }}>
        <div className="flex items-center justify-end pl-36 pr-8 py-6"
          style={{ width: 828.03, height: 191.54, backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
        >
          <div className="flex items-start justify-start p-4 bg-black" style={{ width: 650, height: 141, }}>
            <p className="text-9xl font-bold leading-10 text-yellow-400">CAUTION</p>
          </div>
        </div>
        <div className="flex">
          <svg viewBox="0 0 58 58" className="fill-current w-12 h-12 mr-4">
            <path d="M8.53553 1.90441C6.58291 -0.0482135 3.41709 -0.0482144 1.46447 
          1.90441C-0.488155 3.85703 -0.488156 7.02285 1.46447 8.97547L8.53553 
          1.90441ZM52.0885 57.5284C54.8499 57.5284 57.0885 55.2899 57.0885 
          52.5284L57.0885 7.52845C57.0885 4.76702 54.8499 2.52845 52.0885 
          2.52845C49.3271 2.52845 47.0885 4.76702 47.0885 7.52845L47.0885 
          47.5284L7.08849 47.5284C4.32707 47.5284 2.08849 49.767 2.08849 
          52.5284C2.08849 55.2899 4.32706 57.5284 7.08849 57.5284L52.0885 
          57.5284ZM1.46447 8.97547L48.553 56.064L55.624 48.9929L8.53553 1.90441L1.46447 8.97547Z" />
          </svg>
          <div>
            <h1 className="">UNDER</h1>
            <h1 className="">CONSTRUCTION</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
