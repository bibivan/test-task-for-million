export const getRandomBoolean = (): boolean => Math.random() >= 0.5
export const isErrorInstance = (e: unknown): e is Error => e instanceof Error
