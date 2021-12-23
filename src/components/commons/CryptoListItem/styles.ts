import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemList: {
    flex: 1,
    paddingLeft: 12,
  },

  itemLeftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemRightContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  itemCurrentPrice: {
    fontWeight: 'bold',
  },
})

export default styles
