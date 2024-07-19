<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  imageSrc: string
  title: string
  fee: string
  paymentMethod: string
}>()

const selectedPaymentMethod = ref<string>('')
</script>

<template>
  <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100">
    <input
      v-model="selectedPaymentMethod"
      type="radio"
      :value="props.paymentMethod"
      class="hidden"
    />
    <img
      :src="props.imageSrc"
      alt="Payment Method"
      class="w-12 h-12 mr-4"
    />
    <span>
      <span class="font-bold block">{{ props.title }}</span>
      <span class="text-gray-500 block">Комиссия: {{ props.fee }}</span>
    </span>
  </label>
</template>
