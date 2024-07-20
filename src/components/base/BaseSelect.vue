<script lang="ts" setup>
import { ref } from 'vue'
import type { TNullable } from '@/types'

const props = defineProps<{
  data: string[]
  defaultOptionLabel?: string
  dontShowSelected?: boolean
}>()

const modelValue = defineModel<string>()

const dropdownOpen = ref(false)
const focusedIndex = ref(-1)
const nativeSelect = ref<TNullable<HTMLSelectElement>>(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
  if (dropdownOpen.value) {
    focusedIndex.value = props.data.findIndex((option) => option === modelValue.value)
  }
}

const openDropdown = () => (dropdownOpen.value = true)

const closeDropdown = () => (dropdownOpen.value = false)

const handleBlur = () => closeDropdown()

const selectOption = (option: string) => {
  if (nativeSelect.value) nativeSelect.value.value = option
  modelValue.value = option
  dropdownOpen.value = false
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
      focusedIndex.value = (focusedIndex.value + 1) % props.data.length
      event.preventDefault()
      break
    case 'ArrowUp':
      focusedIndex.value = (focusedIndex.value - 1 + props.data.length) % props.data.length
      event.preventDefault()
      break
    case 'Enter':
    case ' ':
      if (focusedIndex.value >= 0 && focusedIndex.value < props.data.length) {
        selectOption(props.data[focusedIndex.value])
      }
      event.preventDefault()
      break
    case 'Escape':
      dropdownOpen.value = false
      event.preventDefault()
      break
  }
}
</script>

<template>
  <div
    class="relative"
    tabindex="0"
    @keydown="handleKeydown"
    @blur="handleBlur"
    @focus="openDropdown"
  >
    <div
      class="flex justify-between items-center p-2 border border-gray-300 cursor-pointer"
      @mousedown.prevent="toggleDropdown"
    >
      <span
        v-if="dontShowSelected"
        class="ml-2"
      >
        {{ defaultOptionLabel }}
      </span>
      <span
        v-else
        class="ml-2"
      >
        {{ modelValue }}
      </span>
      <span class="ml-2">&#9662;</span>
    </div>
    <ul
      v-if="dropdownOpen"
      class="absolute top-full left-0 w-full border border-gray-300 bg-white mt-1 max-h-48 overflow-y-auto z-10"
    >
      <li
        v-for="(option, index) in data"
        :key="option"
        :class="{
          'bg-gray-200': option === modelValue,
          'bg-gray-100': index === focusedIndex
        }"
        class="p-2 cursor-pointer hover:bg-gray-100"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
    <select
      ref="nativeSelect"
      v-model="modelValue"
      class="hidden"
    >
      <option
        v-for="option in data"
        :key="option"
        :value="option"
        :label="option"
      />
    </select>
  </div>
</template>
