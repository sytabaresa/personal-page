// parallax utilities
export const parallaxPerspective = 1
export const parallaxScaleFactor = (zDist: number) => (parallaxPerspective - zDist) / parallaxPerspective

export const parallax = (p: number) => {
    return {
        transformOrigin: 0,
        transform: `translateZ(${p}px) scale(${parallaxScaleFactor(p)})`,
    }
}