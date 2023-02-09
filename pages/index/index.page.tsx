
import React, { ButtonHTMLAttributes, useEffect } from 'react';
import Layout from '@components/Layout'
import { Arrow, Logo, Cross, NextArrow, Triangle } from '@components/svg'
import * as basicScroll from 'basicscroll'
import PostCarousel from '@components/postCarrousel';
import Post from 'types/post';
import { scroller, Element } from "react-scroll"
import { usePageContext } from 'renderer/usePageContext';
import '../../styles/anim.css'
import { ContactForm } from '@components/contactForm';

const CardButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) =>
  <button className="btn-outline-primary !border-2
  !uppercase !w-24 !h-24 md:!w-28 md:!h-28 
  2xl:!w-36 2xl:!h-36 2xl:text-xl" {...props}></button>

interface IndexPageProps {
  allPosts: Post[]
}

export { Page }

function Page(props: IndexPageProps) {
  const pageContext = usePageContext()
  // console.log('a', props, pageContext)
  const allPosts = pageContext.posts
  // console.log(allPosts)

  // const { allPosts } = props

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
        // from: 'top-bottom',
        from: '0',
        to: '1000%',
        // to: 'top-top',
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
        className="text-primary relative overflow-hidden w-full"
      >
        {/* <div className="anchor absolute top-[80vh] lg:top-[100vh]" /> */}
        <div id="back-light" className="absolute right-0 w-[5000px] mt-40 md:mt-0 h-[120vh] -z-50">
          <div className="absolute right-0 bottom-0 w-[800px] md:w-[1000px] lg:w-[1500px] xl:w-[2000px] h-full">
            <img src='/img/b1.png' className="absolute top-0 right-0 w-full anim-element" data-ty="200" />
            <img src='/img/b2.png' className="absolute top-0 right-0 w-full" />
            <img src='/img/b3.png' className="!absolute top-0 right-0 w-full animate-G motion-reduce:animation-none" />
            <img src='/img/b4.png' className="!absolute top-0 right-0 w-full animate-I motion-reduce:animation-none" />
          </div>
        </div>


        <div id="page-1" className="min-h-screen flex flex-col">

          {/* cross 1 */}
          <div id="cross-1" className="absolute hidden md:grid top-0 left-0 mt-4 ml-4 grid-cols-2 gap-8">
            <Cross className="hidden lg:block" />
            <Cross className="hidden lg:block" />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* cross 2 */}
          <div id="cross-2" className="absolute hidden md:grid left-0 ml-4 grid-cols-2 gap-8 top-[75vh] anim-element -z-10" data-ty="400">
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* cross 3 */}
          <div id="cross-3" className="absolute hidden md:grid left-0 ml-32 grid-cols-2 gap-8
         origin-center transform rotate-180 top-[85vh] z-0">
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* cross 4 */}
          <div id="cross-4" className="absolute grid -left-[20rem] md:-left-[30rem] lg:-left-[25rem] ml-32 grid-cols-2 gap-8
         origin-center transform rotate-180 top-[250vh] lg:top-[150vh] z-0 anim-element" data-tx="400">
            <Cross className="stroke-base-100" />
            <Cross className="stroke-base-100" />
            <Cross className="stroke-base-100" />
            <Cross className="stroke-base-100 opacity-0" />
          </div>

          {/* cross 5 */}
          <div id="cross-5" className="absolute hidden md:grid right-0 mt-4 mr-4 grid-cols-2 gap-8 top-[80vh] anim-element" data-ty="-400">
            <Cross className="opacity-0" />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
            <Cross />
          </div>

          {/* Next arrow */}
          <div id="next=arrow" className="absolute left-0 ml-2q lg:ml-0 lg:left-1/2 top-[80vh] z-50" onClick={() => {
            scroller.scrollTo('page-2-scroll', {
              // duration: 1500,
              delay: 100,
              smooth: 'easeInOutQuint',
              // containerId: 'scroll-container',
              isDynamic: true,
            })
            // console.log('goto')
          }}>
            <NextArrow className="relative w-12 h-12 md:w-24 md:h-24 fill-primary lg:-left-1/2 motion-safe:animate-bounce5s cursor-pointer" />
          </div>

          {/* Triangles 1 */}

          <div id="triangles-1" className="-z-10 absolute transform-gpu scale-50 md:scale-100 p-4 top-[75vh] md:top-0 right-[25%] md:right-[50%]">
            <div className="anim-element" data-ty="-400">
              <Triangle className="absolute w-52 h-52 origin-center rotate-180 stroke-primary stroke-[8px]" />
            </div>
            <div className="anim-element" data-ty="400">
              <Triangle className="absolute w-52 h-52 origin-center transform ml-16 mt-28 stroke-primary stroke-[8px]" />
            </div>
          </div>

          {/* Triangles 2 */}
          <div id="triangles-2" className="-z-10 absolute transform-gpu scale-50 md:scale-100 p-4 top-[60vh] md:top-[70vh] left-[10%] md:left-[20%]">
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

          {/* top-left */}
          <div id="top-left-section" className="lg:flex-1 flex w-full">
            <div className="flex-1 md:ml-36 web-page font-mono text-3xl md:text-5xl mt-4 ml-4 anim-element" data-ty="500"
            // css={{ ...parallax(-3), top: '300px' }}
            >
              {/* syta.co */}
              <a href="https://syta.co">
                <h2 id="syta.co">syta.co</h2>
              </a>
            </div>
            <div className="lg:mt-4 lg:mr-4 flex flex-col items-end anim-element" data-tx="500">
              <div className="w-28 h-6 md:w-64 md:h-10"
                style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
              >
              </div>
              {/* Year */}
              <div className="flex items-center mt-2">
                <div className="w-8 md:w-24 h-1 bg-primary overf"></div>
                <h4 className="font-mono text-2xl md:text-4xl ml-4">{new Date().getFullYear()}</h4>
              </div>
            </div>
          </div>

          <div id="under-contruction" className="flex-1 flex flex-col md:flex-row">
            {/* UNDER CONSTRUCTION */}
            <div className="relative mt-4 w-full md:w-1/2 inline-block font-bold anim-element" data-tx="-500">
              <div className="inline-block justify-start xl:justify-end pl-6 xl:pl-20 pr-2 md:pr-8 py-2 md:py-6 bg-base-100 relative"
                style={{ backgroundImage: 'url("/img/diagonal-stripes.svg")' }}
              >
                <Arrow className="w-8 h-8 xl:w-12 xl:h-12 top-0 absolute right-32 md:right-0 -mt-20 rotate-90 fill-primary" />
                <div className="flex items-start justify-start p-2 bg-base-100">
                  <h1 className="text-6xl lg:text-7xl 2xl:text-9xl leading-none tracking-tighter text-yellow-400">CAUTION</h1>
                </div>
              </div>
              <div
                className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl flex mt-4 ml-4 xl:ml-24"
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
            <div id="info-data" className="flex-1 w-full md:w-1/2 flex flex-col items-center md:anim-element" data-ty="500">
              <h2 className="text-6xl lg:text-7xl 2xl:text-8xl font-sans
             font-semibold text-right tracking-tighter mr-4 sm:mr-16 md:mr-0 my-4 anim-element
             shadow-outline shadow-base-100" data-tx="400">
                Sebastian<br />Tabares.
              </h2>
              <div className="inline-block mt-8 md:mt-24 lg:mt-8">
                <div>
                  <a href="https://github.com/sytabaresa">
                    <CardButton>github</CardButton>
                  </a>
                  <a href="https://www.linkedin.com/in/syta">
                    <CardButton>linkedin</CardButton>
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/syta_co">
                    <CardButton>twitter</CardButton>
                  </a>
                  <a href="mailto:me@syta.co">
                    <CardButton>email</CardButton>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* SECOND PAGE */}
        <div id="page-2" className="flex flex-col items-center md:items-start">
          <div className='mt-12 w-full'>
            <Element name="page-2-scroll">
            </Element>
            <h2 className='my-12 text-4xl font-bold font-sans ml-4 md:ml-12 shadow-outline shadow-base-100 z-50'>MEANWHILE SEE SOME PROJECTS:</h2>
            <PostCarousel posts={allPosts} className="w-full" />
          </div>

          {/* left block */}
          <div id="left-block" className="bg-primary transform rotate-45 absolute
          w-[100rem] h-[100rem]
          left-[-110rem] md:left-[-70rem] xl:left-[-60rem]
          top-[90vh] sm:top-auto 
          md:bottom-[-40rem] 
          ">
          </div>

          {/* right block */}
          <div id="right-block" className="bg-primary -rotate-45 absolute
          w-[200rem] h-[200rem]
          left-[3rem] md:left-[20rem] xl:left-[30rem]
          top-[100vh] sm:top-auto
          md:bottom-[-170rem]">
          </div>

          {/* Main Form */}
          <div className="mb-16 px-4 w-screen md:w-96 md:ml-16 mt-[30rem] md:mt-0 relative">
           <ContactForm />
          </div>
          <Element name="page-3-scroll">
            <div className="relative md:absolute bottom-0
            md:left-[30rem] lg:left-auto lg:right-0 
            mb-8 md:my-16 lg:mr-8 xl:mr-16 ">
              <Logo className="fill-base-100 w-48 md:w-48 lg:w-40 2xl:w-80" />
            </div>
          </Element>
        </div>
      </div>
    </Layout>
  )
}