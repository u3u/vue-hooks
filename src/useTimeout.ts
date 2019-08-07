import { value, onMounted, onUnmounted } from 'vue-function-api';

export default function useTimeout(delay = 0) {
  const ready = value(false);
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
