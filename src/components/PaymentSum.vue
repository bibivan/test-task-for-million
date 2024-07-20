<script setup lang="ts">
import { computed } from 'vue'
import { currenciesSuffixes, sumsPresets } from '@/mock/currencies'
import { formatWithThousandsSeparators } from '@/utils'
import type { IPaymentMethod, TNullable } from '@/types'

import BaseInputNumber from '@/components/base/BaseInputNumber.vue'
import BaseRadio from '@/components/base/BaseRadio.vue'

const props = defineProps<{
  currencyCode: TNullable<string>
  paymentMethod: TNullable<IPaymentMethod>
}>()

const modelValue = defineModel<TNullable<string>>()

const currencySumInputPlaceholder = computed(() => {
  if (props.paymentMethod?.min_amount && typeof props.currencyCode === 'string') {
    const sumWithSeparators = formatWithThousandsSeparators(props.paymentMethod.min_amount)
    const suffix = currenciesSuffixes[props.currencyCode]

    return 'Минимальная сумма платежа: ' + sumWithSeparators + suffix
  } else return ''
})
</script>

<template>
  <BaseInputNumber
    v-model="modelValue"
    :min-val="paymentMethod?.min_amount"
    :disabled="!currencyCode || !paymentMethod"
    suffix="₽"
    :placeholder="currencySumInputPlaceholder"
  />

  <div class="grid grid-cols-4 gap-4">
    <BaseRadio
      v-for="preset in sumsPresets"
      :id="'currency_sum_' + preset"
      :key="'sum-preset-' + preset"
      v-model="modelValue"
      :value="preset"
      :label="formatWithThousandsSeparators(preset) + '₽'"
      :disabled="!currencyCode || !paymentMethod"
    />
  </div>
</template>

<style scoped lang="scss"></style>
