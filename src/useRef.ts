import Vue from 'vue';
import { value, onMounted } from 'vue-function-api';
import { UnwrapValue } from 'vue-function-api/dist/wrappers';
import { getRuntimeVM } from './util/runtime';

export type Ref = Vue | Element | Vue[] | Element[];

export default function useRef<T extends Ref>(target: string | (() => Ref)) {
  const ref = value<T>(undefined!);

  onMounted(async () => {
    await Vue.nextTick();
    switch (typeof target) {
      case 'string':
        const { $refs } = getRuntimeVM(); // eslint-disable-line no-case-declarations
        ref.value = $refs[target] as UnwrapValue<T>;
        break;
      case 'function':
        ref.value = target() as UnwrapValue<T>;
        break;
      default:
        throw new TypeError('Target must be string or function.');
    }
  });

  return ref;
}
