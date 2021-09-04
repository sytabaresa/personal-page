import { createStitches } from '@stitches/react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig as any)

const screens = fullConfig.theme.screens
const screensKeys = Object.keys(screens!)
let media: { [key: string]: string } = {}
screensKeys.forEach(s => media[s] = `(min-width: ${screens![s]})`);

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: '',
  theme: {},
  utils: {},
  media,
})
