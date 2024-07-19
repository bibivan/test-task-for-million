<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import Inputmask from 'inputmask'
import type { TNullable } from '@/types'

const props = defineProps<{
  currency: string
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
    required: helpers.withMessage('Обязательное поле', required)
  }
}))

const v$ = useVuelidate(validationRules, { modelValue })

onMounted(() => {
  Inputmask({
    alias: 'numeric',
    groupSeparator: '.',
    autoGroup: true,
    allowMinus: false,
    rightAlign: false,
    digits: 0,
    min: 0,
    max: null,
    placeholder: '',
    suffix: props.currency
  }).mask(inputRef.value)
})
</script>

<template>
  <label class="relative">
    <input
      ref="inputRef"
      v-model="v$.modelValue.$model"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      type="text"
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
