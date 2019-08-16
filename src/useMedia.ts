import { value, onMounted, onUnmounted } from 'vue-function-api';

export default function useMedia(query, defaultState = false) {
  let mql;
  const matches = value(defaultState);
  const updateMatches = () => {
    if (mql) matches.value = mql.matches;
  };

  onMounted(() => {
    mql = window.matchMedia(query);
    mql.addListener(updateMatches);
    matches.value = mql.matches;
  });

  onUnmounted(() => {
    mql.removeListener(updateMatches);
  });

  return matches;
}
