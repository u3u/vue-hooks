# usePrevious

Vue hook that returns the previous value.

## Usage

```jsx {7,12,16}
import { createComponent, ref } from '@vue/composition-api';
import { usePrevious } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const count = ref(0);
    const prevCount = usePrevious(count);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return { count, prevCount, increment, decrement };
  },

  render() {
    const { count, prevCount } = this;
    return (
      <div>
        <div>now: {count}</div>
        <div>before: {String(prevCount)}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  },
});
```

## Reference

```typescript
function usePrevious<T>(state: Ref<T> | (() => T)): Ref<T>;
```

### `Arguments`

- `state`

  `props` or `Ref<any>`

  - Type: [`Ref<T> | (() => T)`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)

### `ReturnValue`

- [`Ref<T>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)

_[`T`](https://www.typescriptlang.org/docs/handbook/generics.html) depends on your `arguments` type_
