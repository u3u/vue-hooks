import { configure, addParameters } from '@storybook/vue';
import { themes } from '@storybook/theming';
import { plugin } from 'vue-function-api';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
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

Vue.use(plugin);
Vue.use(Vuex);
Vue.use(VueRouter);

function loadStories() {
  const req = require.context('../src', true, /\.story\.tsx$/);
  req.keys().forEach((mod) => req(mod));
}

configure(loadStories, module);
