import { mapMutations } from 'vuex';
import { MapperMutations } from './ts';
import { getRuntimeVM } from './util/runtime';

const useMutations: MapperMutations = (...args) => {
  // @ts-ignore
  const mutations = mapMutations(...args);
  const vm = getRuntimeVM();
  const mapper = {};
  Object.keys(mutations).forEach((key) => {
    mapper[key] = mutations[key].bind(vm);
  });

  return mapper;
};

export default useMutations;
