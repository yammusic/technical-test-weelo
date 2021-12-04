/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="typescript" />

import { RootState as RootStateApp } from './src/store/index.d'

declare global {
  namespace CryptoCoinApp {
    interface RootState extends RootStateApp {}
  }
}
