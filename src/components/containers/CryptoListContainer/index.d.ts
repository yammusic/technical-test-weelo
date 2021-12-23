import Crypto from '../../../models/Crypto.model'

export type CryptoListProps = {
  cryptos: Crypto[]
  favorites: string[]
  getCryptos: () => void
  saveFavorites: (favorites: string[]) => void
}

export type CryptoListState = {
  isLoading?: boolean
  isRefreshing?: boolean
  search?: string
  favoritesActive?: boolean
  searchActive?: boolean
}
