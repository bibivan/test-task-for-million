<script lang="ts" setup generic="">
import { computed } from 'vue'
import type { TNullable } from '@/types'

const props = defineProps<{
  id: string
  value: string
  label?: string
  disabled?: boolean
}>()

const modelValue = defineModel<TNullable<string>>()

const isChecked = computed(() => modelValue.value === props.value)
</script>

<template>
  <div class="currency-radio">
    <input
      :id="id"
      v-model="modelValue"
      class="currency-radio__input"
      type="radio"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
    />
    <label
      :for="id"
      class="currency-radio__label"
    >
      <span v-if="label">{{ label }}</span>
      <slot />
    </label>
  </div>
</template>

<style lang="scss">
.currency-radio {
  @apply flex items-center;

  &__input {
    @apply sr-only;
  }

  &__label {
    @apply text-lg font-semibold cursor-pointer;
  }

  &__input:focus + &__label {
    @apply outline;
  }

  &__input:disabled + &__label {
    @apply cursor-not-allowed;
  }
}
</style>
