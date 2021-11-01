<template>
  <div class="relative bg-primary md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
      <teleport to="#page-title">
        <h1>Kubequest</h1>
      </teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';

useTitle('Kubequest - Civo.com');
</script>
