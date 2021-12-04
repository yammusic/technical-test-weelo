import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import { Action } from 'redux-actions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppReducerState } from './index.d'

import app from './app'
// import nav from './nav'

const appPersistConfig = {
  blacklist: [],
  key: 'app',
  storage: AsyncStorage,
}

type State = CryptoCoinApp.RootState

export default combineReducers<State>({
  app: persistReducer<AppReducerState & any, Action<any>>(appPersistConfig, app),
  // nav,
})
