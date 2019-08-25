import { configure, addParameters } from '@storybook/vue';
import { themes } from '@storybook/theming';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '../src';
import 'github-markdown-css';
import 'prismjs/themes/prism-tomorrow.css';
import './style.css';

addParameters({
  options: {
    theme: themes.dark,
    panelPosition: 'right',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  },
});

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueCompositionAPI);
Vue.use(hooks);

function loadStories() {
  const req = require.context('../src', true, /\.story\.tsx$/);
  req.keys().forEach((mod) => req(mod));
}

configure(loadStories, module);
