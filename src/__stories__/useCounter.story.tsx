/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent } from '@vue/composition-api';
import { useCounter } from '..';
import { ShowDocs } from './components';

type Inject = {
  count: number;
  inc: Function;
  dec: Function;
  set: Function;
  reset: Function;
};

const Docs = () => <ShowDocs md={require('../../docs/useCounter.md')} />;

const Demo = defineComponent({
  setup() {
    const [count, { inc, dec, set, reset }] = useCounter();
    return {
      count,
      inc,
      dec,
      set,
      reset,
    };
  },

  render(this: Vue & Inject) {
    const { count, inc, dec, set, reset } = this;
    return (
      <div>
        <div>count: {count}</div>
        <button onClick={() => inc()}>Increment</button>
        <button onClick={() => dec()}>Decrement</button>
        <button onClick={() => inc(5)}>Increment (+5)</button>
        <button onClick={() => dec(5)}>Decrement (-5)</button>
        <button onClick={() => set(100)}>Set (100)</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => reset(25)}>Reset (25)</button>
      </div>
    );
  },
});

storiesOf('useCounter', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
