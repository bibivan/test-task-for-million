import type { TNullable } from '@/types/common'
import type { IPaymentMethod } from '@/types/currencies'

export interface IPaymentSuccessResponse {
  success: true
  message: string
  data: {
    url: string
  }
}

export interface IPaymentFailedResponse {
  success: true
  message: string
  data: []
}

export interface IPatmentPayload {
  amount: TNullable<string>
  currency: TNullable<string>
  method: TNullable<IPaymentMethod>
}

export type IPaymentResponse = IPaymentSuccessResponse | IPaymentFailedResponse
