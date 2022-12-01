import React, { Suspense, useEffect, useState } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import Post from "../types/post"
import { useCarousel } from './useCarousel';
import { range } from 'lodash';

interface PostCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    posts: Post[]
}
const PostCarousel = (props: PostCarouselProps) => {
    const { className, ...rest } = props

    const { handlers, current, scrollTo, useInfinite } = useCarousel()
    const delay = 7000

    const slides = (current: number, active: boolean, rest: Record<string, any>) => {
        const p = props.posts[current % (props.posts.length - 1)]
        // console.log(p, current, active)
        return p && <div
            className={`carousel2-item  ${active ? '' : 'opacity-50'}`}
            {...rest}
        >
            <div className='w-[26rem] max-w-[100vw] md:mx-4' onClick={() => scrollTo(current - 1)} >
                <div className="border-8 border-primary w-[26rem] max-w-[100vw] h-96 mx-auto">
                    <img className="w-full h-full object-cover" src={p.coverImage} alt={p.slug} />
                </div>
                <div className="prose-sm">
                    <h1 className="text-primary">{p.title}</h1>
                    <p className="text-white text-lg">{p.excerpt.slice(50)}</p>
                </div>
            </div>
        </div>
    }
    // const sections = useInfinite(slides, 4)
    // const sections = range(12).map(i => slides(i, current + 1 == i))
    const sections = useInfinite(range(4).map(i => slides(i, true)), 4)

    // console.log(current, sections)

    return <>
        {/* <button onClick={() => scrollTo(0)} className="bg-red-400"> Scroll</button> */}
        <div
            className={`relative carousel2 ${className}`}
            {...rest}
            {...handlers}
        >
            {sections}
        </div>
    </>

}

export default PostCarousel;