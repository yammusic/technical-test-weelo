import Crypto from '../../../models/Crypto.model'

// Define the permitted props for CryptoListItem component
export type CryptoListItemProps = {
  crypto: Crypto
  favorite?: boolean
  onPress?: () => void
  onFavoritePress?: () => void
};
