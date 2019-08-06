import useActions from '../useActions';
import renderHook from '../util/renderHook';

interface InjectActions {
  incrementAsync: (delay?: number) => void;
  decrementAsync: (delay?: number) => void;
}

describe('useActions', () => {
  it('should be defined', () => {
    expect(useActions).toBeDefined();
  });

  it('should be defined actions', () => {
    const { vm } = renderHook<InjectActions>(() => ({
      ...useActions(['incrementAsync']),
      ...useActions('test', ['decrementAsync']),
    }));

    expect(vm.incrementAsync).toBeDefined();
    expect(vm.decrementAsync).toBeDefined();
  });

  it('should async update count state', () => {
    const { vm } = renderHook<InjectActions>(() => ({
      ...useActions(['incrementAsync']),
      ...useActions('test', ['decrementAsync']),
    }));

    expect(vm.$store.state.count).toBe(0);
    expect(vm.$store.state.test.count).toBe(0);

    jest.useFakeTimers();

    vm.incrementAsync(0);
    vm.decrementAsync(0);

    setTimeout(() => {
      expect(vm.$store.state.count).toBe(1);
      expect(vm.$store.state.test.count).toBe(-1);
    });

    jest.runAllTimers();
  });
});
