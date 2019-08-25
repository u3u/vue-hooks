/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { createComponent } from '@vue/composition-api';
import { useState, useGetters, useMutations } from '..';
import { ShowDocs } from './components';
import { createStore } from '../mocks';

type Inject = {
  count: number;
  count2: number;
  plusOne: number;
  minusOne: number;
  increment: () => void;
  decrement: () => void;
};

const Docs = () => <ShowDocs md={require('../../docs/useMutations.md')} />;

const Demo = createComponent({
  store: createStore(),

  setup() {
    const state = {
      ...useState(['count']),
      ...useState('test', { count2: 'count' }),
    };

    const getters = {
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne']),
    };

    const mutations = {
      ...useMutations(['increment']),
      ...useMutations('test', ['decrement']),
    };

    return {
      ...state,
      ...getters,
      ...mutations,
    };
  },

  render(this: Vue & Inject) {
    const { count, count2, plusOne, minusOne } = this;
    return (
      <div>
        <div>count: {count}</div>
        <div>plusOne: {plusOne}</div>
        <div style={{ marginTop: '10px' }}>test/count: {count2}</div>
        <div style={{ marginBottom: '10px' }}>test/minusOne: {minusOne}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>test/decrement</button>
      </div>
    );
  },
});

storiesOf('useMutations', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
