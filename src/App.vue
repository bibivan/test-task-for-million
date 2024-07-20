<script setup lang="ts">
import { reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCurrenciesStore } from '@/stores/currencies'
import { isErrorInstance } from '@/utils'
import type { ICurrenciesState, IPatmentPayload } from '@/types'

import BaseSelect from '@/components/base/BaseSelect.vue'
import PaymentMethods from '@/components/PaymentMethods.vue'
import PaymentSum from '@/components/PaymentSum.vue'

const payload = reactive<IPatmentPayload>({
  amount: null,
  currency: null,
  method: null
})

const state = reactive<ICurrenciesState>({
  currentCurrencyData: null,
  methodCode: null
})

const currenciesStore = useCurrenciesStore()
const { loadCurrenciesData } = currenciesStore
const { currenciesDataError, currenciesData, defaultCurrency, currenciesList } =
  storeToRefs(currenciesStore)

loadCurrenciesData().then(() => {
  payload.currency = defaultCurrency.value
})

watch(
  () => payload.currency,
  (val) => {
    if (val && currenciesData.value) {
      state.currentCurrencyData = currenciesData.value[val]
      state.methodCode = null
    }
  }
)

watch(
  () => state.methodCode,
  (val) => {
    payload.method = state.currentCurrencyData?.find((item) => item.code === val) || null
  }
)
</script>

<template>
  <section>
    <div
      v-if="payload.currency"
      class="container"
    >
      <h1 class="hidden">Payment-App</h1>
      <BaseSelect
        v-if="currenciesList"
        v-model="payload.currency"
        :data="currenciesList"
        :dontShowSelected="true"
        defaultOptionLabel="Другие валюты"
      />

      <PaymentMethods
        v-if="currenciesData && payload.currency"
        v-model="state.methodCode"
        :data="currenciesData[payload.currency]"
      />

      <PaymentSum
        v-model="payload.amount"
        :payment-method="payload.method"
        :currency-code="payload.currency"
      />
    </div>

    <div
      v-if="currenciesDataError && isErrorInstance(currenciesDataError)"
      class="container"
    >
      {{ currenciesDataError.message }}
    </div>
  </section>
</template>
