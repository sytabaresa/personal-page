import React, { HTMLAttributes, Suspense, useEffect, useState } from 'react';
import Post from "../types/post"
import { useCarousel } from './useCarousel';
import { range } from 'lodash';
import Flicking, { FlickingProps } from "@egjs/react-flicking";
import { FrameGrid } from "@egjs/react-grid";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";

Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
        return this.reduce(function (flat: any, toFlatten: any[]) {
            return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, []);
    }
});

interface PostCarouselProps extends Partial<FlickingProps> {
    posts: Post[]
}

const PostCarousel = (props: PostCarouselProps) => {
    const { className, ...rest } = props

    // const { handlers, current, scrollTo, useInfinite } = useCarousel()
    const delay = 7000

    const Slide = (props: { post: Post } & HTMLAttributes<HTMLDivElement>) => {
        const { post, className, ...rest } = props
        // console.log(p, current, active)
        return <div className={`border-4 border-primary p-2 bg-cover ${className}`}
            style={{ backgroundImage: `url(${post.coverImage}` }}
            {...rest}>
            {/* <img className="w-full h-full absolute object-cover -z-10" src={} alt={post.slug} /> */}
            <h1 className="text-primary">{post.title}</h1>
            <p className="text-white">{post.excerpt}</p>
        </div>
    }

    const mosaics = [
        [[1, 1, 2], [1, 1, 2], [3, 4, 4]],
        [[1, 1, 2, 2], [1, 1, 2, 2], [3, 3, 4, 4], [3, 3, 4, 4]],
        [[1]],
        [[1, 1, 2, 2], [3, 3, 2, 2], [4, 4, 4, 5], [4, 4, 4, 5]],
        [[1]],
        [[1, 2], [1, 2]],
        [[1]],
        [[1, 1], [2, 2]],
        [[1, 1, 1, 1, 2, 2], [1, 1, 1, 1, 2, 2], [1, 1, 1, 1, 2, 2], [3, 3, 4, 4, 4, 4], [3, 3, 4, 4, 4, 4], [3, 3, 4, 4, 4, 4]],
        [[1]],
    ]

    const plugins = [
        new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true }),
        // new Fade()
    ];


    // console.log(current, sections)
    return <Flicking
        circular={true}
        useFindDOMNode={true}
        align="center"
        noPanelStyleOverride={true}
        className={`relative z-0 border-y border-primary ${className}`}
        plugins={plugins}
        {...rest}
    >
        {mosaics.map((m, i) =>
            <FrameGrid
                gap={0}
                defaultDirection={"end"}
                frame={m}
                rectSize={0}
                key={i}
                // useFrameFill={true}
                className="w-full sm:w-1/2 md:w-1/3"
            >
                {[...new Set(m.flat())].map(e => {
                    const post = props.posts[e & (props.posts.length - 1)]
                    return <Slide post={post} key={e} />
                    // <div className={`bg-red-${e * 100} text-black`}>{e}</div>
                })}
            </FrameGrid>
        )}
    </Flicking>
}

export default PostCarousel;