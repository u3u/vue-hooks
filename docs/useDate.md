# useDate

Vue hook that process date via [`dayjs`](https://github.com/iamkun/dayjs).

## Usage

```jsx {6,11}
import { createComponent } from '@vue/composition-api';
import { useDate } from '@u3u/vue-hooks';

const Demo = createComponent({
  setup() {
    const date = useDate(Date.now(), 1000);
    return { date };
  },

  render() {
    const { date } = this;
    return (
      <ul>
        <li>Date: {date.toString()}</li>
        <li>Standard Format: {date.format('YYYY-MM-DD HH:mm:ss')}</li>
        <li>Relative Time: {date.from(date.add(1, 'd'))}</li>
      </ul>
    );
  },
});
```

## Reference

```typescript
function useDate(date?: dayjs.ConfigType, interval?: number): Ref<dayjs.Dayjs>;
```

### `Arguments`

- `date`

  Date to process.

  - Type: [`dayjs.ConfigType`](https://github.com/iamkun/dayjs/blob/19affc84bbec84bad840e310b390db5f92b2499a/types/index.d.ts#L5)
  - Default: `Date.now()`

- `interval`

  The update interval of the date, if it is `0`, it will not be updated.

  - Type: `number`
  - Default: `0`

### `ReturnValue`

- [`Ref<dayjs.Dayjs>`](https://github.com/iamkun/dayjs/blob/19affc84bbec84bad840e310b390db5f92b2499a/types/index.d.ts#L15-L95)
