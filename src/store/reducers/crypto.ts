import { handleActions } from 'redux-actions'
import { saveCryptos, saveFavorites } from '../actions/crypto'

import { CryptoReducerState } from './index.d'

const initialState: CryptoReducerState = {
  cryptos: [],
  // favorites: [],
}

export default handleActions<CryptoReducerState, any>({
  [saveCryptos.toString()]: (state, { payload }) => {
    return { ...state, cryptos: payload || initialState.cryptos }
  },

  // [saveFavorites.toString()]: (state, { payload }) => {
  //   return { ...state, favorites: payload || initialState.favorites }
  // },
}, initialState)
