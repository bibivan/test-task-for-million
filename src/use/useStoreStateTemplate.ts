import { reactive } from 'vue'
import type { TDefaultState } from '@/types'

export const useStoreStateTemplate = <T>() => {
  return reactive<TDefaultState<T>>({
    data: null,
    loading: false,
    error: null
  })
}
