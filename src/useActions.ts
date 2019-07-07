import { mapActions } from 'vuex';
import { MapperActions } from './ts';
import { getRuntimeVM } from './util/runtime';

const useActions: MapperActions = (...args) => {
  // @ts-ignore
  const actions = mapActions(...args);
  const vm = getRuntimeVM();
  const mapper = {};
  Object.keys(actions).forEach((key) => {
    mapper[key] = actions[key].bind(vm);
  });

  return mapper;
};

export default useActions;
