<template>
  <span v-if="networksIsLoading || firewallsIsLoading || sizesIsLoading">
    Loading...
  </span>
  <p
    v-else-if="networksIsError || firewallsIsError || sizesIsError"
    class="text-red-500"
  >
    <span v-if="networksIsError">Error: {{ networksError }}</span>
    <span v-if="firewallsIsError">Error: {{ firewallsError }}</span>
    <span v-if="sizesIsError">Error: {{ sizesError }}</span>
  </p>
  <form v-else novalidate @submit.prevent="onSubmit">
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
      <label class="block">
        <span class="text-gray-700">Name</span>
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
        <input
          v-model="nodes"
          class="civo-input"
          type="number"
          name="nodes"
          id="nodes"
          min="1"
          max="10"
          step="1"
        />
      </label>
    </div>

    <BaseNetworkSelect v-model="network" :networks="networks" />

    <BaseFirewallSelect v-model="firewall" :firewalls="firewalls" />

    <BaseInstanceSizeSelect v-model="size" :sizes="sizes" />

    <button class="btn btn-primary" type="submit">Create cluster</button>
  </form>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { object, number } from 'yup';
import BaseNetworkSelect from './BaseNetworkSelect.vue';
import BaseFirewallSelect from './BaseFirewallSelect.vue';
import BaseInstanceSizeSelect from './BaseInstanceSizeSelect.vue';
import axios from 'axios';
import { useQuery } from 'vue-query';
import { Firewall, Network } from '../index';

const validationSchema = object({
  nodes: number()
    .min(1, 'Must be at least 1')
    .max(10, 'Must be at most 10')
    .required('Required'),
});
const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    nodes: 3,
  },
});

const { value: name } = useField('name');
const { value: nodes } = useField('nodes');
const { value: network } = useField('network');
const { value: firewall } = useField('firewall');
const { value: size } = useField('size');

const getNetworks = () => axios.get('/networks').then((res) => res.data);
const getFirewalls = () =>
  axios.get('/firewalls?region=FRA1').then((res) => res.data);
const getSizes = () => axios.get('/sizes').then((res) => res.data);

const {
  isLoading: networksIsLoading,
  isError: networksIsError,
  error: networksError,
  data: networks,
} = useQuery<Network[]>('networks', getNetworks);
const {
  isLoading: firewallsIsLoading,
  isError: firewallsIsError,
  error: firewallsError,
  data: firewalls,
} = useQuery<Firewall[]>('firewalls', getFirewalls);
const {
  isLoading: sizesIsLoading,
  isError: sizesIsError,
  error: sizesError,
  data: sizes,
} = useQuery('sizes', getSizes);

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
