import { ref, onMounted, onUnmounted } from '@vue/composition-api';

export default function useTimeout(delay = 0) {
  const ready = ref(false);
  let timerId: number;

  onMounted(() => {
    timerId = window.setTimeout(() => {
      ready.value = true;
    }, delay);
  });

  onUnmounted(() => {
    window.clearTimeout(timerId);
  });

  return ready;
}
