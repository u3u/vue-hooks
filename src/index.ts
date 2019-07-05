/* eslint import/prefer-default-export: off */
import Vue from 'vue';
import { plugin } from 'vue-function-api';

Vue.use(plugin);

export * from './useDate';
export { default as useDate } from './useDate';
export { default as useWindowSize } from './useWindowSize';
