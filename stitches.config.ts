import { createCss, StitchesCss } from '@stitches/react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

const screens = fullConfig.theme.screens
const screensKeys = Object.keys(screens!)
let media: { [key: string]: string } = {}
screensKeys.forEach(s => media[s] = `(min-width: ${screens![s]})`);

export const stitches = createCss({
  prefix: '',
  theme: {},
  themeMap: {},
  utils: {},
  media,
})

export type CSS = StitchesCss<typeof stitches>

export const { css, styled, global, theme, keyframes, getCssString } = stitches
export type { StitchesVariants } from '@stitches/react'