import { createStore, applyMiddleware, Middleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reduxDebugger from 'redux-flipper'

import reducer from './reducers'
import { Action } from 'redux-actions'

const configureStore = () => {
  const middlewares: Middleware[] = [
    thunk,
  ]

  if (__DEV__) {
    middlewares.push(reduxDebugger())
  }

  const enhancer = applyMiddleware(...middlewares)
  const store = createStore<CryptoCoinApp.RootState, Action<any>, any, any>(reducer, enhancer)
  const persistor = persistStore(store, {}, () => store.getState())
  return { persistor, store }
}

const { store, persistor } = configureStore()
export { store, persistor }
