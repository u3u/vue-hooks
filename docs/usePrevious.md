# usePrevious

Vue hook that returns the previous value.

## Usage

```jsx {7,16}
import { createComponent, value } from 'vue-function-api';
import { usePrevious } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const count = value(0);
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
function usePrevious<T>(state: T | Wrapper<T>): Wrapper<T | undefined>;
```

### `Arguments`

- `state`

  `props` or `Wrapper<any>`

  - Type: [`T | Wrapper<T>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)
  - Default: `undefined`

### `ReturnValue`

- [`Wrapper<T | undefined>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)

_[`T`](https://www.typescriptlang.org/docs/handbook/generics.html) depends on your `arguments` type_
