import React, { Suspense, useEffect, useState } from 'react';
import '@brainhubeu/react-carousel/lib/style.css';
import Post from "../types/post"
import { useCarousel } from './carousel';

interface PostCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    posts: Post[]
}
const PostCarousel = (props: PostCarouselProps) => {
    const { className, ...rest } = props

    const { handlers, current, scrollTo, useInfinite } = useCarousel()
    const delay = 7000

    const slides = (current: number, active: boolean) => {
        const p = props.posts[current % (props.posts.length - 1)]
        // console.log(p, current, active)
        return p && <div
            className={`carousel-item w-1/3 ${active ? '' : 'opacity-50'}`}
        // key={i}
        >
            <div className='w-60 cursor-pointer' onClick={() => scrollTo(current)}>
                <div className="border-8 border-primary w-96 h-96 mx-auto">
                    <img className="w-full h-full" src={p.coverImage} alt={p.slug} />
                </div>
                <div className="prose-sm">
                    <h1 className="text-primary">{p.title}</h1>
                    <p className="text-white">{p.excerpt.slice(50)}</p>
                </div>
            </div>
        </div>
    }
    const sections = useInfinite(slides, 4)

    console.log(current, sections)

    return <>
        <button onClick={() => scrollTo(0)} className="bg-red-400"> Scroll</button>
        <div
            className={`my-carousel carousel carousel-center ${className}`}
            {...rest}
            {...handlers}
        >
            {sections}
        </div>
    </>

}

export default PostCarousel;