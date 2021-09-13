
import { useEffect } from 'react';
import Layout from '../components/Layout'
import Rellax from 'rellax'
import { Arrow, Cross, Triangle } from '../components/svg'
// import { Input, Textarea, Label, Button } from '../components/inputs'

import tw, { styled } from 'twin.macro'
import React from 'react';

const CardButton = (props: any) => <button className="btn btn-outline btn-primary m-2 w-24 h-24 md:w-28 md:h-28 xl:w-36 xl:h-36 xl:text-xl" {...props}></button>
const IndexPage = () => {
  useEffect(() => {
    const rellax = new Rellax('.rellax', {
      // horizontal: true
    });

    return () => {
    }
  }, [])



  return (
    <Layout title="SYTA.CO">
      <div className="text-primary relative overflow-hidden w-full" css={{ height: '250vh' }}>

        {/* cross1 */}
        <div className="absolute hidden md:grid top-0 left-0 mt-4 ml-4 grid-cols-2 gap-4">
          <Cross className="hidden lg:block" />
          <Cross className="hidden lg:block" />
          <Cross />
          <Cross />
          <Cross />
          <Cross />
          <Cross />
        </div>

        {/* cross2 */}
        <div className="rellax absolute hidden md:grid top-0 left-0 ml-4 grid-cols-2 gap-4"
          css={{ top: '70vh' }}>
          <Cross />
          <Cross />
          <Cross />
        </div>

        {/* cross3 */}
        <div className="absolute hidden md:grid top-0 left-0 ml-32 grid-cols-2 gap-4
         origin-center transform rotate-180" css={{ top: '78vh' }}>
          <Cross />
          <Cross />
          <Cross />
        </div>

        <div className="absolute p-4" css={{ top: '10vh', right: '45%' }}>
          <Triangle className="rellax absolute w-32 h-32 origin-center transform -rotate-90 ml-12" />
          <Triangle className="rellax absolute w-32 h-32 origin-center mt-20" data-rellax-speed="-10" />
        </div>
        {/* 2021 */}
        <div className="absolute top-0 right-0 flex flex-col items-end mt-4 mr-4">
          <div className="w-28 h-6 md:w-40 md:h-10"
            style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
          >
          </div>
          <div className="flex items-center mt-2">
            <div className="w-8 md:w-12 h-1 bg-primary overf"></div>
            <h4 className="font-mono text-2xl md:text-4xl ml-4">{new Date().getFullYear()}</h4>
          </div>
        </div>

        {/* syta.co */}
        <div className="rellax font-mono text-3xl md:text-5xl mt-10 mb-4 md:my-6 ml-4 md:ml-32 lg:ml-40" data-rellax-speed="-8">
          <h2>syta.co</h2>
        </div>

        {/* UNDER CONSTRUCTION */}
        <div
          className="inline-block font-bold md:absolute left-0 top-0 bg xl:mt-0"
          // data-rellax-speed="-3"
          css={{
            '@md': {
              'top': '18vh'
            },
            '@lg': {
              'top': '30vh'
            },
          }}
        >
          <div className="rellax inline-block justify-start xl:justify-end pl-6 xl:pl-20 pr-2 md:pr-8 py-2 md:py-6"
            style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
          >
            <div className="flex items-start justify-start p-2 bg-base-100">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter text-yellow-400">CAUTION</h1>
            </div>
          </div>
          <div
            className="rellax text-3xl md:text-5xl xl:text-7xl flex mt-8 ml-5 xl:ml-24"
            data-rellax-speed="3"
            data-rellax-zindex="-1"
            style={{ lineHeight: .8 }}
          >
            <div className="w-8 h-8 xl:w-12 xl:h-12 mr-2 xl:mr-4">
              <Arrow />
            </div>
            <div>
              <h1 className="">UNDER</h1>
              <h1 className="">CONSTRUCTION</h1>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="md:absolute flex flex-col items-center md:items-end right-0 mt-8 md:mt-0 md:mr-16 lg:mr-24 xl:mr-32"
          css={{
            '@md': {
              'top': '45vh'
            },
            '@lg': {
              'top': '30vh'
            },
          }}
        >
          <h2 className="text-6xl md:text-7xl xl:text-8xl font-sans text-right tracking-tighter mr-4 sm:mr-16 md:mr-0">
            Sebastian<br />Tabares.
          </h2>
          <div className="inline-block mt-8">
            <div>
              <CardButton>github</CardButton>
              <CardButton>linkedin</CardButton>
            </div>
            <div>
              <CardButton>twitter</CardButton>
              <CardButton>email</CardButton>
            </div>
          </div>
        </div>

        {/* left block */}
        <div className="absolute left-0 bottom-0" css={{
          width: '50vw',
          // bottom: '00rem',
        }}>
          <div className="bg-primary transform rotate-45 absolute" css={{
            width: '100rem',
            height: '100rem',
            right: '20rem',
            bottom: '-40rem',
            '@sm': {
              right: '15rem',
            },
            '@md': {
              right: '15rem',
            },
            '@lg': {
              right: '21rem',

            }
          }}></div>
          <div className="mb-16 ml-16 w-96 relative z-10">
            <div className="inline-block mb-4">
              <h1 className="uppercase text-base-100 text-5xl font-bold text-right">Let's work <br />together</h1>
            </div>
            <form className="form-control uppercase">
              <label className="label">
                <span className="text-base-100">Name</span>
              </label>
              <input type="text" placeholder="" className="input input-line input-back input-transparent" />
              <label className="label">
                <span className="text-base-100">Email</span>
              </label>
              <input type="email" placeholder="" className="input input-line input-back input-transparent" />
              <label className="label">
                <span className="text-base-100">Tell me a little what you need</span>
              </label>
              <textarea placeholder="" className="textarea textarea-bordered textarea-back textarea-transparent h-40" rows={5} css={{
                '&::before': {
                  position: 'absolute',
                  left: '-1px',
                  top: '-1px',
                  content: '',
                  borderTop: '70px solid silver',
                  borderRight: '70px solid transparent',
                },
                '&::after': {
                  position: 'absolute',
                  left: '-2px',
                  top: '-2px',
                  content: '',
                  borderTop: '70px solid silver',
                  borderRight: '70px solid transparent',
                }
              }} />
              <button type="submit" className="btn absolute bottom-0 right-0 w-32">Submit</button>
            </form>
          </div>
        </div>

        {/* right block */}
        <div className="absolute right-0 bottom-0" css={{
          width: '50vw',
          // bottom: '00rem',
        }}>
          <div className="bg-primary transform -rotate-45 absolute" css={{
            width: '100rem',
            height: '100rem',
            left: '12rem',
            bottom: '-53rem',
            '@sm': {
              left: '18rem',
            },
            '@md': {
            },
            '@lg': {
              left: '20rem',
            }
          }}></div>
        </div>
      </div>
    </Layout >
  )
}

export default IndexPage
