<template>
  <div class="relative bg-primary md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <teleport to="#page-title">
        <h1>Dashboard</h1>
      </teleport>
      <div>
        <div class="flex flex-wrap">
          <template v-if="isLoading">
            <h2 class="px-4 text-2xl text-white">Loading...</h2>
          </template>
          <template v-else-if="isError">
            <h2 class="px-4 text-red-500">Error: {{ error }}</h2>
          </template>
          <template v-else>
            <StatsCard
              v-for="region in regions"
              :key="region.code"
              :region="region"
            />
          </template>
        </div>
      </div>
    </div>
  </div>

  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    <div>
      <div class="flex flex-wrap mt-4">
        <div class="w-full mb-12 xl:mb-0 px-4">
          <!--          <Table />-->
        </div>
        <!--        <div class="w-full xl:w-4/12 px-4"></div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { computed, onMounted, reactive, toRef } from 'vue';
import StatsCard from '../components/StatsCard.vue';
import Table from '../components/Table.vue';
import axios from 'axios';
import { useTitle } from '@vueuse/core';
import { Region } from '../index';
// import { useRegions } from '../composables/useRegions';
// import { useInstancesByRegion } from '../composables/useInstancesByRegion';
// import { useCivoAPI } from '../composables/useCivoAPI';
import { useQuery } from 'vue-query';

// interface Store {
//   isFetching: boolean;
//   error: Error | null;
//   regions: Region[];
// }

useTitle('Civo.com');

const getRegions = () => axios.get('/regions').then((res) => res.data);

const {
  isLoading,
  isError,
  error,
  data: regions,
} = useQuery('regions', getRegions);

// const store = reactive<Store>({
//   isFetching: false,
//   error: null,
//   regions: [],
// });
//
// const fetchRegions = async () => {
//   try {
//     const response = await axios.get('/regions');
//     store.regions = response.data;
//   } catch (err: any) {
//     store.error = err.message;
//   }
// };
//
// const fetchInstances = async () => {
//   const calls = store.regions.map(({ code }) => {
//     return axios.get('/instances', { params: { region: code } });
//   });
//
//   try {
//     const responses = await Promise.all(calls);
//     responses.map((el, index) => {
//       store.regions[index].instances = el.data.items;
//     });
//   } catch (err: any) {
//     store.error = err.message;
//   }
// };
//
// onMounted(() => {
//   store.isFetching = true;
//   fetchRegions()
//     .then(() => fetchInstances())
//     .finally(() => {
//       store.isFetching = false;
//     });
// });
</script>
