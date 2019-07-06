/* eslint import/no-extraneous-dependencies: off */
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { plugin, createComponent } from 'vue-function-api';
import VueRouter from 'vue-router';

const localVue = createLocalVue();

localVue.use(VueRouter);
localVue.use(plugin);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Vue Hooks' },
    },
    {
      path: '*',
      name: '404',
      meta: { title: '404 - Not Found' },
    },
  ],
});

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
    stubs: ['router-view'],
  });
}
