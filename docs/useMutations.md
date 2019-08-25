# useMutations

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [`mapMutations`](https://vuex.vuejs.org/api/#mapmutations).

## Usage

```jsx {17,18,24,29,36,37}
import { createComponent } from '@vue/composition-api';
import { useState, useGetters, useMutations } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const state = {
      ...useState(['count']),
      ...useState('test', { count2: 'count' }),
    };

    const getters = {
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne']),
    };

    const mutations = {
      ...useMutations(['increment']),
      ...useMutations('test', ['decrement']),
    };

    return {
      ...state,
      ...getters,
      ...mutations,
    };
  },

  render() {
    const { count, count2, plusOne, minusOne } = this;
    return (
      <div>
        <div>count: {count}</div>
        <div>plusOne: {plusOne}</div>
        <div style={{ marginTop: '10px' }}>test/count: {count2}</div>
        <div style={{ marginBottom: '10px' }}>test/minusOne: {minusOne}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>test/decrement</button>
      </div>
    );
  },
});
```

## Reference

```typescript
function mapMutations(
  namespace?: string,
  map: Array<string> | Object<string | function>,
): Object;
```

> The usage of the `useMutations` hook is exactly the same as the usage of [`mapMutations`](https://vuex.vuejs.org/api/#mapmutations).

_Please refer to the documentation of [`mapMutations`](https://vuex.vuejs.org/api/#mapmutations) for details._
