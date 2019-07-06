import VueRouter, { Route } from 'vue-router';
import useRouter from '../useRouter';
import renderHook from '../util/renderHook';

declare module 'vue/types/vue' {
  interface Vue {
    route: Route;
    router: VueRouter;
  }
}

describe('useRouter', () => {
  it('should be defined', () => {
    expect(useRouter).toBeDefined();
  });

  it('shuold have route', () => {
    const { vm } = renderHook(useRouter);
    expect(vm).toHaveProperty('route');
    expect(vm).toHaveProperty('router');
  });

  it('should update route', () => {
    const { vm } = renderHook(useRouter);
    expect(vm.route.name).toBe('index');
    expect(vm.route.meta.title).toBe('Vue Hooks');

    vm.router.push('/test');

    expect(vm.route.name).toBe('404');
    expect(vm.route.meta.title).toBe('404 - Not Found');
  });
});
