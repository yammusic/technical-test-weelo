import Crypto from '../../models/Crypto.model'

export type AppReducerState = {
  appName: string
  copyright: string
}

export type CryptoReducerState = {
  cryptos: Crypto[]
  favorites: string[]
  currentCrypto?: Crypto | null
}
