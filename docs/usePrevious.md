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

  - Type: [`Ref<T> | (() => T)`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)

### `ReturnValue`

- [`Ref<T>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)

_[`T`](https://www.typescriptlang.org/docs/handbook/generics.html) depends on your `arguments` type_
