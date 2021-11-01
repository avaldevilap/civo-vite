<template>
  <TheSidebar />

  <div class="relative md:ml-64 bg-blueGray-100">
    <TheHeader />

    <router-view />
  </div>
</template>

<script setup lang="ts">
import TheFooter from './components/TheFooter.vue';
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
</script>
