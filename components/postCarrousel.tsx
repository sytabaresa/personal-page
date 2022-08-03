import React, { useState } from 'react';
import { slidesToShowPlugin, autoplayPlugin, arrowsPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import Post from "../types/post"
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig as any)

// const { slidesToShowPlugin } = dynamic(
//     () => import('@brainhubeu/react-carousel').then(mod => {
//         return {
//             slidesToShowPlugin: mod.slidesToShowPlugin
//         } as any
//     }),
//     { ssr: false }
// );

const Carousel = dynamic(
    () => import('@brainhubeu/react-carousel'),
    { ssr: false },
);
interface PostCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    posts: Post[]
}
const PostCarousel = (props: PostCarouselProps) => {
    const { className, ...rest } = props
    const screens: any = fullConfig!.theme!.screens!

    const [slideNum, setSlideNum] = useState(0)
    const delay = 7000

    const slides = props.posts.map(p => (
        <div className="w-96">
            <div className="border-8 border-primary w-96 h-96">
                <img className="w-full h-full" src={p.coverImage} />
            </div>
            <div className="prose-sm">
                <h1 className="text-primary">{p.title}</h1>
                <p className="text-white">{p.excerpt.slice(50)}</p>
            </div>
        </div>
    ))

    const onChange = (value: number) => {
        // console.log(value)
        setSlideNum(value)
    }
    return <div className={`flex flex-col items-center ${className}`} {...rest}>
        <Carousel plugins={[
            'infinite',
            'clickToChange',
            'centered',
            // 'arrows',
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 3
                }
            },
            {
                resolve: autoplayPlugin,
                options: {
                    interval: delay,
                }
            },
        ]}
            breakpoints={{
                [screens['md'].split('px')[0]]: {
                    plugins: [
                        'infinite',
                        // 'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1
                            }
                        },
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: delay,
                            }
                        },
                        // {WW
                        //     resolve: arrowsPlugin,
                        //     options: {
                        //         arrowLeft: <button>{"<"}</button>,
                        //         arrowLeftDisabled: <button>{"<"}</button>,
                        //         arrowRight: <button>{">"}</button>,
                        //         arrowRightDisabled: <button>{">"}</button>,
                        //         addArrowClickHandler: true,
                        //     }
                        // }
                    ]
                }
            }}
            slides={slides}
            value={slideNum}
            onChange={onChange}
            className="w-full"
        // {...props}
        />
        <div className="flex mt-6 md:hidden">
            {props.posts.map((_, i) => {
                const slideNumTrunc = slideNum % slides.length
                return <div className={`rounded-full w-4 h-4 mx-2 ${slideNumTrunc == i ? 'bg-white' : 'bg-primary'}`} onClick={() => onChange(i)}></div>
            })}
        </div>
    </div>
}

export default PostCarousel;