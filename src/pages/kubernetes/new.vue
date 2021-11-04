<template>
  <div class="relative bg-primary md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full overflow-x-hidden">
      <teleport to="#page-title">
        <h1>{{ title }}</h1>
      </teleport>
    </div>
  </div>

  <div class="px-4 md:px-10 mx-auto w-full -m-24">
    <div class="flex flex-wrap">
      <div
        class="
          relative
          w-full
          xl:max-w-4xl xl:mx-auto
          2xl:max-w-7xl
          p-4
          rounded-lg
          shadow-lg
          bg-gray-100
          border-0
        "
      >
        <ClusterForm class="grid grid-cols-1 gap-6 z-20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import { useTitle } from '@vueuse/core';
import ClusterForm from '../../components/ClusterForm.vue';

const title = useTitle('Create a new Kubernetes cluster');
</script>
