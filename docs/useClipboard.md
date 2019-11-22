# useClipboard

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [vue-clipboard2](https://github.com/Inndy/vue-clipboard2#readme).

## Usage

```jsx {6,11,19,23}
import { createComponent } from '@vue/composition-api';
import { useClipboard } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const copyToClipboard = function(this: Vue) {
      this.$copyText('foobar')
        .then(() => {}, () => { return; });
    };

    return {
      ...useClipboard(),
    };
  },
});
```

## Reference

```typescript
function useClipboard(): {
  $copyText: (
    text: string,
    container?: object | HTMLElement,
  ) => Promise<{
    action: string;
    text: string;
    trigger: String | HTMLElement | HTMLCollection | NodeList;
    clearSelection: () => void;
  }>;
};
```

### `ReturnValue`

- `$copyText`: [`Function`](https://github.com/Inndy/vue-clipboard2#sample-2)
