import { Store } from 'vuex';
import useStore from '../useStore';
import renderHook from '../util/renderHook';

declare module 'vue/types/vue' {
  interface Vue {
    store: Store<any>;
  }
}

describe('useStore', () => {
  it('should be defined', () => {
    expect(useStore).toBeDefined();
  });

  it('should have store property', () => {
    const { vm } = renderHook(() => ({ store: useStore() }));
    expect(vm).toHaveProperty('store');
  });

  it('should update store', () => {
    const { vm } = renderHook(() => ({ store: useStore() }));
    expect(vm.store.state.count).toBe(0);
    expect(vm.store.getters.plusOne).toBe(1);
    expect(vm.store.state.test.count).toBe(0);
    expect(vm.store.getters['test/minusOne']).toBe(-1);

    vm.store.commit('increment');
    vm.store.commit('test/decrement');

    expect(vm.store.state.count).toBe(1);
    expect(vm.store.getters.plusOne).toBe(2);
    expect(vm.store.state.test.count).toBe(-1);
    expect(vm.store.getters['test/minusOne']).toBe(-2);

    vm.store.dispatch('incrementAsync', 0);
    vm.store.dispatch('test/decrementAsync', 0);

    expect(vm.store.state.count).toBe(1);
    expect(vm.store.getters.plusOne).toBe(2);
    expect(vm.store.state.test.count).toBe(-1);
    expect(vm.store.getters['test/minusOne']).toBe(-2);

    setTimeout(() => {
      expect(vm.store.state.count).toBe(2);
      expect(vm.store.getters.plusOne).toBe(3);
      expect(vm.store.state.test.count).toBe(-2);
      expect(vm.store.getters['test/minusOne']).toBe(-3);
    }, 0);
  });
});
