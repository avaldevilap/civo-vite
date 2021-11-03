<template>
  <form novalidate @submit="onSubmit">
    <label class="block">
      <span class="text-gray-700">Name</span>
      <input
        v-model="name"
        class="
          mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
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
        class="
          mt-1
          block
          w-full
          rounded-md
          border-gray-300
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
        type="range"
        name="nodes"
        id="nodes"
        min="1"
        max="10"
      />
    </label>

    <RadioGroup v-model="network" class="block">
      <RadioGroupLabel>Network</RadioGroupLabel>
      <RadioGroupOption v-slot="{ checked }" value="startup">
        <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="business">
        <span :class="checked ? 'bg-blue-200' : ''">Business</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="enterprise">
        <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
      </RadioGroupOption>
    </RadioGroup>

    <RadioGroup v-model="firewall" class="block">
      <RadioGroupLabel>Firewall</RadioGroupLabel>
      <RadioGroupOption v-slot="{ checked }" value="startup">
        <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="business">
        <span :class="checked ? 'bg-blue-200' : ''">Business</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="enterprise">
        <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
      </RadioGroupOption>
    </RadioGroup>

    <RadioGroup v-model="size" class="block">
      <RadioGroupLabel>Select size</RadioGroupLabel>
      <RadioGroupOption v-slot="{ checked }" value="startup">
        <span :class="checked ? 'bg-blue-200' : ''">Startup</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="business">
        <span :class="checked ? 'bg-blue-200' : ''">Business</span>
      </RadioGroupOption>
      <RadioGroupOption v-slot="{ checked }" value="enterprise">
        <span :class="checked ? 'bg-blue-200' : ''">Enterprise</span>
      </RadioGroupOption>
    </RadioGroup>

    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { object } from 'yup';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

const validationSchema = object({});
const { handleSubmit } = useForm({
  validationSchema,
  initialValues: { name: '', nodes: 1, network: '', firewall: '', size: '' },
});

const { value: name } = useField('name');
const { value: nodes } = useField('nodes');
const { value: network } = useField('network');
const { value: firewall } = useField('firewall');
const { value: size } = useField('size');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
