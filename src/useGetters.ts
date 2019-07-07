import { computed } from 'vue-function-api';
import { mapGetters } from 'vuex';
import { MapperGetters } from './ts';
import { getRuntimeVM } from './util/runtime';

const useGetters: MapperGetters = (...args) => {
  // @ts-ignore
  const getters = mapGetters(...args);
  const mapper = {};
  Object.keys(getters).forEach((key) => {
    // TypeError: Cannot read property '_modulesNamespaceMap' of undefined
    // You must get `runtimeVM` in real time in the calculation properties.
    mapper[key] = computed(() => getters[key].call(getRuntimeVM()));
  });

  return mapper;
};

export default useGetters;
