import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useStoreStateTemplate } from '@/use/useStoreStateTemplate'
import { getCurrenciesData, getRandomBoolean, isObject } from '@/utils'
import type { ComputedRef } from 'vue'
import type {
  ICurrencies,
  ICurrenciesData,
  ICurrenciesResponse,
  TDefaultState,
  TNullable
} from '@/types'

export const useCurrenciesStore = defineStore('payment_data_store', () => {
  const currenciesDataState: TDefaultState = useStoreStateTemplate<ICurrenciesData>()

  const currenciesDataError: ComputedRef<unknown> = computed(() => currenciesDataState.error)

  const currenciesData: ComputedRef<TNullable<ICurrencies>> = computed(() => {
    return currenciesDataState.data?.currencies || null
  })

  const defaultCurrency: ComputedRef<TNullable<string>> = computed(() => {
    return currenciesDataState.data?.default_currency || null
  })

  const currenciesList: ComputedRef<TNullable<string[]>> = computed(() => {
    if (isObject(currenciesData.value)) return Object.keys(currenciesData.value)
    else return null
  })

  const loadCurrenciesData = async (): Promise<void> => {
    try {
      currenciesDataState.loading = true

      const res: ICurrenciesResponse = await getCurrenciesData(getRandomBoolean())

      if (res.success && 'data' in res) {
        currenciesDataState.data = res.data
      }
      if (!res.success && 'message' in res) {
        currenciesDataState.error = new Error(res.message)
      }
    } catch (e) {
      currenciesDataState.error = new Error(
        'Возникла ошибка при получении данных о способах оплаты'
      )
      console.error(e)
    } finally {
      currenciesDataState.loading = false
    }
  }

  return {
    currenciesDataState,
    currenciesDataError,
    currenciesData,
    defaultCurrency,
    currenciesList,
    loadCurrenciesData
  }
})
