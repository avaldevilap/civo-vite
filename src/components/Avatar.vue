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
          :src="src"
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
      <div
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
          cursor-pointer
        "
        @click="logout"
      >
        Logout
      </div>
    </PopoverPanel>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useRouter } from 'vue-router';

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const { remove } = useCookies(['api_key']);

const logout = () => {
  remove('api_key');
  router.push('/login');
};
</script>
