import { handleActions } from 'redux-actions'
import { saveAppName, saveCopyright } from '../actions/app'

import { AppReducerState } from './index.d'

const initialState: AppReducerState = {
  appName: 'Crypto Coin',
  copyright: '© 2021-2022 Crypto Coin - Powered by Weelo.',
}

export default handleActions<AppReducerState, any>({
  [saveAppName.toString()]: (state, { payload }) => {
    return { ...state, appName: payload || initialState.appName }
  },

  [saveCopyright.toString()]: (state, { payload }) => {
    return { ...state, copyright: payload || initialState.copyright }
  },
}, initialState)
