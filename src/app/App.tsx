import React from 'react'
import { StatusBar } from 'react-native'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider as ThemeProvider } from 'react-native-paper'
import SplashScreen from 'react-native-splash-screen'

import Router from './Router'
import { theme } from '../theme'
import { persistor, store } from '../store'

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <StoreProvider store={ store }>
        <PersistGate persistor={ persistor }>
          <ThemeProvider theme={ theme }>
            <StatusBar backgroundColor="transparent" translucent />
            <Router />
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    )
  }
}

export default App
