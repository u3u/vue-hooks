import useGetters from '../useGetters';
import renderHook from '../util/renderHook';

describe('useGetters', () => {
  it('should be defined', () => {
    expect(useGetters).toBeDefined();
  });

  it('should update getters', () => {
    type Inject = { plusOne: number; minusOne: number };
    const { vm } = renderHook<Inject>(() => ({
      ...useGetters(['plusOne']),
      ...useGetters('test', ['minusOne']),
    }));
    expect(vm.plusOne).toBe(1);
    expect(vm.minusOne).toBe(-1);

    vm.$store.commit('increment');
    vm.$store.commit('test/decrement');

    expect(vm.plusOne).toBe(2);
    expect(vm.minusOne).toBe(-2);
  });
});
