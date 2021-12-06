import React, { PureComponent } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

import styles from './styles'
import { NotFoundProps } from './index.d'

import notFoundImg from '../../../../assets/images/not_found.png'
import sadCatImg from '../../../../assets/images/sad_cat_token.png'

class NotFound extends PureComponent<NotFoundProps> {
  render() {
    const { sadCat, text } = this.props
    const imgSize = 120

    return (
      <View style={ styles.container }>
        <Image
          source={ sadCat ? sadCatImg : notFoundImg }
          style={{
            height: imgSize,
            width: imgSize,
          }}
        />

        <Text
          style={ StyleSheet.flatten([{
            marginTop: sadCat ? 16 : 0,
          }]) }
        >
          { text || 'Not found' }
        </Text>
      </View>
    )
  }
}

export default NotFound
