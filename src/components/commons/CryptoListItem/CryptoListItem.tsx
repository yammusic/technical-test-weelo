import React, { PureComponent } from 'react'
import { View } from 'react-native'
import { Avatar, Divider, List, Text } from 'react-native-paper'

import Crypto from '../../../models/Crypto.model'
import { currencyFormat } from '../../../utils/helpers'
import { colors } from '../../../theme'

import styles from './styles'
import { CryptoListItemProps } from './index.d'

class CryptoListItem extends PureComponent<CryptoListItemProps> {
  renderItemLeft(item: Crypto) {
    return (
      <View style={ styles.itemLeftContainer }>
        <Avatar.Image size={ 40 } source={{ uri: item.image }} />
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
    const { crypto, onPress } = this.props

    return (
      <>
        <List.Item
          title={ crypto.name }
          description={ crypto.symbol.toUpperCase() }
          onPress={ onPress }
          left={ () => this.renderItemLeft(crypto) }
          right={ () => this.renderItemRight(crypto) }
        />
        <Divider />
      </>
    )
  }
}

export default CryptoListItem
