import React, { HTMLAttributes } from 'react';
import Post from "types/post"
import Flicking, { FlickingProps } from "@egjs/react-flicking";
import { FrameGrid } from "@egjs/react-grid";
import { AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";

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
    const { className, posts, ...rest } = props

    if (!posts || posts.length == 0)
        return <></>

    // const { handlers, current, scrollTo, useInfinite } = useCarousel()
    const delay = 7000

    const Slide = (props: { post: Post } & HTMLAttributes<HTMLAnchorElement>) => {
        const { post, className, ...rest } = props
        // console.log(p, current, active)
        return <a href={'/posts/'+post.slug} className={`bock border-4 border-primary ${className ?? ''}`}
            {...rest}>
            <img className="w-full h-full absolute object-cover brightness-50 -z-10" src={post.coverImage} alt={post.slug} />
            <div className='p-2'>
            <h1 className="text-primary">{post.title}</h1>
            <p className="text-white">{post.description}</p>
            </div>
        </a>
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
        new AutoPlay({ duration: delay, direction: "NEXT", stopOnHover: false }),
        // new Fade()
    ];


    // console.log(current, sections)
    return <Flicking
        circular={true}
        useFindDOMNode={true}
        align="center"
        noPanelStyleOverride={true}
        className={`relative z-0 border-y border-primary ${className ?? ''}`}
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
                    const post = posts[(e - 1) % posts.length]
                    // console.log(e)
                    return <Slide post={post} key={e} />
                    // <div className={`bg-red-${e * 100} text-black`}>{e}</div>
                })}
            </FrameGrid>
        )}
    </Flicking>
}

export default PostCarousel;