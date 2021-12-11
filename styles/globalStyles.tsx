// styles/globalStyles.tsx
import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss } from '../stitches.config'
// import indexStyles from './index'

const customStyles = {
  '@import': [
    "https://fonts.googleapis.com/css2?family=Electrolize&family=Montserrat:wght@300;400;600;700&display=swap",
    // 'styles/index.css',
  ],
  body: {
    // WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased overflow-hidden bg-base-100 overflow-y-auto` as any,

  },
}

const styles = () => {
  globalCss(globalStyles as unknown as any)()
  globalCss(customStyles as unknown as any)()
  // globalCss(indexStyles as unknown as any)()
}

export default styles
