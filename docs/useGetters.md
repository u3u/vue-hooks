# useGetters

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [`mapGetters`](https://vuex.vuejs.org/api/#mapgetters).

## Usage

```jsx {8,9,15,19}
import { defineComponent } from '@vue/composition-api';
import { useStore, useGetters } from '@u3u/vue-hooks';

const Demo = defineComponent({
  setup() {
    const store = useStore();
    const getters = {
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne']),
    };

    store.value.dispatch('incrementAsync');
    store.value.dispatch('test/decrementAsync');

    return { ...getters };
  },

  render() {
    const { plusOne, minusOne } = this;
    return (
      <div>
        <div>plusOne: {plusOne}</div>
        <div>test/minusOne: {minusOne}</div>
      </div>
    );
  },
});
```

## Reference

```typescript
function useGetters(
  namespace?: string,
  map: Array<string> | Object<string>,
): Object<Ref<any>>;
```

> The usage of the `useGetters` hook is exactly the same as the usage of [`mapGetters`](https://vuex.vuejs.org/api/#mapgetters) (the same parameters)  
> The only difference is that the return value of `useGetters` is the [`Ref<any>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10) dictionary. For each item in the dictionary, you need to use `.value` to get its actual value.

_Please refer to the documentation of [`mapGetters`](https://vuex.vuejs.org/api/#mapgetters) for details._
