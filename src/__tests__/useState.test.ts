import useState from '../useState';
import renderHook from '../util/renderHook';

describe('useState', () => {
  it('should be defined', () => {
    expect(useState).toBeDefined();
  });

  it('should update state', () => {
    type Inject = { count1: number; count2: number };
    const { vm } = renderHook<Inject>(() => ({
      ...useState({ count1: 'count' }),
      ...useState('test', { count2: 'count' }),
    }));
    expect(vm.count1).toBe(0);
    expect(vm.count2).toBe(0);

    vm.$store.commit('increment');
    vm.$store.commit('test/decrement');

    expect(vm.count1).toBe(1);
    expect(vm.count2).toBe(-1);
  });
});
