import { useClipboard } from '..';
import renderHook from '../util/renderHook';

describe('useClipboard', () => {
  it('should be defined', () => {
    expect(useClipboard).toBeDefined();
  });

  it('should update route', () => {
    renderHook(() => {
      const { $copyText } = useClipboard();
      expect($copyText).toBeDefined();
    });
  });
});
