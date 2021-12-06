import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Button } from 'react-native-paper'

import CryptoListItem from '../../commons/CryptoListItem'
import Loading from '../../commons/Loading'
import NotFound from '../../commons/NotFound'
import { getCryptos } from '../../../store/actions/crypto'
import { push } from '../../../app/RootNavigation'

import styles from './styles'
import { CryptoListProps, CryptoListState } from './index.d'

class CryptoListContainer extends Component<CryptoListProps, CryptoListState> {
  constructor(props: CryptoListProps) {
    super(props)

    this.state = {
      isLoading: false,
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  setStateAsync(state: CryptoListState) {
    return new Promise((resolve: any) => {
      this.setState(state, resolve)
    })
  }

  async loadData() {
    const { getCryptos, cryptos } = this.props

    if (!cryptos || cryptos.length === 0) {
      await this.setStateAsync({ isLoading: true })
    }

    await getCryptos()
    await this.setStateAsync({ isLoading: false })
  }

  renderLoading() {
    return (
      <View style={ styles.loadingContainer }>
        <Loading
          size={ 60 }
          text="Getting cryptos data..."
        />
      </View>
    )
  }

  renderNotFound() {
    const { isLoading } = this.state

    return (
      <View style={ styles.notFoundContainer }>
        <NotFound
          // sadCat // uncomment to see the sad cat meme
          text="No cryptos found"
        />

        <Button
          mode="contained"
          onPress={ () => this.loadData() }
          disabled={ isLoading }
        >
          Try again
        </Button>
      </View>
    )
  }

  render() {
    const { cryptos } = this.props
    const { isLoading } = this.state

    return (
      <View style={ styles.container }>
        {/* Show loading when request cryptos data */}
        { isLoading && this.renderLoading() }

        {/* Show empty list when not found cryptos data */}
        { (!isLoading && cryptos?.length === 0) && this.renderNotFound() }

        {/* Show list of cryptos */}
        { (!isLoading && cryptos?.length > 0) && (
          <FlatList
            data={ cryptos }
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CryptoListItem
                crypto={ item }
                onPress={ () => push('CryptoDetail', { crypto: item }) }
              />
            )}
          />
        ) }
      </View>
    )
  }
}

type State = CryptoCoinApp.RootState

const mapStateToProps = (state: State) => ({
  cryptos: state.crypto.cryptos,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({
    getCryptos,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(CryptoListContainer)
