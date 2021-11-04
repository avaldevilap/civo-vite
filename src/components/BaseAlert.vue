<template>
  <div>
    <h1>Error</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  messageType: {
    type: String as PropType<'info' | 'warning' | 'error'>,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>
