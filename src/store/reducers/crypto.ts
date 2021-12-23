import { handleActions } from 'redux-actions'
import {
  saveCryptos,
  saveCurrentCrypto,
  saveFavorites,
} from '../actions/crypto'

import { CryptoReducerState } from './index.d'

const initialState: CryptoReducerState = {
  cryptos: [],
  favorites: [],
  currentCrypto: null,
}

export default handleActions<CryptoReducerState, any>({
  [saveCryptos.toString()]: (state, { payload }) => {
    return { ...state, cryptos: payload || [] }
  },

  [saveFavorites.toString()]: (state, { payload }) => {
    return { ...state, favorites: payload || [] }
  },

  [saveCurrentCrypto.toString()]: (state, { payload }) => {
    return { ...state, currentCrypto: payload || null }
  },
}, initialState)
