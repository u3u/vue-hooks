/* eslint spaced-comment: off, import/no-extraneous-dependencies: off */
/// <reference path="../../node_modules/vue-tsx-support/options/enable-vue-router.d.ts" />
import 'vue-tsx-support/enable-check';
import { storiesOf } from '@storybook/vue';
import { ShowDocs } from './components';

const Docs = () => <ShowDocs md={require('../../docs/useClipboard.md')} />;

storiesOf('useClipboard', module)
  // @ts-ignore
  .add('docs', () => Docs)
