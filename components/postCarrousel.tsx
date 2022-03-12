import React from 'react';
import { slidesToShowPlugin, autoplayPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import dynamic from 'next/dynamic';
import Post from "../types/post"
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

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
interface PostCarouselProps {
    posts: Post[]
}
const PostCarousel = (props: PostCarouselProps) => {

    const screens: any = fullConfig!.theme!.screens!

    const delay = 7000
    return <Carousel plugins={[
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
                    // {
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
        {...props}>
        {props.posts.map(p => (
            <div className="w-96">
                <div className="border-8 border-primary w-96 h-96">
                    <img className="w-full h-full" src={p.coverImage} />
                </div>
                <div className="prose-sm">
                    <h1 className="text-primary">{p.title}</h1>
                    <p className="text-white">{p.excerpt.slice(50)}</p>
                </div>
            </div>
        ))}
    </Carousel>
}

export default PostCarousel;