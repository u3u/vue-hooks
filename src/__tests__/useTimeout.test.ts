import { onMounted, onUnmounted } from 'vue-function-api';
import { useTimeout } from '..';
import renderHook from '../util/renderHook';

describe('useTimeout', () => {
  it('should be defined', () => {
    expect(useTimeout).toBeDefined();
  });

  it('should return true after 3000ms', () => {
    const { vm } = renderHook<unknown>(() => {
      jest.useFakeTimers();
      const ready = useTimeout(3000);
      expect(ready.value).toBe(false);

      onMounted(() => {
        expect(jest.getTimerCount()).toBe(1);
        jest.runOnlyPendingTimers();
        expect(ready.value).toBe(true);
      });

      onUnmounted(() => {
        expect(jest.getTimerCount()).toBe(0);
      });
    });

    vm.$destroy();
  });
});
