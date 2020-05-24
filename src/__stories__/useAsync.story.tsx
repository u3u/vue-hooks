/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent } from '@vue/composition-api';
import { useAsync } from '..';
import { ShowDocs } from './components';

type Inject = {
  loading: boolean;
  error: Error | null;
  resp: any;
  run: (...args: any[]) => Promise<any>;
};

const sleep = (ms = 0) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, ms);
  });

const Docs = () => <ShowDocs md={require('../../docs/useAsync.md')} />;

const Demo = defineComponent({
  setup() {
    const { run, loading, resp, error } = useAsync(sleep, {
      manual: true,
      params: [2000],
    });

    return {
      run,
      loading,
      resp,
      error,
    };
  },

  render(this: Vue & Inject) {
    const { run, loading, resp, error } = this;
    return (
      <div>
        <div>loading state: {loading.toString()}</div>
        <div>resp state: {resp}</div>
        <div style={{ marginTop: '10px' }}>error state: {error}</div>
        <button onClick={() => run(2000)}>
          {loading ? 'loading...' : 'Click to fetch something'}
        </button>
      </div>
    );
  },
});

storiesOf('useAsync', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
