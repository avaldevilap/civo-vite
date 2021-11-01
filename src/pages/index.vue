<template>
  <div class="relative bg-primary md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <teleport to="#page-title">
        <h1>Dashboard</h1>
      </teleport>
      <div>
        <div class="flex flex-wrap">
          <template v-if="store.isFetching">
            <h2 class="px-4 text-2xl text-white">Loading...</h2>
          </template>
          <template v-else-if="store.error">
            <h2 class="px-4 text-red-500">Error: {{ store.error }}</h2>
          </template>
          <template v-else>
            <StatsCard
              v-for="region in store.regions"
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
          <Table />
        </div>
        <!--        <div class="w-full xl:w-4/12 px-4"></div>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import StatsCard from '../components/StatsCard.vue';
import Table from '../components/Table.vue';
import axios from 'axios';
import { Region } from '../types';
import { useTitle } from '@vueuse/core';

interface Store {
  isFetching: boolean;
  error: Error | null;
  regions: Region[];
}

useTitle('Civo.com');

const store = reactive<Store>({
  isFetching: false,
  error: null,
  regions: [],
});

const fetchRegions = async () => {
  try {
    const response = await axios.get('/regions');
    store.regions = response.data;
  } catch (err: any) {
    store.error = err.message;
  }
};

const fetchInstances = async () => {
  const calls = store.regions.map(({ code }) => {
    return axios.get('/instances', { params: { region: code } });
  });

  try {
    const responses = await Promise.all(calls);
    responses.map((el, index) => {
      store.regions[index].instances = el.data.items;
    });
  } catch (err: any) {
    store.error = err.message;
  }
};

onMounted(() => {
  store.isFetching = true;
  fetchRegions()
    .then(() => fetchInstances())
    .finally(() => {
      store.isFetching = false;
    });
});
</script>
