import { computed } from 'vue-function-api';
import { getRuntimeVM } from './util/runtime';

export default function useRouter() {
  const vm = getRuntimeVM();
  const route = computed(() => vm.$route);
  return { route, router: vm.$router };
}
