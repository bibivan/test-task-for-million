<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, minValue, required } from '@vuelidate/validators'
import Inputmask from 'inputmask'
import type { TNullable } from '@/types'

const props = defineProps<{
  minVal?: number
  placeholder?: string
  suffix?: string
  disabled?: boolean
}>()

const inputRef = ref()

const modelValue = defineModel<TNullable<string>>({
  set: () => inputRef.value.inputmask.unmaskedvalue()
})

const isFocused = ref<boolean>(false)
const handleFocus = () => (isFocused.value = true)
const handleBlur = () => (isFocused.value = false)

const validationRules = computed(() => ({
  modelValue: {
    required: helpers.withMessage('Обязательное поле', required),
    minValue: helpers.withMessage('Обязательное поле', minValue(props.minVal || 0))
  }
}))

const v$ = useVuelidate(validationRules, { modelValue })

onMounted(() => {
  Inputmask({
    alias: 'numeric',
    groupSeparator: '.',
    allowMinus: false,
    rightAlign: false,
    digits: 0,
    min: 0,
    placeholder: props.placeholder,
    suffix: props.suffix
  }).mask(inputRef.value)
})
</script>

<template>
  <label class="relative">
    <input
      ref="inputRef"
      v-model="v$.modelValue.$model"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:cursor-not-allowed"
      type="text"
      :disabled="disabled"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span
      class="absolute top-full left-0 mt-1 text-red-600 text-sm"
      :class="{ hidden: v$?.$error && !isFocused }"
    >
      {{ v$.$errors[0]?.$message }}
    </span>
  </label>
</template>
