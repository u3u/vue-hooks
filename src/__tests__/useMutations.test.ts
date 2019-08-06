import { useMutations } from '..';
import renderHook from '../util/renderHook';

interface InjectMutations {
  increment: Function;
  decrement: Function;
}

describe('useMutations', () => {
  it('should be defined', () => {
    expect(useMutations).toBeDefined();
  });

  it('should be defined mutations', () => {
    const { vm } = renderHook<InjectMutations>(() => ({
      ...useMutations(['increment']),
      ...useMutations('test', ['decrement']),
    }));

    expect(vm.increment).toBeDefined();
    expect(vm.decrement).toBeDefined();
  });

  it('should update count state', () => {
    const { vm } = renderHook<InjectMutations>(() => ({
      ...useMutations(['increment']),
      ...useMutations('test', ['decrement']),
    }));

    expect(vm.$store.state.count).toBe(0);
    expect(vm.$store.state.test.count).toBe(0);

    vm.increment();
    vm.decrement();

    expect(vm.$store.state.count).toBe(1);
    expect(vm.$store.state.test.count).toBe(-1);
  });
});
