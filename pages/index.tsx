
import { ButtonHTMLAttributes, useEffect } from 'react';
import Layout from '../components/Layout'
import { Arrow, Logo, Cross, NextArrow, Triangle } from '../components/svg'
import * as basicScroll from 'basicscroll'
import { getAllPosts } from '../lib/api';
import PostCarousel from '../components/postCarrousel';
import Post from '../types/post';
import { animateScroll as scroll, Element, Events } from "react-scroll"


const CardButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) =>
  <button className="btn-outline-primary 
  !uppercase !w-24 !h-24 md:!w-28 md:!h-28 
  xl:!w-36 xl:!h-36 xl:text-xl" {...props}></button>

interface IndexPageProps {
  allPosts: Post[]
}

const IndexPage = (props: IndexPageProps) => {

  const { allPosts } = props

  useEffect(() => {
    const anims: any[] = []
    const anchor = document.querySelector('.anchor')
    // console.log(anchor)
    // Create an animation for each border and letter
    document.querySelectorAll('.anim-element').forEach((elem) => {

      // Get the end values from the data attributes
      const tx = (elem.getAttribute('data-tx') || '0') + 'px'
      const ty = (elem.getAttribute('data-ty') || '0') + 'px'
      const r = (elem.getAttribute('data-r') || '0') + 'deg'

      // Crate an instance for the current element and store the instance in an array.
      // We start the animation later using the instances from the array.
      anims.push(basicScroll.create({
        elem: anchor,
        // inside: (instance, percentage, props) => console.log("inside", instance, percentage, props),
        // outside: (instance, percentage, props) => console.log("outside", instance, percentage, props),
        from: 'top-bottom',
        to: 'top-top',
        direct: elem,
        props: {
          '--tx': {
            from: '0',
            to: tx
          },
          '--ty': {
            from: '0',
            to: ty
          },
          '--r': {
            from: '0',
            to: r
          }
        }
      }))

    })


    anims.forEach(e => e.start())

    // Events.scrollEvent.register("begin", function () {
    //   console.log("begin", arguments);
    // });

    // Events.scrollEvent.register("end", function () {
    //   console.log("end", arguments);
    // });

    return () => {
      anims.forEach(e => e.destroy())
      // Events.scrollEvent.remove("begin");
      // Events.scrollEvent.remove("end");
    }
  }, [])



  return (
    <Layout title="SYTA.CO">
      <div
        id="scroll-container"
        className="text-primary relative overflow-hidden w-full "
      >
        <div className="anchor" />

        <div id="page-1" className="h-screen">

          {/* cross 1 */}
          <div className="absolute hidden md:grid top-0 left-0 mt-4 ml-4 grid-cols-2 gap-8" data-rellax-speed="8">
            <Cross className="hidden lg:block" />
            <Cross className="hidden lg:block" />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* cross 2 */}
          <div className="absolute hidden md:grid left-0 ml-4 grid-cols-2 gap-8 top-[75vh] anim-element" data-ty="400">
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* cross 3 */}
          <div className="absolute hidden md:grid left-0 ml-32 grid-cols-2 gap-8
         origin-center transform rotate-180 top-[85vh]">
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* cross 4 */}
          <div className="absolute hidden md:grid right-0 mt-4 mr-4 grid-cols-2 gap-8 top-[80vh] anim-element" data-ty="-400">
            <Cross className="opacity-0" />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
          </div>


          {/* Next arrow */}
          <div className="absolute left-0 ml-4 lg:ml-0 lg:left-1/2 top-[85vh] cursor-pointer" onClick={() => {
            scroll.scrollTo(2000, {
              // duration: 1500,
              delay: 100,
              smooth: 'easeInOutQuint',
              // containerId: 'page-2-container',
            })
            console.log('goto')
          }}>
            <NextArrow className="relative w-12 h-12 md:w-24 md:h-24 fill-primary lg:-left-1/2 motion-safe:animate-bounce5s" />
          </div>

          {/* Triangles 1 */}

          <div className="-z-10 absolute transform-gpu scale-50 md:scale-100 p-4 top-[75vh] md:top-0 right-[25%] md:right-[50%]">
            <div className="anim-element" data-ty="-400">
              <Triangle className="absolute w-52 h-52 origin-center rotate-180 stroke-primary stroke-[8px]" />
            </div>
            <div className="anim-element" data-ty="400">
              <Triangle className="absolute w-52 h-52 origin-center transform ml-16 mt-28 stroke-primary stroke-[8px]" />
            </div>
          </div>

          {/* Triangles 2 */}
          <div className="-z-10 absolute transform-gpu scale-50 md:scale-100 p-4 top-[60vh] md:top-[70vh] left-[10%] md:left-[20%]">
            <div className="anim-element" data-tx="400">
              <Triangle className="absolute w-52 h-52 origin-center -rotate-90 stroke-primary stroke-[12px]" />
            </div>
            <div className="anim-element" data-tx="-400">
              <Triangle className="absolute w-20 h-20 origin-center rotate-90 transform ml-24 mt-32 stroke-primary stroke-[30px]" />
            </div>
            <div className="anim-element" data-tx="-200">
              <Triangle className="absolute w-20 h-20 origin-center rotate-90 transform -ml-24 mt-4 stroke-primary stroke-[30px]" />
            </div>
          </div>

          {/* 2021 */}
          <div className="absolute md:block top-0 right-0 flex flex-col items-end mt-0 ml-0 lg:mt-4 lg:ml-4 anim-element" data-tx="500">
            <div className="w-28 h-6 md:w-64 md:h-10"
              style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
            >
            </div>
            <div className="flex items-center mt-2">
              <div className="w-8 md:w-24 h-1 bg-primary overf"></div>
              <h4 className="font-mono text-2xl md:text-4xl ml-4">{new Date().getFullYear()}</h4>
            </div>
          </div>

          {/* syta.co */}
          <div className="web-page font-mono text-3xl md:text-5xl md:mt-10 mb-4 md:my-6 ml-4 md:ml-32 lg:ml-64 md:absolute left-0 anim-element" data-ty="500"
          // css={{ ...parallax(-3), top: '300px' }}
          >
            <h2>syta.co</h2>
          </div>

          {/* UNDER CONSTRUCTION */}
          <div
            className="inline-block font-bold md:absolute mt-2 md:mt-0 left-0 top-[2vh] bg xl:mt-0 anim-element md:top-[18vh] lg:top-[30vh]" data-tx="-500">
            <Arrow className="w-8 h-8 xl:w-12 xl:h-12 mr-2 xl:mr-4 absolute right-16 -mt-20 rotate-90 fill-primary" />
            <div className="inline-block justify-start xl:justify-end pl-6 xl:pl-20 pr-2 md:pr-8 py-2 md:py-6 bg-base-100 relative"
              style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
            >
              <div className="flex items-start justify-start p-2 bg-base-100">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tighter text-yellow-400">CAUTION</h1>
              </div>
            </div>
            <div
              className="text-3xl md:text-5xl xl:text-7xl flex mt-4 ml-4 xl:ml-24"
              style={{
                lineHeight: .8,
                // perspective: '1px',
                // perspectiveOrigin: '0 0',
              }}
            >
              <div className="-z-10 flex">
                <Arrow className="w-8 h-8 xl:w-12 xl:h-12 mr-2 xl:mr-4 fill-primary" />
                <div className="under-construction">
                  <h1 className="">UNDER</h1>
                  <h1 className="">CONSTRUCTION</h1>
                </div>
              </div>
            </div>
          </div>

          {/* info cards */}
          <div className="md:absolute flex flex-col items-center md:items-end right-0 mt-4 md:mt-0 md:mr-16 
        lg:mr-24 xl:mr-40 md:anim-element md:top-[45vh] lg:top-[30vh]"
            data-ty="500"
          >
            <h2 className="text-6xl md:text-7xl xl:text-8xl font-sans
             font-semibold text-right tracking-tighter mr-4 sm:mr-16 md:mr-0 anim-element" data-tx="400">
              Sebastian<br />Tabares.
            </h2>
            <div className="inline-block mt-8">
              <div>
                <a href="https://github.com/sytabaresa">
                  <CardButton>github</CardButton>
                </a>
                <a href="https://www.linkedin.com/in/sytabaresa/">
                  <CardButton>linkedin</CardButton>
                </a>
              </div>
              <div>
                <a href="https://twitter.com/sytabares">
                  <CardButton>twitter</CardButton>
                </a>
                <a href="mailto:sytabaresa@gmail.com">
                  <CardButton>email</CardButton>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SECOND PAGE */}

        <div className="flex flex-col items-center md:items-start">
          <PostCarousel posts={allPosts} className="md:mt-10 w-full md:w-4/5 mx-auto" />

          {/* left block */}
          <div className="bg-primary transform rotate-45 absolute
          w-[100rem] h-[100rem]
          left-[-110rem] md:left-[-70rem] xl:left-[-60rem]
          top-[100vh] md:top-auto 
          md:bottom-[-40rem] 
          ">
          </div>

          {/* right block */}
          <div className="bg-primary -rotate-45 absolute
          w-[200rem] h-[200rem]
          left-[3rem] md:left-[20rem] xl:left-[30rem]
          top-[110vh] md:top-auto
          md:bottom-[-170rem]">
          </div>

          {/* Main Form */}
          <div className="mb-16 px-4 w-screen md:w-96 md:ml-16 mt-[30rem] lg:mt-0 relative">
            <div className="inline-block mb-4">
              <h1 className="uppercase text-base-100 text-5xl font-bold text-right shadow-primary shadow-outline">Let&apos;s work <br />together</h1>
            </div>
            <form className="form-control uppercase">
              <label className="label">
                <span className="text-base-100">Name</span>
              </label>
              <input type="text" placeholder="" className="input-primary" />
              <label className="label">
                <span className="text-base-100">Email</span>
              </label>
              <input type="email" placeholder="" className="input-primary mb-10" />
              {/* <label className="label">
                  <span className="text-base-100">Tell me a little what you need</span>
                </label> */}
              <div className="relative">
                <textarea
                  placeholder="Tell me a little what you need<"
                  className="relative w-full textarea-primary h-40"
                  rows={6}
                />
                <button type="submit" className="btn uppercase absolute bottom-0 right-0 w-32">Send (WIP)</button>
              </div>
            </form>
          </div>
          <Element name="page-2">
            <div className="relative md:absolute bottom-0
            md:left-[30rem] lg:left-auto lg:right-0 
            my-16 lg:mr-8 xl:mr-16 ">
              <Logo className="fill-base-100 w-48 md:w-48 lg:w-40 2xl:w-80" />
            </div>
          </Element>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}