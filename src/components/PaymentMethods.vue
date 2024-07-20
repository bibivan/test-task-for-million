<script setup lang="ts">
import { isNotNull } from '@/utils'
import type { IPaymentMethod, TNullable } from '@/types'

import BaseRadio from '@/components/base/BaseRadio.vue'

defineProps<{
  data: TNullable<IPaymentMethod[]>
}>()

const modelValue = defineModel<TNullable<string>>()
</script>

<template>
  <div
    v-if="isNotNull(data)"
    class="grid grid-cols-5 gap-5"
  >
    <BaseRadio
      v-for="(method, idx) in data"
      :id="method.code + '_payment-method_' + idx"
      :key="method.code + '-payment-method-' + idx"
      v-model="modelValue"
      :value="method.code"
    >
      <img
        class="w-12 h-auto"
        :src="`img/payments/${method.code}.svg`"
        :alt="method.code"
      />
    </BaseRadio>
  </div>
</template>

<style scoped lang="scss"></style>
