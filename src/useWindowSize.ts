import { ref, computed, onMounted, onUnmounted } from '@vue/composition-api';

export default function useWindowSize() {
  const width = ref(0);
  const height = ref(0);
  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  const widthPixel = computed(() => `${width.value}px`);
  const heightPixel = computed(() => `${height.value}px`);

  onMounted(() => {
    width.value = window.innerWidth
    height.value = window.innerHeight
    window.addEventListener('resize', update);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', update);
  });

  return { width, height, widthPixel, heightPixel };
}
