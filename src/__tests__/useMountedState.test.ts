import Vue from 'vue';
import { onMounted } from '@vue/composition-api';
import { useMountedState } from '..';
import renderHook from '../util/renderHook';

describe('useMountedState', () => {
  it('should be defined', () => {
    expect(useMountedState).toBeDefined();
  });

  it('should return true on mounted', () => {
    renderHook(() => {
      const isMounted = useMountedState();
      expect(isMounted.value).toBe(false);

      onMounted(async () => {
        await Vue.nextTick();
        expect(isMounted.value).toBe(true);
      });
    });
  });
});
