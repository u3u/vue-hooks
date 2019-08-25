/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { createComponent, computed } from '@vue/composition-api';
import { useStore, useState } from '..';
import { ShowDocs } from './components';
import { createStore } from '../mocks';

type Inject = {
  count: number;
  count2: number;
  plusOne: number;
  minusOne: number;
};

const Docs = () => <ShowDocs md={require('../../docs/useState.md')} />;

const Demo = createComponent({
  store: createStore(),

  setup() {
    const store = useStore();
    const state = {
      ...useState(['count']),
      ...useState('test', { count2: 'count' }),
    };

    const plusOne = computed(() => state.count.value + 1);
    const minusOne = computed(() => state.count2.value - 1);

    store.value.dispatch('incrementAsync');
    store.value.dispatch('test/decrementAsync');

    return { ...state, plusOne, minusOne };
  },

  render(this: Vue & Inject) {
    const { count, count2, plusOne, minusOne } = this;
    return (
      <div>
        <div>count: {count}</div>
        <div>plusOne: {plusOne}</div>
        <div style={{ marginTop: '10px' }}>test/count: {count2}</div>
        <div>test/minusOne: {minusOne}</div>
      </div>
    );
  },
});

storiesOf('useState', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
