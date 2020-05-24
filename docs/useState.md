# useState

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [`mapState`](https://vuex.vuejs.org/api/#mapstate).

## Usage

```jsx {7,8,14,18}
import { defineComponent, computed } from '@vue/composition-api';
import { useState } from '@u3u/vue-hooks';

const Demo = defineComponent({
  setup() {
    const state = {
      ...useState(['count']),
      ...useState('test', { count2: 'count' }),
    };

    const plusOne = computed(() => state.count.value + 1);
    const minusOne = computed(() => state.count2.value - 1);

    return { ...state, plusOne, minusOne };
  },

  render() {
    const { count, count2, plusOne, minusOne } = this;
    return (
      <div>
        <div>count: {count}</div>
        <div>plusOne: {plusOne}</div>
        <div style={{ marginTop: '10px' }}>test/count: {count2}</div>
        <div>test/minusOne: {minusOne}</div>
      </div>
    );
  },
});
```

## Reference

```typescript
function useState(
  namespace?: string,
  map: Array<string> | Object<string | function>,
): Object<Ref<any>>;
```

> The usage of the `useState` hook is exactly the same as the usage of [`mapState`](https://vuex.vuejs.org/api/#mapstate) (the same parameters)  
> The only difference is that the return value of `useState` is the [`Ref<any>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10) dictionary. For each item in the dictionary, you need to use `.value` to get its actual value.

_Please refer to the documentation of [`mapState`](https://vuex.vuejs.org/api/#mapstate) for details._
