import useDate, { dayjs } from '../useDate';
import renderHook from '../util/renderHook';

declare module 'vue/types/vue' {
  interface Vue {
    dateA: dayjs.Dayjs;
    dateB: dayjs.Dayjs;
  }
}

describe('useDate', () => {
  it('should be defined', () => {
    expect(useDate).toBeDefined();
  });

  it('should have date property', () => {
    const { vm } = renderHook(() => ({ date: useDate() }));
    expect(vm).toHaveProperty('date');
  });

  it('should be same date', () => {
    const { vm } = renderHook(() => ({
      dateA: useDate('2019-05-20'),
      dateB: useDate('2019-05-21'),
    }));
    const dateA = vm.dateA as dayjs.Dayjs;
    const dateB = vm.dateB as dayjs.Dayjs;
    expect(dateB.add(-1, 'day').isSame(dateA)).toBe(true);
  });
});
