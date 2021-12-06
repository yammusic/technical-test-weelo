import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { navigationRef } from './RootNavigation'

import HomeScreen from '../screens/Home.screen'
import CryptoListScreen from '../screens/CryptoList.screen'
import { RouterProps } from './index.d'

const Stack = createNativeStackNavigator()

class Router extends Component<RouterProps> {
  render() {
    const { appName } = this.props

    return (
      <SafeAreaProvider>
        <NavigationContainer ref={ navigationRef }>
          <Stack.Navigator initialRouteName="CryptoList">
            <Stack.Screen
              name="Home"
              component={ HomeScreen }
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="CryptoList"
              component={ CryptoListScreen }
              options={{
                title: appName,
              }}
            />

            <Stack.Screen
              name="CryptoDetail"
              component={ CryptoListScreen }
              options={{
                title: 'Crypto Detail',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

type State = CryptoCoinApp.RootState

const mapStateToProps = (state: State) => ({
  appName: state.app.appName,
})

export default connect(mapStateToProps)(Router)
