import useWindowSize from '../useWindowSize';
import renderHook from '../util/renderHook';

declare module 'vue/types/vue' {
  interface Vue {
    width: number;
    height: number;
    widthPixel: string;
    heightPixel: string;
  }
}

enum SizeType {
  width = 'width',
  height = 'height',
}

const resize = {
  [SizeType.width](value: number) {
    (window.innerWidth as number) = value;
  },
  [SizeType.height](value: number) {
    (window.innerHeight as number) = value;
  },
};

// simulate window resize
function triggerResize(type: SizeType, value = 0) {
  const dispatchResize = resize[type];
  dispatchResize(value);
  window.dispatchEvent(new Event('resize'));
}

describe('useWindowSize', () => {
  it('should be defined', () => {
    expect(useWindowSize).toBeDefined();
  });

  it('should update width', () => {
    const { vm } = renderHook(useWindowSize);
    triggerResize(SizeType.width, 1280);
    expect(vm.width).toBe(1280);
    expect(vm.widthPixel).toBe('1280px');
    triggerResize(SizeType.width, 375);
    expect(vm.width).toBe(375);
    expect(vm.widthPixel).toBe('375px');
  });

  it('should update height', () => {
    const { vm } = renderHook(useWindowSize);
    triggerResize(SizeType.height, 800);
    expect(vm.height).toBe(800);
    expect(vm.heightPixel).toBe('800px');
    triggerResize(SizeType.height, 667);
    expect(vm.height).toBe(667);
    expect(vm.heightPixel).toBe('667px');
  });
});