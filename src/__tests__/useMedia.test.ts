import { onMounted, onUnmounted } from 'vue-function-api';
import { useMedia } from '..';
import renderHook from '../util/renderHook';

const matchMediaMock = require('match-media-mock').create();

matchMediaMock.setConfig({ type: 'screen', width: 1280, height: 800 });
window.matchMedia = matchMediaMock;

describe('useMedia', () => {
  it('should be defined', () => {
    expect(useMedia).toBeDefined();
  });

  it('should update matches', () => {
    const { vm } = renderHook<unknown>(() => {
      const pc = useMedia('(min-width: 768px)');
      const sp = useMedia('(max-width: 768px)');
      expect(pc.value).toBe(false);
      expect(sp.value).toBe(false);

      onMounted(() => {
        expect(pc.value).toBe(true);
        expect(sp.value).toBe(false);

        matchMediaMock.setConfig({ type: 'screen', width: 375, height: 667 });

        expect(pc.value).toBe(false);
        expect(sp.value).toBe(true);
      });

      onUnmounted(() => {
        matchMediaMock.setConfig({ type: 'screen', width: 1280, height: 800 });

        expect(pc.value).toBe(false);
        expect(sp.value).toBe(true);
      });
    });

    vm.$destroy();
  });
});
