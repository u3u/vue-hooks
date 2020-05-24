/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { defineComponent } from '@vue/composition-api';
import { useWindowSize } from '..';
import { ShowDocs } from './components';

type Inject = {
  width: number;
  height: number;
};

const Docs = () => <ShowDocs md={require('../../docs/useWindowSize.md')} />;

const Demo = defineComponent({
  setup() {
    const { width, height } = useWindowSize();
    return { width, height };
  },

  render(this: Vue & Inject) {
    const { width, height } = this;
    return (
      <div>
        <div>width: {width}px</div>
        <div>height: {height}px</div>
      </div>
    );
  },
});

storiesOf('useWindowSize', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
