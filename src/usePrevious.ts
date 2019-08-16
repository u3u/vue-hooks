import { value, watch, Wrapper } from 'vue-function-api';
import { UnwrapValue } from 'vue-function-api/dist/wrappers';

export default function usePrevious<T>(
  state: Wrapper<UnwrapValue<T>> | (() => UnwrapValue<T>),
) {
  const previous = value<T>(undefined!);

  watch(state, (_, oldVal) => {
    previous.value = oldVal;
  });

  return previous;
}
