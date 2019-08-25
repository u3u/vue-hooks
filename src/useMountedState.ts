import Vue from 'vue';
import { ref, onMounted } from '@vue/composition-api';

export default function useMountedState() {
  const isMounted = ref(false);

  onMounted(async () => {
    await Vue.nextTick();
    isMounted.value = true;
  });

  return isMounted;
}
