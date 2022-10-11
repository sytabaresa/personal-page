import React, { HTMLAttributes, useEffect, useRef, useState } from "react"


export const useCarousel = () => {
    const [pressed, setPressed] = useState(false)
    const [inf, setInf] = useState<(current: number, active: boolean) => React.ReactNode>()

    const [_preload, setPreload] = useState(0)

    const [current, setCurrent] = useState(0)
    const [sections, setSections] = useState<React.ReactNode[]>()

    const targetRef = useRef<any>(null)
    const [pos, setPos] = useState({ top: 0, left: 0, x: 0, y: 0 })

    const range = (i: number) => [...Array(i).keys()]

    const handlers = {
        ref: targetRef,
        onMouseDown: (e: any) => {
            setPressed(true)
            setPos({
                // The current scroll
                left: e.currentTarget.scrollLeft,
                top: e.currentTarget.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY,
            })
            e.currentTarget.style.cursor = "grabbing";
            e.currentTarget.style.userSelect = 'none';
        },
        onMouseUp: (e: any) => {
            setPressed(false)
            e.currentTarget.style.cursor = "inherit";
            e.currentTarget.style.removeProperty('user-select');

        },
        onMouseMove: (e: any) => {
            if (!pressed) return
            e.preventDefault()
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;

            // Scroll the element
            // console.log(dx, dy)
            e.currentTarget.scrollTop = pos.top - dy;
            e.currentTarget.scrollLeft = pos.left - dx;
        },
        onScroll: (e: any) => {
            // Grab the position yo are scrolled to (the top of the viewport)
            let pos = e.currentTarget.scrollLeft;
            // console.log(e.currentTarget)
            const sections = e.currentTarget.children

            for (let i = 0, l = sections.length; i < l; i++) {
                // Since our stap-align is centered, get the position of the middle of the viewport relative to the current section's top (if your snap items are not full-height, it might require using half the viewport's height instead)
                let relativePos = sections[i].offsetLeft - pos + (sections[i].offsetWidth / 2);

                // console.log("scroll", i, relativePos, pos, sections[i].offsetLeft, sections[i].offsetWidth)
                // Check if the point we found falls within the section
                if (relativePos >= 0 && relativePos < sections[i].offsetWidth) {
                    console.log(inf)
                    inf && setSections(s => {
                        console.log('calc')
                        return range(_preload).map((ii) => inf(ii, i == ii))
                    })
                    setCurrent(i)
                    break;
                }
            }

            // console.log(e.currentTarget.scrollLeft, e.currentTarget.clientWidth, e.currentTarget.scrollWidth)
            if (inf && e.currentTarget.scrollLeft + e.currentTarget.clientWidth >= e.currentTarget.scrollWidth * 0.7) {
                setPreload(p => {
                    setSections(range(p + 1).map((i) => inf(i, current == i)))
                    return p + 1
                })
            }
        },
    }

    const scrollTo = (n: number) => {
        if (targetRef.current) {
            if (n > 0) {
                n = n - 1
                const sections = targetRef.current.children
                const offset = sections[n].offsetLeft - (sections[n].offsetWidth / 2)

                // console.log("off", targetRef.current.scrollLeft, offset, sections[n].offsetLeft, sections[n].offsetWidth)
                targetRef.current.scrollLeft = offset
            } else {
                targetRef.current.scrollLeft = 0
            }
        }

    }

    const useInfinite = (s: (current: number, active: boolean) => React.ReactNode, preload: number = 1): React.ReactNode[] => {
        useEffect(() => {
            setInf(s)
            const sects = range(preload).map((i) => s(i, current == i))
            setSections(sects)
            setPreload(preload)
            console.log('inf1')
        }, [])

        return sections!
    }

    return { handlers, current, scrollTo, useInfinite, sections }
}