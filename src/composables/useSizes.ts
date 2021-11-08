import { readonly } from 'vue';
import { useCivoAPI } from './useCivoAPI';

export function useSizes() {
  const { isFetching, error, data } = useCivoAPI('/sizes').get().json();

  return {
    sizes: readonly(data),
    isLoading: readonly(isFetching),
    isError: readonly(error),
  };
}
