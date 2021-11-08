import { createFetch } from '@vueuse/core';
import { useCookies } from '@vueuse/integrations/useCookies';

export const useCivoAPI = createFetch({
  baseUrl: import.meta.env.VITE_CIVO_API_URL,
  options: {
    async beforeFetch({ options }) {
      const cookies = useCookies(['api_key']);
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${cookies.get('api_key')}`,
      };

      return { options };
    },
  },
});
