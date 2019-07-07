import { VueConstructor } from 'vue';
import { setRuntimeVM } from './util/runtime';

export * from './useDate';
export { default as useDate } from './useDate';
export { default as useWindowSize } from './useWindowSize';

export default function install(Vue: VueConstructor) {
  Vue.mixin({ beforeCreate: setRuntimeVM });
}
