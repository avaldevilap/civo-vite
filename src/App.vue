<template>
  <TheSidebar />

  <div class="relative md:ml-64 bg-blueGray-100">
    <TheHeader />

    <router-view />
  </div>

  <!-- <VueQueryDevTools /> -->
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import { useQueryProvider } from 'vue-query';
// import { VueQueryDevTools } from 'vue-query/devtools';

useQueryProvider();
</script>
