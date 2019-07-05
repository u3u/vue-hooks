/* eslint no-underscore-dangle: off */
import Vue from 'vue';
import once from 'lodash.once';

export interface VueElement extends Element {
  __vue__: Vue | undefined;
}

function getNonAppRoot() {
  const elements = document.querySelectorAll<VueElement>('*');
  return Array.from(elements).find((x) => x.__vue__);
}

export default once(function getRoot() {
  const el = document.querySelector<VueElement>('#app') || getNonAppRoot();
  const vue = el && el.__vue__;
  if (vue) return vue.$root;
  throw new ReferenceError('Not found vue instance.');
});
