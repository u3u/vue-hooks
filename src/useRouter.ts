import { computed } from 'vue-function-api';
import withContext from './util/withContext';

export default withContext(function useRouter(vue) {
  const route = computed(() => vue.$route);
  const router = computed(() => vue.$router);
  return { route, router };
});
