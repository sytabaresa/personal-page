
import { useEffect } from 'react';
import Layout from '../components/Layout'
import Rellax from 'rellax'
import Arrow from '../components/svg/arrow'
import tw from 'twin.macro'

const sty = {
  "&:hover": {
    "background-color": "blue",
    ...tw`text-red-700`
  }
}

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
        // style={{ top: '40%' }}
        css={sty}
      >
        Sebastian<br />Tabares
      </h2>

      <div className="text-7xl font-bold text-primary absolute left-0 top-0 bg"
      >
        <div className="flex items-center justify-end pl-20 pr-8 py-6"
          style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
        >
          <div className="flex items-start justify-start p-2 bg-base-100">
            <h1 className="inline-block text-9xl font-bold leading-none text-yellow-400">CAUTION</h1>
          </div>
        </div>
        <div className="flex mt-8" style={{ lineHeight: .8 }}>
          <Arrow />
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
