import APIService from './API.service'

class CryptoService extends APIService {
  // baseUrl = 'https://api.coinlore.net/api'
  baseUrl = 'https://api.coingecko.com/api/v3'

  public getCoins(options: any = {}) {
    const page = options?.page || 1
    const limit = options?.limit || 50
    // const path = `tickers/?page=${page}&limit=${limit}`
    const path = `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${limit}&page=${page}`
    return this.get(path)
  }
}

export default new CryptoService()
