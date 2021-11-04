<template>
  <form novalidate @submit="onSubmit">
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
      <label class="block">
        <span class="mb-2 text-gray-700">Name</span>
        <input
          v-model="name"
          class="civo-input"
          type="text"
          name="name"
          id="name"
          autofocus
        />
      </label>

      <label class="block">
        <span class="text-gray-700">How many instances?</span>
        <div class="flex items-center space-x-4">
          <span>1</span>
          <input
            v-model="nodes"
            class="civo-input"
            type="range"
            name="nodes"
            id="nodes"
            min="1"
            max="10"
            step="1"
          />
          <span>10</span>
        </div>
      </label>
    </div>

    <BaseNetworkSelect
      v-if="!isFetchingNetworks && !errorNetworks"
      v-model="network"
      :networks="networks"
    />

    <BaseFirewallSelect
      v-if="!isFetchingFirewalls && !errorFirewalls"
      v-model="firewall"
      :firewalls="firewalls"
    />

    <BaseInstanceSizeSelect v-model="size" />

    <button class="btn btn-primary" type="submit">Create cluster</button>
  </form>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { object } from 'yup';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import BaseNetworkSelect from './BaseNetworkSelect.vue';
import BaseFirewallSelect from './BaseFirewallSelect.vue';
import BaseInstanceSizeSelect from './BaseInstanceSizeSelect.vue';
import { useCivoAPI } from '../composables/useCivoAPI';
import { Firewall, Network } from '../index';

const validationSchema = object({});
const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    name: '',
    nodes: 1,
    network: null,
    firewall: null,
    size: null,
  },
});

const { value: name } = useField('name');
const { value: nodes } = useField('nodes');
const { value: network } = useField('network');
const { value: firewall } = useField('firewall');
const { value: size } = useField('size');

const {
  isFetching: isFetchingNetworks,
  error: errorNetworks,
  data: networks,
  execute: executeNetworks,
} = useCivoAPI<Network[]>('/networks', { immediate: false }).json();

const {
  isFetching: isFetchingFirewalls,
  error: errorFirewalls,
  data: firewalls,
  execute: executeFirewalls,
} = useCivoAPI<Firewall[]>('/firewalls', { immediate: false }).json();

Promise.all([executeNetworks(), executeFirewalls()]);

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
