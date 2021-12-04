import { DefaultTheme } from 'react-native-paper'
import { Theme } from 'react-native-paper/lib/typescript/types'
import colors from './colors'

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.amber,
  },
}

export default theme
