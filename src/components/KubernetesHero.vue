<template>
  <div class="relative grid gap-6 grid-cols-1 place-items-center text-white">
    <img class="w-40 h-40 z-10" :src="kubeLogo" alt="Kubernetes logo" />
    <div class="absolute z-0">
      <CloudIcon class="w-24 h-24 animate-clouds-slow-delayed text-gray-300" />
      <CloudIcon class="w-24 h-24 animate-clouds-normal text-gray-300" />
      <CloudIcon class="w-24 h-24 animate-clouds-fast text-gray-300" />
    </div>
    <div class="absolute z-0">
      <CloudIcon class="w-24 h-24 animate-clouds-fast-delayed" />
      <CloudIcon class="w-24 h-24 animate-clouds-normal" />
      <CloudIcon class="w-24 h-24 animate-clouds-slow" />
    </div>
    <h2 class="text-3xl font-black z-10">Let's get started</h2>
    <p class="text-semibold text-center z-10">
      Kubernetes is a scalable container-based cloud system, ready to run your
      applications in a fault tolerant way, but you don't have any yet.
    </p>
    <button
      class="border-2 rounded-lg px-3 py-2 z-10"
      @click="$router.push('/kubernetes/new')"
    >
      Launch my first cluster
    </button>
  </div>
</template>

<script setup lang="ts">
import { CloudIcon, CloudDownloadIcon } from '@heroicons/vue/solid';
import kubeLogo from '../assets/kubernetes-logo.svg';
</script>
