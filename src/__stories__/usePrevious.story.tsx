/* eslint no-plusplus: off, import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent, ref } from '@vue/composition-api';
import { usePrevious } from '..';
import { ShowDocs } from './components';

type Inject = {
  count: number;
  prevCount: number;
  increment: () => void;
  decrement: () => void;
};

const Docs = () => <ShowDocs md={require('../../docs/usePrevious.md')} />;

const Demo = defineComponent({
  setup() {
    const count = ref(0);
    const prevCount = usePrevious(count);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return { count, prevCount, increment, decrement };
  },

  render(this: Vue & Inject) {
    const { count, prevCount } = this;
    return (
      <div>
        <div>now: {count}</div>
        <div>before: {String(prevCount)}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  },
});

storiesOf('usePrevious', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
