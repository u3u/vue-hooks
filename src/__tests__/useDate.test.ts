import useDate, { dayjs } from '../useDate';
import renderHook from '../util/renderHook';

describe('useDate', () => {
  it('should be defined', () => {
    expect(useDate).toBeDefined();
  });

  it('should have date property', () => {
    const { vm } = renderHook(() => ({ date: useDate() }));
    expect(vm).toHaveProperty('date');
  });

  it('should be same date', () => {
    type Inject = { dateA: dayjs.Dayjs; dateB: dayjs.Dayjs };
    const { vm } = renderHook<Inject>(() => ({
      dateA: useDate('2019-05-20'),
      dateB: useDate('2019-05-21'),
    }));
    expect(vm.dateB.add(-1, 'day').isSame(vm.dateA)).toBe(true);
  });

  it('should update date', () => {
    type Inject = { date: dayjs.Dayjs };
    const { vm } = renderHook<Inject>(() => ({
      date: useDate(Date.now(), 1000),
    }));

    const timerId = setInterval(() => {
      expect(vm.date.isSame(Date.now())).toBe(true);
    }, 1000);

    setTimeout(() => clearInterval(timerId), 3000);
  });
});
