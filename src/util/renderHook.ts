/* eslint import/no-extraneous-dependencies: off */
import Vue from 'vue';
import { plugin, createComponent } from 'vue-function-api';
import { mount } from '@vue/test-utils';

Vue.use(plugin);

export default function renderHook(hook: Function) {
  const vm = createComponent({
    template: `<div></div>`,
    setup() {
      return hook();
    },
  });

  return mount(vm);
}
