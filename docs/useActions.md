# useActions

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [`mapActions`](https://vuex.vuejs.org/api/#mapactions).

## Usage

```jsx {17,18,24,29,36,37}
import { defineComponent } from '@vue/composition-api';
import { useState, useGetters, useActions } from '@u3u/vue-hooks';

const Demo = defineComponent({
  setup() {
    const state = {
      ...useState(['count']),
      ...useState('test', { count2: 'count' }),
    };

    const getters = {
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne']),
    };

    const actions = {
      ...useActions(['incrementAsync']),
      ...useActions('test', ['decrementAsync']),
    };

    return {
      ...state,
      ...getters,
      ...actions,
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
        <button onClick={() => this.incrementAsync()}>incrementAsync</button>
        <button onClick={() => this.decrementAsync()}>
          test/decrementAsync
        </button>
      </div>
    );
  },
});
```

## Reference

```typescript
function useActions(
  namespace?: string,
  map: Array<string> | Object<string | function>,
): Object;
```

> The usage of the `useActions` hook is exactly the same as the usage of [`mapActions`](https://vuex.vuejs.org/api/#mapactions).

_Please refer to the documentation of [`mapActions`](https://vuex.vuejs.org/api/#mapactions) for details._
