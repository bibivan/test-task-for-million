<script lang="ts" setup>
import { computed } from 'vue'
import type { TNullable } from '@/types'

const props = defineProps<{
  value: string
  currency: string
}>()

const modelValue = defineModel<TNullable<string>>({
  set: () => props.value
})

const formattedValue = computed(() => {
  const formattedNumber = props.value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${formattedNumber}${props.currency}`
})

const isChecked = computed(() => modelValue.value === props.value)
</script>

<template>
  <label class="flex items-center cursor-pointer">
    <input
      v-model="modelValue"
      class="hidden"
      type="radio"
      :value="value"
      :checked="isChecked"
    />
    <span class="text-lg font-semibold">{{ formattedValue }}</span>
  </label>
</template>
