# useWindowSize

Vue hook that tracks dimensions of the browser window.

## Usage

```jsx {6,11}
import { createComponent } from '@vue/composition-api';
import { useWindowSize } from '@u3u/vue-hooks';

const Demo = createComponent({
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
  width: Wrapper<number>;
  height: Wrapper<number>;
  widthPixel: Wrapper<string>;
  heightPixel: Wrapper<string>;
};
```

### `ReturnValue`

- `width`: [`Wrapper<number>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)
- `height`: [`Wrapper<number>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)
- `widthPixel`: [`Wrapper<string>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)
- `heightPixel`: [`Wrapper<string>`](https://github.com/vuejs/vue-function-api/blob/1d532fe684e2343973ae46fc3ef93e497e6514b1/src/wrappers/index.ts#L5-L7)
