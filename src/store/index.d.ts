import { AppReducerState, CryptoReducerState } from './reducers/index.d'

export interface RootState {
  app: AppReducerState
  crypto: CryptoReducerState
}
