import { VueConstructor } from 'vue';
import { setRuntimeVM } from './util/runtime';

export * from './useDate';
export { default as useDate } from './useDate';
export { default as useWindowSize } from './useWindowSize';
export { default as useCounter } from './useCounter';
export { default as usePrevious } from './usePrevious';
export { default as useStore } from './useStore';
export { default as useState } from './useState';
export { default as useGetters } from './useGetters';
export { default as useMutations } from './useMutations';
export { default as useActions } from './useActions';
export { default as useRouter } from './useRouter';
export { default as useMountedState } from './useMountedState';
export { default as useTimeout } from './useTimeout';
export { default as useMedia } from './useMedia';
export { default as useAsync } from './useAsync';

export default function install(Vue: VueConstructor) {
  Vue.mixin({ beforeCreate: setRuntimeVM });
}
