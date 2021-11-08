import { computed, isProxy, reactive, readonly, toRaw } from 'vue';
import { useCivoAPI } from './useCivoAPI';
import { useRegions } from './useRegions';
import { Instance, Region } from '../index';
import { useQueries } from 'vue-query';
import axios from 'axios';

const fetchInstancesByRegion = (code: string) => {
  axios.get(`/instances?region=${code}`).then((res) => res.data);
};

export function useInstancesByRegion() {
  const { isError, isLoading, regions } = useRegions();

  const r = computed(() => regions);
  console.log(r.value);

  if (!isLoading) {
    const instancesQueries = useQueries(
      regions.value.map((region: Region) => {
        return {
          queryKey: ['region', { regionCode: region.code }],
          queryFn: () => fetchInstancesByRegion(region.code),
        };
      })
    );
    console.log(instancesQueries);
  }

  // onFetchResponse(async (response) => {
  //   if (response.status === 200) {
  //     const calls = regions.value.map((region: Region) => {
  //       const { execute } = useCivoAPI<{ items: Instance[] }>(
  //         `/instances?region=${region.code}`,
  //         {
  //           immediate: false,
  //         }
  //       )
  //         .get()
  //         .json();
  //
  //       return execute;
  //     });
  //
  //     const res = await Promise.all(calls);
  //
  //     res.map((r: any, index) => {
  //       console.log(r);
  //
  //       regions.value[index].instances = [];
  //     });
  //   }
  // });

  return {
    regions,
    isLoading,
    isError,
  };
}
