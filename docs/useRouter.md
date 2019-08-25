# useRouter

> You need to [use a plugin](https://github.com/u3u/vue-hooks#usage) before using this hook.

Vue hook for [vue-router](https://router.vuejs.org).

## Usage

```jsx {6,11,19,23}
import { createComponent, onMounted, onUnmounted } from '@vue/composition-api';
import { useRouter } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const { route, router } = useRouter();
    let timerId;

    onMounted(() => {
      timerId = window.setInterval(() => {
        router.replace(route.value.meta.next);
      }, 5e3);
    });

    onUnmounted(() => {
      window.clearInterval(timerId);
    });

    return { route };
  },

  render() {
    const { route } = this;
    return (
      <ul>
        {Object.keys(route).map((key) => (
          <li key={key}>
            {key}: <pre>{JSON.stringify(route[key], null, 2)}</pre>
          </li>
        ))}
      </ul>
    );
  },
});
```

## Reference

```typescript
function useRouter(): {
  route: Wrapper<Route>;
  router: VueRouter;
};
```

### `ReturnValue`

- `route`: [`Wrapper<Route>`](https://router.vuejs.org/api/#route-object-properties)
- `router`: [`VueRouter`](https://router.vuejs.org/api/#router-instance-methods)
