import { value, watch, Wrapper } from 'vue-function-api';

export default function usePrevious<T>(state: Wrapper<T> | T) {
  const previous = value<T | undefined>(undefined);

  watch('value' in state ? state : () => state, (_, oldVal) => {
    previous.value = oldVal;
  });

  return previous;
}
