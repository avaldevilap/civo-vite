<template>
  <RadioGroup v-model="modelValue">
    <RadioGroupLabel class="mb-2 text-gray-700">Firewall</RadioGroupLabel>
    <div class="space-y-2">
      <RadioGroupOption
        as="template"
        v-for="firewall in firewalls"
        :key="firewall.id"
        :value="firewall"
        v-slot="{ active, checked }"
        @click="$emit('update:modelValue', firewall)"
      >
        <div
          :class="[
            active
              ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
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
                  {{ firewall.name }}
                </RadioGroupLabel>
                <RadioGroupDescription
                  as="span"
                  :class="checked ? 'text-primary-light' : 'text-gray-500'"
                  class="inline"
                >
                </RadioGroupDescription>
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
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription,
} from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/solid';

defineProps(['modelValue', 'firewalls']);
defineEmits(['update:modelValue']);
</script>
