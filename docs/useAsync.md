# useAsync

Vue hook for handling async state such as loading, success, error

# Usage

```jsx {9,10,14,17,30}
import { defineComponent } from '@vue/composition-api';
import { useAsync } from '@u3u/vue-hooks';
// async function like ajax etc
import { getSomething } from '@vue/services';

const Demo = defineComponent({
  setup() {
    const { loading, resp, error, run } = useAsync(getSomething, {
      manual: true,
      params: [pass, some, arguments, to, asyncFunction],
    });

    const buttonText = computed(() => {
      if (loading) {
        return 'loading...'
      }
      if (resp.isNotEmpty) {
        return 'success'
      }
      return Fetch
    })

    return { loading, resp, error, run, buttonText };
  },

  render() {
    const { loading, resp, error, run, buttonText } = this;
    return (
      <div>
        {if (!error) {
          <button onClick="run">buttonText</button>
        } else {
          <span>Oops! Fetch Error</span>
        }}
      </div>
    );
  },
});
```
