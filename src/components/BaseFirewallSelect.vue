<template>
  <template v-if="firewalls.length">
    <RadioGroup v-model="modelValue">
      <RadioGroupLabel class="text-gray-700">Firewall</RadioGroupLabel>
      <div
        class="
          mt-2
          grid
          gap-4
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-4
          2xl:grid-cols-6
        "
      >
        <RadioGroupOption
          as="template"
          v-for="firewall in firewalls"
          :key="firewall.id"
          :value="firewall"
          v-slot="{ active, checked }"
          @click="$emit('update:modelValue', firewall)"
        >
          <div
            :class="[
              active
                ? 'ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60'
                : '',
              checked
                ? 'bg-primary-dark bg-opacity-75 text-white '
                : 'bg-white ',
            ]"
            class="
              relative
              flex
              px-5
              py-4
              rounded-lg
              shadow-md
              cursor-pointer
              focus:outline-none
            "
          >
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center">
                <div class="text-sm">
                  <RadioGroupLabel
                    as="p"
                    :class="checked ? 'text-white' : 'text-gray-900'"
                    class="font-medium"
                  >
                    {{ firewall.name }}
                  </RadioGroupLabel>
                  <RadioGroupDescription
                    as="span"
                    :class="checked ? 'text-primary-light' : 'text-gray-500'"
                    class="inline"
                  >
                  </RadioGroupDescription>
                </div>
              </div>
              <div v-show="checked" class="flex-shrink-0 text-white">
                <CheckCircleIcon class="w-6 h-6" />
              </div>
            </div>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </template>

  <template v-else>
    <fieldset>
      <legend class="text-gray-700">Firewall</legend>

      <div class="flex flex-wrap items-center justify-center">
        <p class="text-gray-500">No firewalls found.</p>
        <Disclosure>
          <DisclosureButton class="btn btn-link">
            Create new firewall
          </DisclosureButton>
          <DisclosurePanel class="w-full text-gray-500">
            <!-- <pre>{{ value }}</pre> -->
            <form
              class="
                grid
                gap-2
                grid-cols-1
                lg:grid-cols-2
                xl:grid-cols-4
                2xl:grid-cols-6
              "
              @submit.prevent="onSubmit"
            >
              <label
                v-for="rule in rules"
                :key="rule.value"
                :class="
                  isChecked(rule.value)
                    ? 'bg-primary-dark bg-opacity-75 text-white '
                    : 'bg-white '
                "
                class="
                  bg-white
                  relative
                  flex
                  justify-between
                  items-center
                  px-5
                  py-4
                  rounded-lg
                  shadow-md
                  cursor-pointer
                  focus:outline-none
                "
              >
                <span>{{ rule.label }}</span>
                <input
                  class="hidden"
                  v-model="value"
                  type="checkbox"
                  name="newRule"
                  :value="rule.value"
                  :id="rule.value"
                />
                <div
                  v-show="isChecked(rule.value)"
                  class="flex-shrink-0 text-white"
                >
                  <CheckCircleIcon class="w-6 h-6" />
                </div>
              </label>
            </form>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </fieldset>
  </template>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/solid';
import { useField, useForm } from 'vee-validate';

defineProps(['modelValue', 'firewalls']);
defineEmits(['update:modelValue']);

const rules = [
  { label: 'Open port 80 for non-encrypted web traffic', value: '80' },
  { label: 'Open port 443 for encrypted web traffic', value: '443' },
  { label: 'Open port 6443 for Kubernetes access to all IPs', value: '6443' },
  {
    label: 'Open port 6443 for Kubernetes access to my IP only - 94.189.227.46',
    value: '6443:94.189.227.46/32',
  },
  {
    label:
      "I understand what I'm doing and will configure the firewall myself, open all ports to all traffic",
    value: 'all',
  },
];

const { handleSubmit } = useForm({
  initialValues: { rules: [rules[0].value, rules[1].value, rules[2].value] },
});

const { value } = useField<string[]>('rules');
watch(value, (newValue) => {
  // if (newValue.includes('all') && newValue.length > 1) {
  // value.value = ['all'];
  // } else if () {}
});

const isChecked = (rule: string) => value.value.includes(rule);

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
