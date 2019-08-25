/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { Store } from 'vuex';
import { storiesOf } from '@storybook/vue';
import { createComponent, computed } from '@vue/composition-api';
import { useStore } from '..';
import { ShowDocs } from './components';
import { createStore } from '../mocks';
import { CounterState } from '../mocks/store';

type Inject = {
  store: Store<CounterState>;
  plusOne: number;
  increment: () => void;
  incrementAsync: () => void;
};

const Docs = () => <ShowDocs md={require('../../docs/useStore.md')} />;

const Demo = createComponent({
  store: createStore(),

  setup() {
    const store = useStore<CounterState>();
    const plusOne = computed(() => store.value.state.count + 1);

    const increment = () => store.value.commit('increment');
    const incrementAsync = () => store.value.dispatch('incrementAsync');

    return { store, plusOne, increment, incrementAsync };
  },

  render(this: Vue & Inject) {
    const { store, plusOne } = this;
    return (
      <div>
        <div>count: {store.state.count}</div>
        <div>plusOne: {plusOne}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementAsync}>Increment Async</button>
      </div>
    );
  },
});

storiesOf('useStore', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
