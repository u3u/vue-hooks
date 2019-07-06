/* eslint import/no-extraneous-dependencies: off */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { plugin, createComponent } from 'vue-function-api';
import { Router, Store } from '../mocks';

const localVue = createLocalVue();
const router = Router(localVue);
const store = Store(localVue);

localVue.use(plugin);

export default function renderHook(hook: Function) {
  const App = createComponent({
    template: `
      <div id="app">
        <router-view></router-view>
      </div>
    `,

    setup(_, context) {
      return hook(context);
    },
  });

  return shallowMount(App, {
    localVue,
    router,
    store,
    stubs: ['router-view'],
  });
}
