import Crypto from '../../../models/Crypto.model'

export type CryptoListProps = {
  cryptos: Crypto[]
  getCryptos: () => void
}

export type CryptoListState = {
  isLoading?: boolean
}
