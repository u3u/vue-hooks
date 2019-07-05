# vue-hooks ![NPM Version](https://img.shields.io/npm/v/@u3u/vue-hooks.svg) ![Build Status](https://img.shields.io/travis/u3u/vue-hooks/master.svg) ![Code Coverage](https://img.shields.io/codecov/c/github/u3u/vue-hooks.svg)

> ⚡️ Awesome Vue Hooks

Using [`vue-function-api`](https://github.com/vuejs/vue-function-api) to implement useful vue hooks.  
Vue 3.0 has not been released yet, it allows you to use functional-based components in advance.

## Install

```sh
yarn add vue-function-api @u3u/vue-hooks
```

## Usage

```js
import Vue from 'vue';
import { plugin } from 'vue-function-api';
import hooks from '@u3u/vue-hooks';

Vue.use(hooks);
Vue.use(plugin); // Don't forget to use the plugin!
```

```js
import { createComponent } from 'vue-function-api';
import { useWindowSize } from '@u3u/vue-hooks';

export default createComponent({
  setup() {
    const { width, height, widthPixel, heightPixel } = useWindowSize();
    return { width, height };
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

- [`useDate`](./src/useDate.ts) &mdash; Using [`dayjs`](https://github.com/iamkun/dayjs) to process date.
- [`useWindowSize`](./src/useWindowSize.ts) &mdash; Tracks `window` dimensions.

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
