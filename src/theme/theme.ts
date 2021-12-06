import { configureFonts, DefaultTheme } from 'react-native-paper'
import { Theme } from 'react-native-paper/lib/typescript/types'
import colors from './colors'
import { fontsConfig } from './fonts'

const theme: Theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontsConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.amber,
  },
}

export default theme
