import Vue from 'vue';
import { value, onMounted } from 'vue-function-api';

export default function useMountedState() {
  const isMounted = value(false);

  onMounted(async () => {
    await Vue.nextTick();
    isMounted.value = true;
  });

  return isMounted;
}
