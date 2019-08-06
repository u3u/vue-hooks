import { onMounted, onUnmounted } from 'vue-function-api';
import { useDate } from '..';
import renderHook from '../util/renderHook';

describe('useDate', () => {
  it('should be defined', () => {
    expect(useDate).toBeDefined();
  });

  it('should be same date', () => {
    renderHook(() => {
      const date1 = useDate('2019-05-20');
      const date2 = useDate('2019-05-21');
      expect(date2.value.add(-1, 'day').isSame(date1.value)).toBe(true);
    });
  });

  it('should update date', () => {
    jest.useFakeTimers();
    const { vm } = renderHook<unknown>(() => {
      const date = useDate(Date.now(), 1000);
      let timerId;

      onMounted(() => {
        timerId = setInterval(() => {
          expect(date.value.isSame(Date.now(), 's')).toBe(true);
        }, 1000);
        jest.runOnlyPendingTimers();
      });

      onUnmounted(() => {
        clearInterval(timerId);
        expect(jest.getTimerCount()).toBe(0);
      });
    });

    setTimeout(() => vm.$destroy(), 3000);
    expect(jest.getTimerCount()).toBe(3);
    jest.runOnlyPendingTimers();
  });
});
