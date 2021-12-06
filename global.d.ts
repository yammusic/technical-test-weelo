/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="typescript" />

import { ImageSourcePropType } from 'react-native'
import { RootState as RootStateApp } from './src/store/index.d'

declare module '*.png' {
  const value: ImageSourcePropType
  export default value
}

declare global {
  namespace CryptoCoinApp {
    interface RootState extends RootStateApp {}
  }
}
