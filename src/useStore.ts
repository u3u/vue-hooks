import { computed } from 'vue-function-api';
import { Store } from 'vuex';
import withContext from './util/withContext';

export default withContext(function useStore<TState>(vue) {
  const store = computed(() => vue.$store as Store<TState>);
  return store;
});
