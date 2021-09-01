// styles/globalStyles.tsx
import tw, { theme, globalStyles } from 'twin.macro'
import { global } from '../stitches.config'

const customStyles = {
  '@import': "https://fonts.googleapis.com/css2?family=Electrolize&family=Montserrat:wght@300;400;600;700&display=swap",
  body: {
    // WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased overflow-x-hidden`,
  },
}

const styles = () => {
  global(customStyles)()
  global(globalStyles)()
}

export default styles
