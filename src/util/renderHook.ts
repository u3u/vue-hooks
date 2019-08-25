/* eslint import/no-extraneous-dependencies: off */
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueCompositionAPI, { createComponent } from '@vue/composition-api';
import { SetupFunction, Data } from '@vue/composition-api/dist/component';
import { createRouter, createStore } from '../mocks';
import hooks from '..';

const localVue = createLocalVue();
const router = createRouter(localVue);
const store = createStore(localVue);

localVue.use(hooks);
localVue.use(VueCompositionAPI);

export default function renderHook<V, Props = unknown, Data = unknown>(
  setup: SetupFunction<Props, Data>,
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
