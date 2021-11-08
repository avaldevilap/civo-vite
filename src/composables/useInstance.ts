import { useCivoAPI } from './useCivoAPI';
import { Instance, Region } from '../index';

export function useInstance() {
  const { isFetching, error, data, onFetchResponse } =
    useCivoAPI<Instance[]>('/instances').json();

  return {
    instance: data,
    isLoading: isFetching,
    isError: error,
    onFetchResponse,
  };
}
