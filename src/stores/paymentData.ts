import { computed } from 'vue'
import { defineStore } from 'pinia'
import { paymentMockData } from '@/mock/payment'
import http from '@/plugins/axios'
import { useStoreStateTemplate } from '@/use/useStoreStateTemplate'
import type { ComputedRef } from 'vue'
import type { ICurrency, TDefaultState, TNullable } from '@/types'

export const usePaymentDataStore = defineStore('payment_data_store', () => {
  const paymentDataState: TDefaultState = useStoreStateTemplate<ICurrency[]>()

  const paymentDataError: ComputedRef<unknown> = computed(() => paymentDataState.error)

  const cryptoCurrencies: ComputedRef<TNullable<ICurrency>> = computed(
    () => paymentDataState.data?.find((item: ICurrency) => item.isCrypto) || null
  )

  const fiatCurrencies: ComputedRef<TNullable<ICurrency[]>> = computed(
    () => paymentDataState.data?.filter((item: ICurrency) => !item.isCrypto) || null
  )

  const getPaymentData = async (isSuccessRequest: boolean = true): Promise<void> => {
    try {
      paymentDataState.loading = true

      if (isSuccessRequest) {
        await http.get('status/200')
        paymentDataState.data = paymentMockData
      } else {
        await http.get('status/500')
      }
    } catch (e) {
      paymentDataState.error = new Error(
        'Возникла ошибка при получении данных о способах оплаты. Попробуйте перезагрузить страницу'
      )
      console.error(e)
    } finally {
      paymentDataState.loading = false
    }
  }

  return {
    paymentDataState,
    paymentDataError,
    cryptoCurrencies,
    fiatCurrencies,
    getPaymentData
  }
})
