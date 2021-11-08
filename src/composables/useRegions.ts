import { ref, toRaw, watch } from 'vue';
import { useCivoAPI } from './useCivoAPI';
import { Region } from '../index';
import { useQuery } from 'vue-query';
import axios from 'axios';

const getRegions = () => axios.get('/regions').then((res) => res.data);

export function useRegions() {
  const { isLoading, error, data } = useQuery('regions', getRegions);
  // const { isFetching, error, data, onFetchResponse, isFinished } =
  //   useCivoAPI<Region[]>('/regions').json();

  return {
    regions: data,
    isLoading,
    isError: error,
  };
}
