<template>
  <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        rounded
        mb-6
        xl:mb-0
        shadow-lg
      "
    >
      <div class="flex-auto p-4">
        <div class="flex flex-wrap">
          <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h2 class="text-blueGray-400 uppercase font-bold text-xs">
              {{ region.country_name }}
            </h2>
            <span class="font-semibold text-xl text-blueGray-700">
              {{ region.code }}
            </span>
          </div>
          <div class="relative w-auto pl-4 flex-initial">
            <div
              class="
                text-white
                p-3
                text-center
                inline-flex
                items-center
                justify-center
                w-12
                h-12
                text-4xl
              "
            >
              {{ getCountryFlag() }}
            </div>
          </div>
        </div>
        <template v-if="isLoading">
          <h2 class="px-4 text-2xl text-white">Loading...</h2>
        </template>
        <template v-else-if="isError">
          <h2 class="px-4 text-red-500">Error: {{ error }}</h2>
        </template>
        <template v-else>
          <p class="flex text-sm text-blueGray-400 mt-4">
            <span class="flex mr-2 text-emerald-500">
              {{ instances?.length }}
            </span>
            <span class="whitespace-nowrap">instances</span>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, reactive } from 'vue';
import { ArrowUpIcon, ChartBarIcon } from '@heroicons/vue/solid';
import { Instance, Region } from '../index';
import axios from 'axios';
import { useQuery } from 'vue-query';

const props = defineProps({
  region: { type: Object as PropType<Region>, required: true },
});

const fetchInstancesByRegion = (code: string) =>
  axios.get(`/instances?region=${code}`).then((res) => res.data.items);

const {
  isLoading,
  isError,
  error,
  data: instances,
} = useQuery<Instance[]>(
  reactive(['instances', { code: props.region.code }]),
  () => fetchInstancesByRegion(props.region.code)
);

const getCountryFlag = () => {
  switch (props.region.country) {
    case 'us':
      return '🇺🇸';
    case 'de':
      return '🇩🇪';

    default:
      return '🇬🇧';
  }
};
</script>
