<script setup lang="ts">
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { usePaymentDataStore } from '@/stores/paymentData'
import { isErrorInstance } from '@/utils'
import type { TNullable } from '@/types'

import BaseCurrencyInput from '@/components/base/BaseCurrencyInput.vue'
import BaseCurrencyRadio from '@/components/base/BaseCurrencyRadio.vue'
import BaseCurrencySelect from '@/components/base/BaseCurrencySelect.vue'

const state = reactive<{
  sum: TNullable<string>
}>({
  sum: null
})

const paymentDataStore = usePaymentDataStore()
const { getPaymentData } = paymentDataStore
const { paymentDataError, fiatCurrencies } = storeToRefs(paymentDataStore)

getPaymentData()
</script>

<template>
  <section>
    <div
      v-if="fiatCurrencies"
      class="container"
    >
      <div>
        <BaseCurrencyInput
          v-model="state.sum"
          currency="₽"
        />
        <div class="grid grid-cols-4 gap-4">
          <BaseCurrencyRadio
            v-model="state.sum"
            value="5000"
            currency="₽"
          />
          <BaseCurrencyRadio
            v-model="state.sum"
            value="10000"
            currency="₽"
          />
          <BaseCurrencyRadio
            v-model="state.sum"
            value="15000"
            currency="₽"
          />
          <BaseCurrencyRadio
            v-model="state.sum"
            value="20000"
            currency="₽"
          />
        </div>
        <BaseCurrencySelect />
      </div>

      <div
        v-for="currency in fiatCurrencies"
        :key="currency.name"
        class="grid grid-cols-5 gap-5 h-12"
      >
        <template v-if="currency.abbreviation === 'RUB'">
          <img
            v-for="payment in currency.paymentMethods"
            :key="payment.name"
            class="h-auto"
            :src="payment.iconUrl"
            :alt="payment.name"
          />
        </template>
      </div>
    </div>
    <div
      v-if="paymentDataError && isErrorInstance(paymentDataError)"
      class="container"
    >
      {{ paymentDataError.message }}
    </div>
  </section>
</template>
