import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Button, Chip, Searchbar, Text } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import CryptoListItem from '../../commons/CryptoListItem'
import Loading from '../../commons/Loading'
import NotFound from '../../commons/NotFound'
import Crypto from '../../../models/Crypto.model'
import { getCryptos, saveFavorites } from '../../../store/actions/crypto'
import { push } from '../../../app/RootNavigation'
import { colors, theme } from '../../../theme'

import styles from './styles'
import { CryptoListProps, CryptoListState } from './index.d'

class CryptoListContainer extends Component<CryptoListProps, CryptoListState> {
  constructor(props: CryptoListProps) {
    super(props)

    this.state = {
      isLoading: false,
      isRefreshing: false,
      search: '',
      favoritesActive: false,
      searchActive: false,
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  async loadData() {
    const { getCryptos, cryptos } = this.props

    if (!cryptos || cryptos.length === 0) {
      this.setState({ isLoading: true })
    }

    await getCryptos()
    this.setState({ isLoading: false })
  }

  async onPressFavorite(item: Crypto) {
    const { saveFavorites, favorites } = this.props

    if (favorites.includes(item.id)) {
      if (favorites.includes(item.id)) {
        const newFavorites = favorites.filter((id: string) => id !== item.id)
        await saveFavorites(newFavorites)
      }
    } else {
      if (!favorites.includes(item.id)) {
        const newFavorites = [...favorites, item.id]
        await saveFavorites(newFavorites)
      }
    }
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

  renderNotFavorites() {
    return (
      <View style={ styles.notFoundContainer }>
        <NotFound
          // sadCat // uncomment to see the sad cat meme
          text="No favorites found"
        />
      </View>
    )
  }

  render() {
    const { cryptos, favorites } = this.props
    const {
      isLoading,
      search,
      searchActive,
      favoritesActive,
    } = this.state

    const cryptosFiltered = cryptos.filter((crypto: Crypto) => {
      if (search && searchActive) {
        const isInSearch = (
          crypto.name.toLowerCase().includes(search.toLowerCase())
          || crypto.symbol.toLowerCase().includes(search.toLowerCase())
        )

        if (favoritesActive) {
          return isInSearch && favorites.includes(crypto.id)
        }

        return isInSearch
      } else if (favoritesActive) {
        return favorites.includes(crypto.id)
      }

      return true
    })

    return (
      <View style={ styles.container }>
        {/* Show loading when request cryptos data */}
        { isLoading && this.renderLoading() }

        {/* Show empty list when not found cryptos data */}
        { (!isLoading && cryptos?.length === 0) && this.renderNotFound() }

        {/* Show list of cryptos and options */}
        { (!isLoading && cryptos.length > 0) && (
          <>
            <View style={ styles.actionsContainer }>
              <Chip
                onPress={ () => this.setState({ favoritesActive: !favoritesActive }) }
                selected={ favoritesActive }
                style={ styles.chip }
              >
                <FontAwesome name="star" color={ colors.amber } size={ 14 } />
              </Chip>

              <Chip
                onPress={ () => false }
                style={ styles.chip }
              >
                <Text>USD</Text>
              </Chip>

              <Chip
                onPress={ () => false }
                style={ styles.chip }
              >
                <Text>Sort by currency </Text>
                <FontAwesome name="chevron-up" color={ theme.colors.primary } size={ 14 } />
              </Chip>

              <Chip
                onPress={ () => this.setState({ searchActive: !searchActive }) }
                style={ styles.chip }
                selected={ searchActive }
              >
                <FontAwesome name="search" size={ 14 } />
              </Chip>
            </View>

            { searchActive && (
              <View>
                <Searchbar
                  placeholder="Search"
                  onChangeText={ (value: string) => this.setState({ search: value }) }
                  value={ search as string }
                />
              </View>
            ) }

            <View style={ styles.listContainer }>
              { cryptosFiltered.length === 0 && this.renderNotFavorites() }

              { cryptosFiltered.length > 0 && (
                <FlatList
                  data={ cryptosFiltered }
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    const isFavorite = favorites.find((cryptoId: string) => cryptoId === item.id)
                    return (
                      <CryptoListItem
                        crypto={ item }
                        favorite={ !!isFavorite }
                        onPress={ () => push('CryptoDetail', { cryptoId: item.id }) }
                        onFavoritePress={ () => this.onPressFavorite(item) }
                      />
                    )
                  }}
                />
              ) }
            </View>
          </>
        ) }
      </View>
    )
  }
}

const mapStateToProps = (state: any) => ({
  cryptos: state.crypto.cryptos,
  favorites: state.crypto.favorites,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  getCryptos,
  saveFavorites,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CryptoListContainer)
