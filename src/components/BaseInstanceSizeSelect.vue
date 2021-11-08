<template>
  <RadioGroup v-model="modelValue">
    <RadioGroupLabel class="text-gray-700">Select size</RadioGroupLabel>
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
        v-for="size in filteredSizes"
        :key="size.name"
        :value="size"
        v-slot="{ active, checked }"
        @click="$emit('update:modelValue', size)"
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
                  {{ size.nice_name }}
                </RadioGroupLabel>
                <RadioGroupDescription
                  as="span"
                  :class="checked ? 'text-primary-light' : 'text-gray-500'"
                >
                  <div class="lg:grid lg:grid-rows-3">
                    <span>
                      {{ size.ram_mb / 1024 }} GB RAM/{{ size.cpu_cores }} CPU
                    </span>
                    <span class="lg:hidden" aria-hidden="true"> &middot; </span>
                    <span>{{ size.disk_gb }} NVMe</span>
                    <!-- <span class="lg:hidden" aria-hidden="true"> &middot; </span> -->
                    <!-- <span>{{ plan.transfer }}</span> -->
                  </div>
                  <!-- <span
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium"
                  >
                    {{ plan.price }}
                  </span> -->
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
import { computed } from 'vue';
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription,
} from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/solid';

const props = defineProps(['modelValue', 'sizes']);
defineEmits(['update:modelValue']);

const filteredSizes = computed(() =>
  props.sizes.filter(
    (size: any) => size.name.includes('k3s') && size.selectable === true
  )
);
</script>
