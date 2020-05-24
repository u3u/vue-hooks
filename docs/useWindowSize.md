# useWindowSize

Vue hook that tracks dimensions of the browser window.

## Usage

```jsx {6,11}
import { defineComponent } from '@vue/composition-api';
import { useWindowSize } from '@u3u/vue-hooks';

const Demo = defineComponent({
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },

  render() {
    const { width, height } = this;
    return (
      <div>
        <div>width: {width}px</div>
        <div>height: {height}px</div>
      </div>
    );
  },
});
```

## Reference

```typescript
function useWindowSize(): {
  width: Ref<number>;
  height: Ref<number>;
  widthPixel: Ref<string>;
  heightPixel: Ref<string>;
};
```

### `ReturnValue`

- `width`: [`Ref<number>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)
- `height`: [`Ref<number>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)
- `widthPixel`: [`Ref<string>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)
- `heightPixel`: [`Ref<string>`](https://github.com/vuejs/composition-api/blob/a7a68bda5d32139c6cf05b45e385cf8d4ce86707/src/reactivity/ref.ts#L8-L10)
