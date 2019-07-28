# useState

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [`mapState`](https://vuex.vuejs.org/api/#mapstate).

## Usage

```jsx {7,8,14,18}
import { createComponent, computed } from 'vue-function-api';
import { useState } from '@u3u/vue-hooks';

const Demo = createComponent({
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
): Object<Wrapper<any>>;
```

> The usage of the `useState` hook is exactly the same as the usage of [`mapState`](https://vuex.vuejs.org/api/#mapstate) (the same parameters)  
> The only difference is that the return value of `useState` is the [`Wrapper<any>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7) dictionary. For each item in the dictionary, you need to use `.value` to get its actual value.

_Please refer to the documentation of [`mapState`](https://vuex.vuejs.org/api/#mapstate) for details._
