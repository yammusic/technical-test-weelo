import Crypto from '../../../models/Crypto.model'

export type CryptoDetailsProps = {
  cryptoId: string
  currentCrypto?: Crypto
}

export type CryptoDetailsState = {
  isLoading?: boolean
}
