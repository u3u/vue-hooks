import Vue from 'vue';
import { computed, onMounted } from 'vue-function-api';
import { useRef } from '..';
import renderHook from '../util/renderHook';

describe('useRef', () => {
  it('should be defined', () => {
    expect(useRef).toBeDefined();
  });

  it('should return element when passing ref name', () => {
    renderHook(() => {
      const app = useRef<HTMLDivElement>('app');
      const style = computed(() => (app.value ? app.value.style : undefined));

      expect(app.value).toBeUndefined();
      expect(style.value).toBeUndefined();

      onMounted(async () => {
        await Vue.nextTick();
        expect(app.value).toBeDefined();
        expect(style.value).toBeDefined();
        expect(style.value.width).toBe('1280px');
        expect(style.value.height).toBe('800px');
      });
    });
  });

  it('should return element when passing function', () => {
    renderHook((_, { refs }) => {
      const nav = useRef<HTMLDivElement>(() => refs.nav);
      const style = computed(() => (nav.value ? nav.value.style : undefined));

      expect(nav.value).toBeUndefined();
      expect(style.value).toBeUndefined();

      onMounted(async () => {
        await Vue.nextTick();
        expect(nav.value).toBeDefined();
        expect(style.value).toBeDefined();
        expect(style.value.width).toBe('100%');
      });
    });
  });

  /* eslint-disable no-console */
  it('should throw type error exception when passing object', () => {
    console.error = jest.fn();

    Vue.config.warnHandler = (msg) => {
      expect(msg).toMatch('TypeError: Target must be string or function.');
    };

    renderHook((_, { refs }) => {
      // @ts-ignore
      useRef(refs.nav);
    });
  });
  /* eslint-enable no-console */
});
