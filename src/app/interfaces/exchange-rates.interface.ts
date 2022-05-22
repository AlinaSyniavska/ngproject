export interface IRateItem {
  baseCurrency: string,
  currency?: string,
  saleRateNB?: number,
  purchaseRateNB?: number
  saleRate?: number,
  purchaseRate?: number
}

export interface IExchangeRates {
  date: string,
  bank: string,
  baseCurrency: number,
  baseCurrencyLit: string,
  exchangeRate: IRateItem[]
}

