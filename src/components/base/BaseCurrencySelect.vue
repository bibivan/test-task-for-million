<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import type { TNullable } from '@/types'

interface Option {
  value: string
  label: string
}

const dropdownOpen = ref(false)
const options = ref<Option[]>([
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
])
const selectedOption = ref<Option | null>(options.value[0])
const focusedIndex = ref(-1)
const nativeSelect = ref<TNullable<HTMLSelectElement>>(null)
let blurTimeout: number

const selectedOptionValue = computed<TNullable<string>>({
  get: () => (selectedOption.value ? selectedOption.value.value : null),
  set: (value) => {
    selectedOption.value = options.value.find((option) => option.value === value) || null
  }
})

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
  if (dropdownOpen.value) {
    focusedIndex.value = options.value.findIndex(
      (option) => option.value === selectedOption.value?.value
    )
  }
}

const openDropdown = () => {
  clearTimeout(blurTimeout)
  dropdownOpen.value = true
}

const closeDropdown = () => {
  dropdownOpen.value = false
}

const handleBlur = () => {
  blurTimeout = setTimeout(() => {
    closeDropdown()
  }, 100)
}

const selectOption = (option: Option) => {
  selectedOption.value = option
  if (nativeSelect.value) {
    nativeSelect.value.value = option.value
  }
  dropdownOpen.value = false
}

const updateSelectedOption = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value
  selectedOption.value = options.value.find((option) => option.value === value) || null
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!dropdownOpen.value) {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleDropdown()
      event.preventDefault()
    }
    return
  }

  switch (event.key) {
    case 'ArrowDown':
      focusedIndex.value = (focusedIndex.value + 1) % options.value.length
      event.preventDefault()
      break
    case 'ArrowUp':
      focusedIndex.value = (focusedIndex.value - 1 + options.value.length) % options.value.length
      event.preventDefault()
      break
    case 'Enter':
    case ' ':
      if (focusedIndex.value >= 0 && focusedIndex.value < options.value.length) {
        selectOption(options.value[focusedIndex.value])
      }
      event.preventDefault()
      break
    case 'Escape':
      dropdownOpen.value = false
      event.preventDefault()
      break
  }
}

onMounted(() => {
  selectedOption.value =
    options.value.find((option) => option.value === nativeSelect.value?.value) || null
})
</script>

<template>
  <div
    class="relative w-64"
    tabindex="0"
    @keydown="handleKeydown"
    @blur="handleBlur"
    @focus="openDropdown"
  >
    <div class="absolute">{{ selectedOption.label }}</div>
    <div
      class="flex justify-between items-center p-2 border border-gray-300 cursor-pointer"
      @mousedown.prevent="toggleDropdown"
    >
      {{ 'Select an option' }}
      <span class="ml-2">&#9662;</span>
    </div>
    <ul
      v-if="dropdownOpen"
      class="absolute top-full left-0 w-full border border-gray-300 bg-white mt-1 max-h-48 overflow-y-auto z-10"
    >
      <li
        v-for="(option, index) in options"
        :key="option.value"
        :class="{
          'bg-gray-200': option.value === selectedOption?.value,
          'bg-gray-100': index === focusedIndex
        }"
        class="p-2 cursor-pointer hover:bg-gray-100"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
    <select
      ref="nativeSelect"
      v-model="selectedOptionValue"
      class="hidden"
      @change="updateSelectedOption"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
