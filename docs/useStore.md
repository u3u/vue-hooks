# useStore

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [vuex](https://vuex.vuejs.org).

## Usage

```jsx {6,12,16}
import { createComponent, computed } from '@vue/composition-api';
import { useStore } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const store = useStore();
    const plusOne = computed(() => store.value.state.count + 1);

    const increment = () => store.value.commit('increment');
    const incrementAsync = () => store.value.dispatch('incrementAsync');

    return { store, plusOne, increment, incrementAsync };
  },

  render() {
    const { store, plusOne } = this;
    return (
      <div>
        <div>count: {store.state.count}</div>
        <div>plusOne: {plusOne}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementAsync}>Increment Async</button>
      </div>
    );
  },
});
```

## Reference

```typescript
function useStore<TState>(): Ref<Store<TState>>;
```

### `ReturnValue`

- [`Ref<Store<TState>>`](https://vuex.vuejs.org/api/#vuex-store-instance-properties)

_[`TState`](https://www.typescriptlang.org/docs/handbook/generics.html) is used to specify the type of `store.state`_
