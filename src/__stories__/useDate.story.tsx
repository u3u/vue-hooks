/* eslint import/no-extraneous-dependencies: off */
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { createComponent } from 'vue-function-api';
import { useDate, dayjs } from '..';
import { ShowDocs } from './components';

type Inject = {
  date: dayjs.Dayjs;
};

const Docs = () => <ShowDocs md={require('../../docs/useDate.md')} />;

const Demo = createComponent({
  setup() {
    const date = useDate(Date.now(), 1000);
    return { date };
  },

  render(this: Vue & Inject) {
    const { date } = this;
    const symbols = [1, -1];
    const unitTypeShort = ['d', 'M', 'y', 'h', 'm', 's', 'ms'];
    const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
    const randomUnitTypeIndex = Math.floor(Math.random() * unitTypeShort.length); // prettier-ignore
    const inc = (randomUnitTypeIndex + 1) * symbols[randomSymbolIndex];
    const unit = unitTypeShort[randomUnitTypeIndex] as dayjs.UnitTypeShort;

    return (
      <ul>
        <li>Date: {date.toString()}</li>
        <li>Standard Format: {date.format('YYYY-MM-DD HH:mm:ss')}</li>
        <li>
          Relative Time ({inc} {unit}): {date.from(date.add(inc, unit))}
        </li>
      </ul>
    );
  },
});

storiesOf('useDate', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
