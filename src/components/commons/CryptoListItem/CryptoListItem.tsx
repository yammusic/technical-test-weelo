import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { Avatar, Divider, IconButton, List, Text } from 'react-native-paper'

import Crypto from '../../../models/Crypto.model'
import { currencyFormat } from '../../../utils/helpers'
import { colors, theme } from '../../../theme'

import styles from './styles'
import { CryptoListItemProps } from './index.d'

class CryptoListItem extends PureComponent<CryptoListItemProps> {
  onFavoritePress() {
    const { onFavoritePress } = this.props

    if (onFavoritePress) {
      onFavoritePress()
    }
  }

  renderItemLeft(item: Crypto) {
    return (
      <View style={ styles.itemLeftContainer }>
        <Avatar.Image
          size={ 40 }
          source={{ uri: item.image }}
          style={{
            backgroundColor: theme.colors.background,
          }}
        />
      </View>
    )
  }

  renderItemRight(item: Crypto) {
    const isPercentageNegative = (item?.priceChangePercentage24h || 0) < 0
    const percentageColor = isPercentageNegative ? colors.red : colors.green

    return (
      <View style={ styles.itemRightContainer }>
        <Text style={ styles.itemCurrentPrice }>
          { currencyFormat(item.currentPrice) }
        </Text>

        <Text style={{ color: percentageColor }}>
          { item.priceChangePercentage24h } %
        </Text>
      </View>
    )
  }

  render() {
    const {
      crypto,
      onPress,
      favorite,
    } = this.props

    return (
      <>
        <View style={ styles.itemContainer }>
          <List.Item
            title={ crypto.name }
            description={ crypto.symbol.toUpperCase() }
            onPress={ onPress }
            left={ () => this.renderItemLeft(crypto) }
            right={ () => this.renderItemRight(crypto) }
            style={ styles.itemList }
          />

          <IconButton
            icon={ favorite ? 'star' : 'star-outline' }
            color={ favorite ? colors.amber : theme.colors.text }
            onPress={ () => this.onFavoritePress() }
            size={ 18 }
          />
        </View>

        <Divider />
      </>
    )
  }
}

export default CryptoListItem
