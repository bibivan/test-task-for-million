import type { ICurrenciesResponse } from '@/types'

export const isErrorInstance = (e: unknown): e is Error => e instanceof Error

export const isHTMLSelectElement = (elem: unknown): elem is HTMLSelectElement =>
  elem instanceof HTMLSelectElement

export const isKeyOfT = <T extends Record<PropertyKey, unknown>>(
  key: PropertyKey,
  obj: T
): key is keyof T => key in obj

export const isCurrenciesDataResponse = (
  data: ICurrenciesResponse
): data is ICurrenciesResponse => {
  return 'success' in data
}

export const isObject = (value: unknown): value is object => {
  return value !== null && typeof value === 'object'
}

export const isNotNull = <T>(value: T | null): value is T => value !== null
