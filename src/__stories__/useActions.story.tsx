/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { createComponent } from '@vue/composition-api';
import { useState, useGetters, useActions } from '..';
import { ShowDocs } from './components';
import { createStore } from '../mocks';

type Inject = {
  count: number;
  count2: number;
  plusOne: number;
  minusOne: number;
  incrementAsync: (delay?: number) => void;
  decrementAsync: (delay?: number) => void;
};

const Docs = () => <ShowDocs md={require('../../docs/useActions.md')} />;

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

    const actions = {
      ...useActions(['incrementAsync']),
      ...useActions('test', ['decrementAsync']),
    };

    return {
      ...state,
      ...getters,
      ...actions,
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
        <button onClick={() => this.incrementAsync()}>incrementAsync</button>
        <button onClick={() => this.decrementAsync()}>
          test/decrementAsync
        </button>
      </div>
    );
  },
});

storiesOf('useActions', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
