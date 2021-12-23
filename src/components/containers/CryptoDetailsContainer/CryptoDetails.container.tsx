import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Text } from 'react-native-paper'

import styles from './styles'
import { CryptoDetailsProps, CryptoDetailsState } from './index.d'

class CryptoDetailsContainer extends Component<CryptoDetailsProps, CryptoDetailsState> {
  constructor(props: CryptoDetailsProps) {
    super(props)

    this.state = {
      isLoading: false,
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  setStateAsync(state: CryptoDetailsState) {
    return new Promise((resolve: any) => {
      this.setState(state, resolve)
    })
  }

  async loadData() {
    const { currentCrypto, cryptoId } = this.props

    if (!currentCrypto || !currentCrypto.id) {
      await this.setStateAsync({ isLoading: true })
    }

    await this.setStateAsync({ isLoading: false })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text>Crypto Details</Text>
      </View>
    )
  }
}

type State = CryptoCoinApp.RootState

const mapStateToProps = (state: State) => ({
  currentCrypto: state.crypto.currentCrypto,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptoDetailsContainer)
