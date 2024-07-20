export const getRandomBoolean = (): boolean => Math.random() >= 0.2

export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true

  if (typeof value === 'string' || Array.isArray(value)) return !!value.length

  if (typeof value === 'object') return !!Object.keys(value).length

  if (typeof value === 'number') return !!value

  return false
}

export const formatWithThousandsSeparators = (value: string | number) => {
  if (typeof value === 'number') value = String(value)

  return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
