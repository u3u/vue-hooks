/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent } from '@vue/composition-api';
import { useStore, useGetters } from '..';
import { ShowDocs } from './components';
import { createStore } from '../mocks';

type Inject = {
  plusOne: number;
  minusOne: number;
};

const Docs = () => <ShowDocs md={require('../../docs/useGetters.md')} />;

const Demo = defineComponent({
  store: createStore(),

  setup() {
    const store = useStore();
    const getters = {
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne']),
    };

    store.value.dispatch('incrementAsync');
    store.value.dispatch('test/decrementAsync');

    return { ...getters };
  },

  render(this: Vue & Inject) {
    const { plusOne, minusOne } = this;
    return (
      <div>
        <div>plusOne: {plusOne}</div>
        <div>test/minusOne: {minusOne}</div>
      </div>
    );
  },
});

storiesOf('useGetters', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
