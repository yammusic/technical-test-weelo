import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text } from 'react-native-paper'

import styles from './styles'
import { LoadingProps } from './index.d'

class Loading extends PureComponent<LoadingProps> {
  render() {
    const {
      color,
      hideText,
      horizontal,
      size,
      text,
      textSize,
    } = this.props

    return (
      <View
        style={ StyleSheet.flatten([
          styles.container,
          {
            flexDirection: horizontal ? 'row' : 'column',
          },
        ]) }
      >
        <ActivityIndicator
          animating={ true }
          size={ size || 32 }
          color={ color }
        />

        { !hideText && (
          <Text
            style={ StyleSheet.flatten([{
              marginLeft: horizontal ? 16 : 0,
              marginTop: horizontal ? 0 : 16,
              fontSize: textSize || 16,
            }]) }
          >
            { text || 'Loading...' }
          </Text>
        )}
      </View>
    )
  }
}

export default Loading
