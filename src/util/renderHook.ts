/* eslint import/no-extraneous-dependencies: off */
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { plugin, createComponent } from 'vue-function-api';
import { Context } from 'vue-function-api/dist/types/vue';
import { createRouter, createStore } from '../mocks';
import hooks from '..';

const localVue = createLocalVue();
const router = createRouter(localVue);
const store = createStore(localVue);

localVue.use(hooks);
localVue.use(plugin);

export type SetupFunction<Props> = (
  this: undefined,
  props: { [K in keyof Props]: Props[K] },
  context: Context,
) => object | null | undefined | void;

export default function renderHook<V, Props = unknown>(
  setup: SetupFunction<Props>,
) {
  const App = createComponent({
    template: `
      <div ref="app" id="app" :style="{ width: '1280px', height: '800px' }">
        <nav ref="nav" :style="{ width: '100%' }" />
        <router-view />
      </div>
    `,

    setup,
  });

  return shallowMount<Vue & V>(App, {
    localVue,
    router,
    store,
    stubs: ['router-view'],
  });
}
