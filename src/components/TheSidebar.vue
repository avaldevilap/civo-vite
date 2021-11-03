<template>
  <nav
    class="
      md:left-0
      md:block
      md:fixed
      md:top-0
      md:bottom-0
      md:overflow-y-auto
      md:flex-row
      md:flex-nowrap
      md:overflow-hidden
      shadow-xl
      bg-white
      flex flex-wrap
      items-center
      justify-between
      relative
      md:w-64
      z-10
      py-4
      px-6
    "
  >
    <div
      class="
        md:flex-col md:items-stretch md:min-h-full md:flex-nowrap
        px-0
        flex flex-wrap
        items-center
        justify-between
        w-full
        mx-auto
      "
    >
      <button
        class="
          cursor-pointer
          text-black
          opacity-50
          md:hidden
          px-3
          py-1
          text-xl
          leading-none
          bg-transparent
          rounded
          border border-solid border-transparent
        "
        type="button"
        @click="open"
      >
        <MenuIcon class="w-5 h-5" />
      </button>
      <router-link
        to="/"
        class="
          md:block
          text-left
          md:pb-2
          text-blueGray-600
          mr-0
          inline-block
          whitespace-nowrap
          text-sm
          uppercase
          font-bold
          p-4
          px-0
        "
      >
        <img class="w-16" :src="civoLogo" alt="Civo Logo" />
      </router-link>
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
          <Avatar :src="profileImg" />
        </li>
      </ul>
      <div
        class="
          md:flex
          md:flex-col
          md:items-stretch
          md:opacity-100
          md:relative
          md:mt-4
          md:m-0
          md:shadow-none
          md:px-0
          shadow
          absolute
          top-0
          left-0
          right-0
          z-40
          overflow-y-auto overflow-x-hidden
          h-auto
          items-center
          flex-1
          rounded
          bg-white
          m-2
          py-3
          px-6
        "
        :class="{ hidden: !show }"
      >
        <div
          class="
            md:min-w-full md:hidden
            block
            pb-4
            mb-4
            border-b border-solid border-blueGray-200
            h-20
          "
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                to="/"
                class="
                  md:block
                  text-left
                  md:pb-2
                  text-blueGray-600
                  mr-0
                  inline-block
                  whitespace-nowrap
                  text-sm
                  uppercase
                  font-bold
                  p-4
                  px-0
                "
              >
                <img class="w-16" :src="civoLogo" alt="Civo Logo" />
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="
                  cursor-pointer
                  text-black
                  opacity-50
                  md:hidden
                  px-3
                  py-1
                  text-xl
                  leading-none
                  bg-transparent
                  rounded
                  border border-solid border-transparent
                "
                @click="close"
              >
                <XIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="
                border-0
                px-3
                py-2
                h-12
                border border-solid border-blueGray-500
                placeholder-blueGray-300
                text-blueGray-600
                bg-white
                rounded
                text-base
                leading-snug
                shadow-none
                outline-none
                focus:outline-none
                w-full
                font-normal
              "
            />
          </div>
        </form>

        <hr class="md:min-w-full" />

        <ul class="md:flex-col md:min-w-full flex flex-col list-none space-y-2">
          <li v-for="option in options" :key="option.link" class="items-center">
            <Disclosure v-if="option.children">
              <DisclosureButton
                class="
                  w-full
                  py-3
                  px-4
                  inline-flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  block
                  text-gray-500
                  hover:bg-primary-dark hover:text-white
                  rounded-lg
                "
              >
                <component :is="option.icon" class="w-6 h-6 mr-2"></component>
                {{ option.text }}
                <ChevronDownIcon class="w-4 h-4 ml-auto" />
              </DisclosureButton>
              <DisclosurePanel class="text-gray-500">
                <ul class="mt-2 flex flex-col space-y-2">
                  <li
                    v-for="child in option.children"
                    :key="child.link"
                    class="ml-8"
                  >
                    <router-link
                      :to="child.link"
                      custom
                      v-slot="{ href, navigate, isActive }"
                    >
                      <a
                        :href="href"
                        :class="{
                          'text-white bg-primary-dark px-4 rounded-lg':
                            isActive,
                          'text-gray-500': !isActive,
                        }"
                        class="
                          w-full
                          text-xs
                          uppercase
                          py-3
                          font-bold
                          block
                          hover:bg-primary-dark hover:text-white
                          px-4
                          rounded-lg
                          inline-flex
                          items-center
                        "
                        @click="navigate"
                      >
                        <component
                          :is="child.icon"
                          class="w-6 h-6 mr-2"
                        ></component>
                        {{ child.text }}
                      </a>
                    </router-link>
                  </li>
                </ul>
              </DisclosurePanel>
            </Disclosure>

            <router-link
              v-else
              :to="option.link"
              custom
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                :class="{
                  'text-white bg-primary-dark px-4 rounded-lg': isActive,
                  'text-gray-500': !isActive,
                }"
                class="
                  w-full
                  text-xs
                  uppercase
                  py-3
                  font-bold
                  block
                  hover:bg-primary-dark hover:text-white
                  rounded-lg
                  px-4
                  inline-flex
                  items-center
                "
                @click="navigate"
              >
                <component :is="option.icon" class="w-6 h-6 mr-2"></component>
                {{ option.text }}
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import civoLogo from '../assets/civo-logo.svg';
import profileImg from '../assets/profile-pic.png';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import {
  TemplateIcon,
  AcademicCapIcon,
  CubeIcon,
  ShieldCheckIcon,
  ServerIcon,
  GlobeIcon,
  BookOpenIcon,
  ChatAlt2Icon,
  CogIcon,
  MenuIcon,
  BellIcon,
  XIcon,
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import Avatar from './Avatar.vue';

const show = ref(false);
const options = ref([
  { link: '/', icon: TemplateIcon, text: 'Dashboard' },
  { link: '/kubernetes', icon: CubeIcon, text: 'Kubernetes' },
  { link: '/academy', icon: AcademicCapIcon, text: 'Academy' },
  { link: '/kubequest', icon: ShieldCheckIcon, text: 'KubeQuest' },
  { link: '/compute', icon: ServerIcon, text: 'Compute' },
  {
    link: null,
    icon: GlobeIcon,
    text: 'Manage',
    children: [
      { link: '/manage/networks', icon: null, text: 'Networks' },
      { link: '/manage/firewalls', icon: null, text: 'Firewalls' },
      { link: '/manage/volumes', icon: null, text: 'Volumes' },
      { link: '/manage/dns', icon: null, text: 'DNS' },
      { link: '/manage/ssh_keys', icon: null, text: 'SSH Keys' },
      { link: '/manage/webhooks', icon: null, text: 'Webhooks' },
    ],
  },
  {
    link: null,
    icon: BookOpenIcon,
    text: 'Content',
    children: [
      { link: '/content/learn', icon: null, text: 'Learn Guides' },
      { link: '/content/guides', icon: null, text: 'Create Guide' },
    ],
  },
  { link: '/suggestions', icon: ChatAlt2Icon, text: 'Suggestions' },
  {
    link: null,
    icon: CogIcon,
    text: 'Account',
    children: [
      { link: '/account/profile', icon: null, text: 'Settings' },
      { link: '/account/billing', icon: null, text: 'Billing' },
      { link: '/account/activity', icon: null, text: 'Activity' },
      { link: '/account/quota', icon: null, text: 'Quota' },
    ],
  },
]);

const open = () => (show.value = true);
const close = () => (show.value = false);
</script>
