<template>
  <Popover class="relative">
    <PopoverButton class="flex items-center">
      <span
        class="
          w-12
          h-12
          text-sm text-white
          bg-blueGray-200
          inline-flex
          items-center
          justify-center
          rounded-full
        "
      >
        <img
          alt="Avatar"
          class="w-full rounded-full align-middle border-none shadow-lg"
          :src="$props.src"
        />
      </span>
    </PopoverButton>

    <PopoverPanel
      class="
        absolute
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded
        shadow-lg
        min-w-48
      "
    >
      <router-link
        v-for="option in options"
        :key="option.link"
        class="
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-blueGray-700
        "
        :to="option.link"
      >
        {{ option.text }}
      </router-link>
    </PopoverPanel>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

const props = defineProps({
  src: String,
});

const options = ref([{ link: '/analytics', text: 'Analytics' }]);
</script>
