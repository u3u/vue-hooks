import { computed } from 'vue-function-api';
import { getRuntimeVM } from './util/runtime';

export default function useRouter() {
  const vm = getRuntimeVM();
  const route = computed(() => vm.$route);
  const router = computed(() => vm.$router);
  return { route, router };
}
