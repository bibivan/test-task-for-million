import { currenciesMock } from '@/mock/currencies'
import type { ICurrenciesResponse } from '@/types'

export const getCurrenciesData = (isSuccessRequest: boolean) =>
  new Promise<ICurrenciesResponse>((resolve, reject) => {
    if (isSuccessRequest) resolve(currenciesMock)
    else
      reject({
        success: false,
        message: 'Возникла ошибка при получении данных о способах оплаты'
      })
  })
