import { Dispatch } from 'redux'
import { createAction } from 'redux-actions'
import { CryptoModelData } from '../../models'
import Crypto from '../../models/Crypto.model'
import CryptoService from '../../services/Crypto.service'

type State = CryptoCoinApp.RootState

// Redux action for save cryptos data in store
export const saveCryptos = createAction<Crypto[]>('crypto/SAVE_CRYPTOS')

// Redux action for save favorite cryptos data in store
export const saveFavorites = createAction<string[]>('crypto/SAVE_FAVORITES')

// Redux action for save current crypto data in store
export const saveCurrentCrypto = createAction<Crypto | null>('crypto/SAVE_CURRENT_CRYPTO')

// Redux action for get cryptos data from API service and save cryptos in store
export const getCryptos = () => async (dispatch: Dispatch) => {
  try {
    const data = await CryptoService.getCoins()
    const cryptos = (data || [])?.map((item: CryptoModelData) => Crypto.build(item))
    await dispatch(saveCryptos(cryptos ?? []))
  } catch (error) {
    console.warn('Error getting crypto coins', error)
  }
}
