import React from 'react'
import CryptoDetailsContainer from '../components/containers/CryptoDetailsContainer'

type Props = CryptoCoinApp.NavigationProps

const CryptoDetailsScreen = (props: Props) => {
  const { route } = props
  const id = route?.params?.cryptoId ?? {}

  return <CryptoDetailsContainer cryptoId={ id } />
}

export default CryptoDetailsScreen
