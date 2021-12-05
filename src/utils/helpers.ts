// Parse a number value to a currency format (e.g.: 1234.56 -> $ 1.234,56)
export const currencyFormat = (value: number, options: any = {}) => {
  const sectionLimit = options?.sectionLimit ?? 3
  const separator = options?.separator ?? '.'
  const decimalLimit = options?.decimalLimit ?? 2
  const decimalSeparator = options?.decimalSeparator ?? ','
  const symbol = options?.symbol ?? '$'

  const regex = `\\d(?=(\\d{${(sectionLimit)}})+${(decimalLimit > 0 ? '\\D' : '$')})`
  const num = value.toFixed(Math.max(0, ~~decimalLimit))
  const format = (decimalLimit > 0 ? num.replace('.', decimalSeparator) : num).replace(new RegExp(regex, 'g'), `$&${separator}`)

  return `${symbol} ${format}`
}
