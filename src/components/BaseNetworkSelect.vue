<template>
  <RadioGroup v-model="modelValue">
    <RadioGroupLabel class="text-gray-700">Network</RadioGroupLabel>
    <div
      class="
        mt-2
        grid
        gap-4
        grid-cols-1
        lg:grid-cols-2
        xl:grid-cols-4
        2xl:grid-cols-6
      "
    >
      <RadioGroupOption
        as="template"
        v-for="network in networks"
        :key="network.id"
        :value="network"
        v-slot="{ active, checked }"
        @click="$emit('update:modelValue', network)"
      >
        <div
          :class="[
            active
              ? 'ring-2 ring-offset-2 ring-offset-primary-light ring-white ring-opacity-60'
              : '',
            checked ? 'bg-primary-dark bg-opacity-75 text-white ' : 'bg-white ',
          ]"
          class="
            relative
            flex
            px-5
            py-4
            rounded-lg
            shadow-md
            cursor-pointer
            focus:outline-none
          "
        >
          <div class="flex items-center justify-between w-full">
            <div class="flex items-center">
              <div class="text-sm">
                <RadioGroupLabel
                  as="p"
                  :class="checked ? 'text-white' : 'text-gray-900'"
                  class="font-medium"
                >
                  {{ network.label }}
                </RadioGroupLabel>
              </div>
            </div>
            <div v-show="checked" class="flex-shrink-0 text-white">
              <CheckCircleIcon class="w-6 h-6" />
            </div>
          </div>
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/solid';

defineProps(['modelValue', 'networks']);
defineEmits(['update:modelValue']);
</script>
