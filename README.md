# vue-hooks [![NPM Version](https://img.shields.io/npm/v/@u3u/vue-hooks.svg)](https://www.npmjs.com/package/@u3u/vue-hooks) [![Build Status](https://img.shields.io/travis/u3u/vue-hooks/master.svg)](https://travis-ci.org/u3u/vue-hooks) [![Code Coverage](https://img.shields.io/codecov/c/github/u3u/vue-hooks.svg)](https://codecov.io/gh/u3u/vue-hooks)

> ⚡️ Awesome Vue Hooks

Using [`vue-function-api`](https://github.com/vuejs/vue-function-api) to implement useful vue hooks.  
Vue 3.0 has not been released yet, it allows you to use functional-based components in advance.

## Install

```sh
yarn add vue-function-api @u3u/vue-hooks
```

## Documentation [![Netlify Status](https://api.netlify.com/api/v1/badges/e93d1698-f766-4529-b8e0-91fa1162d4cb/deploy-status)](https://app.netlify.com/sites/vue-hooks/deploys)

Docs are available at <https://vue-hooks.netlify.com>

## Usage

[![Edit Vue Hooks Examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-template-66f2o?expanddevtools=1&fontsize=12&module=%2Fsrc%2FApp.vue)

```js
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';

Vue.use(hooks);
Vue.use(VueCompositionAPI); // Don't forget to use the plugin!
```

```jsx
import { createComponent } from '@vue/composition-api';
import { useWindowSize } from '@u3u/vue-hooks';

export default createComponent({
  setup() {
    const { width, height, widthPixel, heightPixel } = useWindowSize();
    return { width, height, widthPixel, heightPixel };
  },

  render() {
    const { width, height, widthPixel, heightPixel } = this;
    return (
      <div id="app" style={{ width: widthPixel, height: heightPixel }}>
        dynamic window size: {width}, {height}
      </div>
    );
  },
});
```

## Hooks

- [`useDate`](https://vue-hooks.netlify.com/?path=/story/usedate--docs) &mdash; Using [`dayjs`](https://github.com/iamkun/dayjs) to process date.
- [`useWindowSize`](https://vue-hooks.netlify.com/?path=/story/usewindowsize--docs) &mdash; Tracks `window` dimensions.
- [`useCounter`](https://vue-hooks.netlify.com/?path=/story/usecounter--docs) &mdash; Tracks state of a number.
- [`usePrevious`](https://vue-hooks.netlify.com/?path=/story/useprevious--docs) &mdash; Returns the previous state or props.
- [`useRouter`](https://vue-hooks.netlify.com/?path=/story/userouter--docs) &mdash; A hook for [`vue-router`](https://github.com/vuejs/vue-router).
- [`useStore`](https://vue-hooks.netlify.com/?path=/story/usestore--docs) &mdash; A hook for [`vuex`](https://github.com/vuejs/vuex).
- [`useState`](https://vue-hooks.netlify.com/?path=/story/usestate--docs) &mdash; A hook for [`mapState`](https://vuex.vuejs.org/api/#mapstate).
- [`useGetters`](https://vue-hooks.netlify.com/?path=/story/usegetters--docs) &mdash; A hook for [`mapGetters`](https://vuex.vuejs.org/api/#mapgetters).
- [`useMutations`](https://vue-hooks.netlify.com/?path=/story/usemutations--docs) &mdash; A hook for [`mapMutations`](https://vuex.vuejs.org/api/#mapmutations).
- [`useActions`](https://vue-hooks.netlify.com/?path=/story/useactions--docs) &mdash; A hook for [`mapActions`](https://vuex.vuejs.org/api/#mapactions).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-hook`
3. Commit your changes: `git commit -am 'feat(hooks): add a new hook'`
4. Push to the branch: `git push origin feat/new-hook`
5. Submit a pull request :D

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://qwq.cat"><img src="https://avatars2.githubusercontent.com/u/20062482?v=4" width="100px;" alt="u3u"/><br /><sub><b>u3u</b></sub></a><br /><a href="https://github.com/u3u/vue-hooks/commits?author=u3u" title="Code">💻</a> <a href="https://github.com/u3u/vue-hooks/commits?author=u3u" title="Documentation">📖</a> <a href="#example-u3u" title="Examples">💡</a> <a href="https://github.com/u3u/vue-hooks/commits?author=u3u" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

## License

[MIT](./LICENSE)
