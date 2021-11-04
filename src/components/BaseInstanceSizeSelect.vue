<template>
  <RadioGroup v-model="modelValue">
    <RadioGroupLabel class="mb-2 text-gray-700">Select size</RadioGroupLabel>
    <div
      class="
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
        v-for="plan in plans"
        :key="plan.name"
        :value="plan"
        v-slot="{ active, checked }"
        @click="$emit('update:modelValue', plan)"
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
                  {{ plan.name }}
                </RadioGroupLabel>
                <RadioGroupDescription
                  as="span"
                  :class="checked ? 'text-primary-light' : 'text-gray-500'"
                >
                  <div class="lg:grid lg:grid-rows-3">
                    <span> {{ plan.ram }}/{{ plan.cpus }}</span>
                    <span class="lg:hidden" aria-hidden="true"> &middot; </span>
                    <span>{{ plan.disk }}</span>
                    <span class="lg:hidden" aria-hidden="true"> &middot; </span>
                    <span>{{ plan.transfer }}</span>
                  </div>
                  <span
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium"
                  >
                    {{ plan.price }}
                  </span>
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

defineProps(['modelValue']);
defineEmits(['update:modelValue']);

const plans = [
  {
    name: 'Extra Small',
    ram: '1GB',
    cpus: '1 CPU',
    disk: '15 GB NVMe',
    transfer: '1 TB',
    price: '$4 per month',
  },
  {
    name: 'Small',
    ram: '2GB',
    cpus: '1 CPU',
    disk: '15 GB NVMe',
    transfer: '1 TB',
    price: '$8 per month',
  },
  {
    name: 'Medium',
    ram: '4GB',
    cpus: '2 CPUs',
    disk: '15 GB NVMe',
    transfer: '2 TB',
    price: '$16 per month',
  },
  {
    name: 'Large',
    ram: '8GB',
    cpus: '4 CPUs',
    disk: '15 GB NVMe',
    transfer: '4 TB',
    price: '$32 per month',
  },
  {
    name: 'Extra Large',
    ram: '16GB',
    cpus: '6 CPUs',
    disk: '15 GB NVMe',
    transfer: '6 TB',
    price: '$64 per month',
  },
  {
    name: '2X Large',
    ram: '32GB',
    cpus: '8 CPUs',
    disk: '15 GB NVMe',
    transfer: '8 TB',
    price: '$128 per month',
  },
];
</script>
