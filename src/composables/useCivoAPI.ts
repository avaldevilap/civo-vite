import { createFetch } from '@vueuse/core';

export const useCivoAPI = createFetch({
  baseUrl: import.meta.env.VITE_CIVO_API_URL,
  options: {
    async beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${import.meta.env.VITE_CIVO_API_KEY}`,
      };

      return { options };
    },
  },
});
