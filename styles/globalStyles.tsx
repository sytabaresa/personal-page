// styles/globalStyles.tsx
import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss } from '../stitches.config'

const customStyles = {
  '@import': "https://fonts.googleapis.com/css2?family=Electrolize&family=Montserrat:wght@300;400;600;700&display=swap",
  body: {
    // WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased overflow-x-hidden` as any,
  },
}

const styles = () => {
  globalCss(customStyles)()
  // globalCss(globalStyles)()
}

export default styles
