export interface IPaymentMethod {
  minAmount: number
  iconUrl: string
  name: string
  fee: number
  additionalInfo: string
}

export interface ICurrency {
  name: string
  isCrypto: boolean
  symbol: string
  flagUrl: string
  abbreviation: string
  paymentMethods: IPaymentMethod[]
}
