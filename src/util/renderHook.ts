/* eslint import/no-extraneous-dependencies: off */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { plugin, createComponent } from 'vue-function-api';
import { Context } from 'vue-function-api/dist/types/vue';
import { Router, Store } from '../mocks';
import hooks from '..';

const localVue = createLocalVue();
const router = Router(localVue);
const store = Store(localVue);

localVue.use(hooks);
localVue.use(plugin);

export type SetupFunction<Props> = (
  this: undefined,
  props: {
    [K in keyof Props]: Props[K];
  },
  context: Context,
) => object | null | undefined | void;

export default function renderHook<Props>(setup: SetupFunction<Props>) {
  const App = createComponent<Props>({
    template: `
      <div id="app">
        <router-view></router-view>
      </div>
    `,

    setup,
  });

  return shallowMount(App, {
    localVue,
    router,
    store,
    stubs: ['router-view'],
  });
}
