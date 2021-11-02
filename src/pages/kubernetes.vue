<template>
  <div class="relative bg-primary md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full overflow-x-hidden">
      <teleport to="#page-title">
        <h1>Kubernetes clusters</h1>
      </teleport>

      <div>
        <KubernetesHero />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import KubernetesHero from '../components/KubernetesHero.vue';

useTitle('Kubernetes - Civo.com');
</script>
