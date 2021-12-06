import { CryptoModelData } from './index.d'

class Crypto {
  public id!: string
  public symbol!: string
  public name!: string
  public image!: string
  public currentPrice!: number
  public marketCap?: number
  public marketCapRank?: number
  public priceChange24h?: number
  public priceChangePercentage24h?: number

  static build(data: CryptoModelData): Crypto {
    const crypto = new Crypto()

    crypto.id = data?.id
    crypto.symbol = data?.symbol
    crypto.name = data?.name
    crypto.image = data?.image
    crypto.currentPrice = data?.current_price
    crypto.marketCap = data?.market_cap
    crypto.marketCapRank = data?.market_cap_rank
    crypto.priceChange24h = data?.price_change_24h
    crypto.priceChangePercentage24h = data?.price_change_percentage_24h

    return crypto
  }
}

export default Crypto
