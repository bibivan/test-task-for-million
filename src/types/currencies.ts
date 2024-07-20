import type { TNullable } from '@/types/common'

export interface IPaymentMethod {
  title: string
  code: string
  commission: string
  min_amount: number
  description: string
  sort_order: number
}

export interface ICurrenciesSuffixes {
  [key: string]: string
}

export interface ICurrenciesState {
  currentCurrencyData: TNullable<IPaymentMethod[]>
  methodCode: TNullable<string>
}

export interface ICurrenciesData {
  default_currency: string
  currencies: ICurrencies
}

export interface ICurrencies {
  [key: string]: IPaymentMethod[]
}

export interface ICurrenciesSuccessResponse {
  success: boolean
  data: ICurrenciesData
}

export interface ICurrenciesFailedResponse {
  success: boolean
  message: string
}

export type ICurrenciesResponse = ICurrenciesSuccessResponse | ICurrenciesFailedResponse
